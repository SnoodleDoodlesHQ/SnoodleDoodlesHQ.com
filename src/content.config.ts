import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
  loader: glob({
    base: './src/content/pages',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    heroTitle: z.string().optional(),
    heroText: z.string().optional(),
    heroKicker: z.string().optional(),
    heroBackgroundImage: z.string().optional(),
    heroBackgroundPosition: z.string().optional(),
    emailPlaceholder: z.string().optional(),
    heroBullets: z.string().optional(),
    contactImage: z.string().optional(),
    contactImageAlt: z.string().optional(),
    formTitle: z.string().optional(),
    formIntro: z.string().optional(),
    services: z.array(z.string()).optional(),
    published: z.boolean().default(true),
    showInNav: z.boolean().default(true),
    navOrder: z.number().default(99),
  }),
});

const portfolio = defineCollection({
  loader: glob({
    base: './src/content/portfolio',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    link: z.string().optional(),
    published: z.boolean().default(true),
    order: z.number().default(99),
  }),
});

const products = defineCollection({
  loader: glob({
    base: './src/content/products',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['stickers', 'prints', 'keychains-pins', 'apparel']),
    price: z.coerce.number(),
    shortDescription: z.string(),
    images: z.array(z.string()).default([]),
    image1: z.string().optional(),
    image2: z.string().optional(),
    image3: z.string().optional(),
    image4: z.string().optional(),
    published: z.boolean().default(true),
    order: z.number().default(99),
  }),
});


const personalPosts = defineCollection({
  loader: glob({
    base: './src/content/personal',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    type: z.enum(['image', 'video', 'text']).default('image'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    youtubeId: z.string().optional(),
    videoUrl: z.string().optional(),
    published: z.boolean().default(true),
    order: z.number().default(99),
    size: z.enum(['small', 'medium', 'wide', 'tall', 'feature']).default('medium'),
  }),
});


const checkout = defineCollection({
  loader: glob({
    base: './src/content/checkout',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    heroTitle: z.string().optional(),
    heroText: z.string().optional(),
    paypalBusiness: z.string(),
    currency: z.string().default('GBP'),
    shippingFlatRate: z.coerce.number().default(0),
    handlingFee: z.coerce.number().default(0),
    returnPath: z.string().default('/'),
    cancelPath: z.string().default('/checkout/'),
    published: z.boolean().default(true),
  }),
});


const siteSettings = defineCollection({
  loader: glob({
    base: './src/content/site',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    mailto: z.string().optional(),
    mailLabel: z.string().optional(),
    socialLinks: z.array(z.object({
      platform: z.string(),
      label: z.string(),
      url: z.string(),
    })).default([]),
    contactLinks: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).default([]),
    published: z.boolean().default(true),
  }),
});

export const collections = { pages, portfolio, products, personalPosts, checkout, siteSettings };
