import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}
  async create(createMenuDto: CreateMenuDto) {
    return await this.prisma.menuItem.create({
      data: {
        name: createMenuDto.name,
        description: createMenuDto.description,
        price: createMenuDto.price,
        category: {
          connect: { id: createMenuDto.categoryId },
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.menuItem.findMany({
      include: { category: true },
    });
  }

  async findOne(id: string) {
    return await this.prisma.menuItem.findUnique({
      where: { id },
      include: { category: true },
    });
  }

  async update(id: string, updateMenuDto: UpdateMenuDto) {
    return await this.prisma.menuItem.update({
      where: { id },
      data: updateMenuDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.menuItem.delete({ where: { id } });
  }
}
