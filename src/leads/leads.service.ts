import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { createLeadDTO } from './dto/createLead.dto';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '@/database/schemas/schemas'
import { and, eq } from 'drizzle-orm';

@Injectable()
export class LeadsService {

    constructor(
        @Inject('db')
        private readonly db:NodePgDatabase<typeof schema>
    ) {}

    async createLead(dto: createLeadDTO, userId:number) {
        const [listExists] = await this.db
        .select()
        .from(schema.lists)
        .where(
            and(
                eq(schema.lists.id, dto.listId),
                eq(schema.lists.user_id, userId)
            )
        )

        if(!listExists) throw new NotFoundException(`Não foi encontrado nenhuma lista com o ID ${dto.listId}`)

        await this.db
        .insert(schema.leads)
        .values({
            name: dto.name,
            status: dto.status,
            list_id: dto.listId
        })
    }
}
