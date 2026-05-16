import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { env } from "../config/env";
import { Product } from "../models/products.model";
import { User } from "../models/user.model";

const demoSeller = {
  username: "demo_seller",
  email: "demo.seller@example.com",
  password: "DemoSeller123!",
};

const sampleProducts = [
  {
    name: "First Aid Kit",
    description:
      "Compact emergency kit with bandages, antiseptic wipes, gauze, and tape.",
    price: 24.99,
    stock: 18,
    imgUrl:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Digital Thermometer",
    description: "Fast-read thermometer for home health checks.",
    price: 12.5,
    stock: 32,
    imgUrl:
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Vitamin C Gummies",
    description:
      "Citrus-flavored daily supplement gummies for general wellness.",
    price: 16.99,
    stock: 45,
    imgUrl:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Reusable Ice Pack",
    description: "Flexible cold pack for sprains, soreness, and recovery care.",
    price: 9.75,
    stock: 27,
    imgUrl:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Hand Sanitizer Gel",
    description: "Travel-size sanitizer gel for daily hygiene.",
    price: 5.99,
    stock: 64,
    imgUrl:
      "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Electrolyte Powder",
    description: "Hydration powder packets with lemon-lime flavor.",
    price: 19.99,
    stock: 21,
    imgUrl:
      "https://images.unsplash.com/photo-1622484211148-033ca1f5f3f8?auto=format&fit=crop&w=900&q=80",
  },
];

async function seedProducts() {
  await mongoose.connect(env.MONGODB_URI);
  console.log(`Connected to MongoDB: ${mongoose.connection.name}`);

  const hashedPassword = await bcrypt.hash(
    demoSeller.password,
    env.SALT_NUMBER,
  );
  const seller = await User.findOneAndUpdate(
    { email: demoSeller.email },
    {
      username: demoSeller.username,
      email: demoSeller.email,
      hashedPassword,
      role: "seller",
    },
    { returnDocument: "after", upsert: true, runValidators: true },
  );

  for (const product of sampleProducts) {
    await Product.findOneAndUpdate(
      { name: product.name, sellerId: seller._id },
      { ...product, sellerId: seller._id, isActive: true },
      { returnDocument: "after", upsert: true, runValidators: true },
    );
  }

  console.log(
    `Seeded ${sampleProducts.length} products for ${demoSeller.email}`,
  );
  await mongoose.disconnect();
}

seedProducts().catch(async (error) => {
  console.error("Failed to seed products", error);
  await mongoose.disconnect();
  process.exit(1);
});
