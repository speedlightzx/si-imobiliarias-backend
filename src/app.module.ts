import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { ListsModule } from './lists/lists.module';
import { LeadsModule } from './leads/leads.module';
import { ChatbotGateway } from './chatbot/chatbot.gateway';

@Module({
  imports: [DatabaseModule, AuthModule, ListsModule, LeadsModule],
  controllers: [AppController],
  providers: [AppService, ChatbotGateway],
})
export class AppModule {}
