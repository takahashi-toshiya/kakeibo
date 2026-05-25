import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

export async function seedUsers(prisma: PrismaClient) {
  const passwordHash = await bcrypt.hash('password123', 10);

  await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      passwordHash,
    },
  });
}
