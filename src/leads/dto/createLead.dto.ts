import { IsEnum, IsInt, IsString, MaxLength } from "class-validator";
import { LeadStatus } from "@/types/LeadStatusEnum";

export class createLeadDTO {

    @IsString()
    @MaxLength(120)
    name!:string

    @IsEnum(LeadStatus)
    status!:LeadStatus

    @IsInt()
    listId!:number
}