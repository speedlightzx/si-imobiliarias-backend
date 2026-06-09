import { Body, Controller, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { LeadsService } from './leads.service';
import type { AuthenticatedRequest } from '@/types/AuthenticatedRequest';
import { AuthGuard } from '@/auth/auth.guard';
import { createLeadDTO } from './dto/createLead.dto';

@Controller('leads')
export class LeadsController {

    constructor(
        private readonly leadsService:LeadsService
    ) {}

    @Post()
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.CREATED)
    async createLead(
        @Body() body: createLeadDTO,
        @Req() req: AuthenticatedRequest
    ) {
        const userId = req.userId
        return await this.leadsService.createLead(body, userId)
    }
}
