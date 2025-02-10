import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { WaitersModule } from './waiters/waiters.module';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [PrismaModule, WaitersModule, CategoriesModule, OrdersModule, MenuModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
