import { PrismaClient } from '@prisma/client';

export async function seedCategories(prisma: PrismaClient) {
  const categories = [
    { name: '食費', slug: 'food' },
    { name: '日用品', slug: 'daily_goods' },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    });
  }
}
