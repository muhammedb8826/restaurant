import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService){}
  async create(createOrderDto: CreateOrderDto) {
    return await this.prisma.order.create({
      data: {
      ...createOrderDto,
      waiterId: undefined,
      categoryId: undefined,
      waiter: {
        connect: { id: createOrderDto.waiterId }
      },
      category: {
        connect: { id: createOrderDto.categoryId }
      }
      }
    })
  }

  async findAll() {
    return await this.prisma.order.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.order.findUnique({
      where: { id }
    })
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    return await this.prisma.order.update({
      where: { id },
      data: updateOrderDto
    })
  }

  async remove(id: string) {
    return await this.prisma.order.delete({
      where: { id }
    })
  }
}
