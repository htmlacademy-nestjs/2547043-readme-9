import { Module } from '@nestjs/common';
import { BlogUserController } from './blog-user.controller';
import { BlogUserService } from './blog-user.service';
import { BlogUserRepository } from './blog-user.repository.js';
import { BlogUserFactory } from './blog-user.factory.js';

@Module({
  controllers: [BlogUserController],
  providers: [
    BlogUserRepository,
     BlogUserService,
    BlogUserFactory,
  ],
  exports: [BlogUserRepository]
})
export class BlogUserModule {}
