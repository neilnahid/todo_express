import { PrismaClient, User, UserCreateInput } from '@prisma/client';

export default class UserService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async createUser(userDTO: UserCreateInput) {
    const userExists = await this.prisma.user.findOne({
      where: { email: userDTO.email },
    });
    if (userExists) throw new Error(`${userDTO.email} already exists`);
    return this.prisma.user.create({
      data: {
        ...userDTO,
      },
      select: {
        id: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async getUser(id: number) {
    const user = await this.prisma.user.findOne({
      where: { id },
    });
    return user;
  }

  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  async userExists({ id, email }: User) {
    const user = this.prisma.user.findOne({ where: { id, email } });
    return !!user;
  }

  async deleteUser(id: number) {
    this.prisma.user.delete({ where: { id } });
  }
}
