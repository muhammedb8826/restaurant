import { Injectable } from '@nestjs/common';
import { CreateWaiterDto } from './dto/create-waiter.dto';
import { UpdateWaiterDto } from './dto/update-waiter.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WaitersService {
  constructor(private prisma: PrismaService){}
 async create(createWaiterDto: CreateWaiterDto) {
    return await this.prisma.waiter.create({
      data: createWaiterDto
    })
  }

  async findAll() {
    return await this.prisma.waiter.findMany({
      include: { orders: true }
    });
  }

  async findOne(id: string) {
    return await this.prisma.waiter.findUnique({
      where: { id },
      include: { orders: true }
    })
  }

  async update(id: string, updateWaiterDto: UpdateWaiterDto) {
    return await this.prisma.waiter.update({
      where: { id },
      data: updateWaiterDto
    })
  }

  async remove(id: string) {
    return await this.prisma.waiter.delete({
      where: { id }
    })
  }
}
