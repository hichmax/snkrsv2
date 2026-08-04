import { prisma } from "@/lib/prisma";
import { ProductStatus } from "@/generated/prisma";

export async function getVisibleCatalog() {
  return prisma.category.findMany({
    where: { isVisible: true },
    orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    include: {
      brands: {
        where: { isVisible: true },
        orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
        include: {
          models: {
            where: { isVisible: true },
            orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
            include: {
              _count: {
                select: {
                  products: {
                    where: { status: ProductStatus.PUBLISHED }
                  }
                }
              }
            }
          }
        }
      }
    }
  });
}

export async function getPublicNav() {
  return prisma.category.findMany({
    where: { isVisible: true },
    orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    take: 5,
    select: { id: true, name: true, slug: true }
  });
}

export async function getCatalogStaticParams() {
  return prisma.category.findMany({
    where: { isVisible: true },
    select: {
      slug: true,
      brands: {
        where: { isVisible: true },
        select: {
          slug: true,
          models: {
            where: { isVisible: true },
            select: { slug: true }
          }
        }
      }
    }
  });
}

export async function getHomeData() {
  const [categories, featured, latest, productCount] = await Promise.all([
    prisma.category.findMany({
      where: { isVisible: true },
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
      include: {
        brands: {
          where: { isVisible: true },
          orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
          include: {
            models: {
              where: { isVisible: true },
              take: 3,
              orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }]
            }
          }
        }
      }
    }),
    prisma.product.findMany({
      where: { status: ProductStatus.PUBLISHED, isFeatured: true },
      orderBy: [{ updatedAt: "desc" }],
      include: {
        model: {
          include: {
            brand: { include: { category: true } }
          }
        },
        sizes: true
      }
    }),
    prisma.productModel.findMany({
      where: { isVisible: true, brand: { isVisible: true, category: { isVisible: true } } },
      take: 6,
      orderBy: [{ updatedAt: "desc" }],
      include: {
        brand: { include: { category: true } },
        _count: {
          select: {
            products: {
              where: { status: ProductStatus.PUBLISHED }
            }
          }
        }
      }
    }),
    prisma.product.count({ where: { status: ProductStatus.PUBLISHED } })
  ]);

  return { categories, featured, latest, productCount };
}

export async function getCategoryPage(slug: string) {
  return prisma.category.findUnique({
    where: { slug },
    include: {
      brands: {
        where: { isVisible: true },
        orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
        include: {
          models: {
            where: { isVisible: true },
            orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
            include: {
              _count: {
                select: {
                  products: { where: { status: ProductStatus.PUBLISHED } }
                }
              }
            }
          }
        }
      }
    }
  });
}

export async function getBrandPage(categorySlug: string, brandSlug: string) {
  const brand = await prisma.brand.findUnique({
    where: { slug: brandSlug },
    include: {
      category: true,
      models: {
        where: { isVisible: true },
        orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
        include: {
          products: {
            where: { status: ProductStatus.PUBLISHED },
            orderBy: [{ sortOrder: "asc" }, { updatedAt: "desc" }],
            take: 1
          },
          _count: {
            select: {
              products: { where: { status: ProductStatus.PUBLISHED } }
            }
          }
        }
      }
    }
  });

  if (!brand || brand.category.slug !== categorySlug) {
    return null;
  }

  return brand;
}

export async function getModelPage(
  categorySlug: string,
  brandSlug: string,
  modelSlug: string
) {
  const model = await prisma.productModel.findUnique({
    where: { slug: modelSlug },
    include: {
      brand: {
        include: {
          category: true
        }
      },
      products: {
        where: { status: ProductStatus.PUBLISHED },
        include: {
          sizes: true
        },
        orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }]
      }
    }
  });

  if (
    !model ||
    model.brand.slug !== brandSlug ||
    model.brand.category.slug !== categorySlug
  ) {
    return null;
  }

  return model;
}

export async function getAdminSnapshot() {
  const [categories, brands, models, products, orders] = await Promise.all([
    prisma.category.findMany({
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
      include: { brands: true }
    }),
    prisma.brand.findMany({
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
      include: { category: true, models: true }
    }),
    prisma.productModel.findMany({
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
      include: { brand: { include: { category: true } }, _count: { select: { products: true } } }
    }),
    prisma.product.findMany({
      orderBy: [{ updatedAt: "desc" }],
      include: {
        model: { include: { brand: { include: { category: true } } } },
        sizes: true
      }
    }),
    prisma.orderRequest.findMany({
      orderBy: [{ createdAt: "desc" }],
      include: { items: true }
    })
  ]);

  return { categories, brands, models, products, orders };
}

export async function getAdminDashboardStats() {
  const [categories, brands, models, products, orders] = await Promise.all([
    prisma.category.count(),
    prisma.brand.count(),
    prisma.productModel.count(),
    prisma.product.count(),
    prisma.orderRequest.count()
  ]);

  return { categories, brands, models, products, orders };
}

export async function getAdminUploadStructure() {
  const [categories, brands, models] = await Promise.all([
    prisma.category.findMany({
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
      select: { id: true, name: true }
    }),
    prisma.brand.findMany({
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
      select: { id: true, name: true, categoryId: true }
    }),
    prisma.productModel.findMany({
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
      select: { id: true, name: true, brandId: true }
    })
  ]);

  return { categories, brands, models };
}

export async function getAdminStructure() {
  const [categories, brands, models] = await Promise.all([
    prisma.category.findMany({
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
      include: { brands: true }
    }),
    prisma.brand.findMany({
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
      include: { category: true, models: true }
    }),
    prisma.productModel.findMany({
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
      include: {
        brand: { include: { category: true } },
        _count: { select: { products: true } }
      }
    })
  ]);

  return { categories, brands, models };
}

export async function getAdminProducts() {
  const products = await prisma.product.findMany({
    orderBy: [{ updatedAt: "desc" }],
    include: {
      model: { include: { brand: { include: { category: true } } } },
      sizes: true
    }
  });

  return products.map((product) => ({
    ...product,
    mediaBytes: product.mediaBytes ? Number(product.mediaBytes) : null
  }));
}

export async function getAdminOrders() {
  return prisma.orderRequest.findMany({
    orderBy: [{ createdAt: "desc" }],
    include: { items: true }
  });
}
