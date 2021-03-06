import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';

@Module({
  providers: [FilesService, PrismaService],
  controllers: [FilesController],
})
export class FilesModule {}
