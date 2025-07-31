const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const electronics = await prisma.department.create({
    data: { name: "Electronics" },
  });

  const fitness = await prisma.department.create({
    data: { name: "Fitness" },
  });

  await prisma.product.createMany({
    data: [
      {
        name: "Laptop Pro",
        description: "Powerful laptop",
        price: 1200,
        departmentId: electronics.id,
      },
      {
        name: "Fitness Tracker",
        description: "Tracks your activity",
        price: 99,
        departmentId: fitness.id,
      },
    ],
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
