import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatController } from './chat.controller';
import {ChatService} from "./chat.service";
import { ChatSchema } from './chat.schema';
import {OpenAiService} from "./openai.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Chat', schema: ChatSchema }]),
    // ... other imports if any
  ],
  controllers: [ChatController],
  providers:[ChatService, OpenAiService],
  exports:[ChatService]
})
export class ChatModule {}
