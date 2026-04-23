const { PrismaClient, ProductStatus } = require("../generated/prisma");
const slugify = require("slugify");

const prisma = new PrismaClient();

const makeSlug = (value) =>
  slugify(value, { lower: true, strict: true, locale: "fr" });

const products = [
  {
    category: "Chaussures",
    brand: "Nike",
    model: "Air Max Pulse",
    story: "Silhouette nerveuse, confortable, pensée pour un flow quotidien premium.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=80",
    items: [
      {
        name: "Air Max Pulse Black Chrome",
        color: "Black Chrome",
        priceText: "149€",
        imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=80",
        sizes: ["40", "41", "42", "43", "44"]
      },
      {
        name: "Air Max Pulse Phantom",
        color: "Phantom",
        priceText: "149€",
        imageUrl: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?auto=format&fit=crop&w=1400&q=80",
        sizes: ["39", "40", "41", "42", "43"]
      }
    ]
  },
  {
    category: "Chaussures",
    brand: "Asics",
    model: "Gel-Kayano 14",
    story: "Un mix tech-runner et chic futuriste, parfait pour une vitrine streetwear haut de gamme.",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1400&q=80",
    items: [
      {
        name: "Gel-Kayano 14 Silver Lime",
        color: "Silver Lime",
        priceText: "179€",
        imageUrl: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1400&q=80",
        sizes: ["40", "41", "42", "43", "44", "45"]
      },
      {
        name: "Gel-Kayano 14 Pearl Graphite",
        color: "Pearl Graphite",
        priceText: "179€",
        imageUrl: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1400&q=80",
        sizes: ["39", "40", "42", "43", "44"]
      }
    ]
  },
  {
    category: "Vestes",
    brand: "Stone Island",
    model: "Ghost Overshirt",
    story: "Ligne monochrome, volume sec, attitude luxe discret.",
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1400&q=80",
    items: [
      {
        name: "Ghost Overshirt Shadow",
        color: "Shadow",
        priceText: "329€",
        imageUrl: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1400&q=80",
        sizes: ["S", "M", "L", "XL"]
      }
    ]
  }
];

async function upsertTree(entry) {
  const category = await prisma.category.upsert({
    where: { slug: makeSlug(entry.category) },
    update: {
      name: entry.category,
      description: `Sélection ${entry.category.toLowerCase()} avec direction artistique streetwear chic.`,
      heroImage: entry.image
    },
    create: {
      name: entry.category,
      slug: makeSlug(entry.category),
      description: `Sélection ${entry.category.toLowerCase()} avec direction artistique streetwear chic.`,
      heroImage: entry.image
    }
  });

  const brand = await prisma.brand.upsert({
    where: { slug: makeSlug(entry.brand) },
    update: {
      name: entry.brand,
      categoryId: category.id,
      description: `Univers ${entry.brand} en lecture premium.`,
      imageUrl: entry.image
    },
    create: {
      name: entry.brand,
      slug: makeSlug(entry.brand),
      categoryId: category.id,
      description: `Univers ${entry.brand} en lecture premium.`,
      imageUrl: entry.image
    }
  });

  const model = await prisma.productModel.upsert({
    where: { slug: makeSlug(`${entry.brand}-${entry.model}`) },
    update: {
      brandId: brand.id,
      name: entry.model,
      story: entry.story,
      heroImage: entry.image,
      priceHint: entry.items[0]?.priceText || "Prix sur demande"
    },
    create: {
      brandId: brand.id,
      name: entry.model,
      slug: makeSlug(`${entry.brand}-${entry.model}`),
      story: entry.story,
      heroImage: entry.image,
      priceHint: entry.items[0]?.priceText || "Prix sur demande"
    }
  });

  for (let index = 0; index < entry.items.length; index += 1) {
    const item = entry.items[index];
    const product = await prisma.product.create({
      data: {
        modelId: model.id,
        name: item.name,
        color: item.color,
        priceText: item.priceText,
        imageUrl: item.imageUrl,
        imageAlt: `${entry.brand} ${entry.model} ${item.color}`,
        status: ProductStatus.PUBLISHED,
        sortOrder: index
      }
    });

    await prisma.productSize.createMany({
      data: item.sizes.map((sizeLabel) => ({
        productId: product.id,
        sizeLabel
      }))
    });
  }
}

async function main() {
  await prisma.orderRequestItem.deleteMany();
  await prisma.orderRequest.deleteMany();
  await prisma.productSize.deleteMany();
  await prisma.product.deleteMany();
  await prisma.productModel.deleteMany();
  await prisma.brand.deleteMany();
  await prisma.category.deleteMany();

  for (const entry of products) {
    await upsertTree(entry);
  }

  console.log("Seed V2 terminée.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
