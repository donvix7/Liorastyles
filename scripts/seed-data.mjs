import connectDB from "../app/utils/mongodb.js";
import { Service, Profile } from "../models/profile.js";
import bcrypt from "bcryptjs";

const makeupServices = [
  {
    name: "Bridal Glamour Package",
    imageUrl: "/images/services/70+ Glam Bridal Makeup Looks.jpeg",
    category: "Full Face",
    price: "$250",
    duration: "3-4 hours",
    iconName: "Sparkles",
    imageColor: "bg-gradient-to-br from-amber-900 via-amber-700 to-yellow-500",
    description: "Complete bridal makeup with trial, premium products, and touch-up kit",
    features: ["Pre-wedding trial", "Luxury products", "Touch-up kit", "False lashes included"],
  },
  {
    name: "Evening Glam Transformation",
    imageUrl: "/images/services/gal.jpg",
    category: "Special Event",
    price: "$180",
    duration: "2 hours",
    iconName: "Palette",
    imageColor: "bg-gradient-to-br from-purple-900 via-violet-800 to-amber-700",
    description: "Dramatic evening look perfect for galas, parties, and special occasions",
    features: ["Smokey eye option", "Contour & highlight", "Long-lasting setting", "Lash application"],
  },
  {
    name: "Natural Daytime Makeover",
    imageUrl: "/images/services/daily.jpg",
    category: "Day Makeup",
    price: "$120",
    duration: "1.5 hours",
    iconName: "Brush",
    imageColor: "bg-gradient-to-br from-amber-200 via-amber-400 to-yellow-600",
    description: "Fresh, natural look enhanced with subtle definition and glowing skin",
    features: ["Skin prep & prime", "Natural enhancement", "Waterproof products", "Skincare focus"],
  },
  {
    name: "Editorial Photoshoot Makeup",
    imageUrl: "/images/services/shoot.jpg",
    category: "Professional",
    price: "$300",
    duration: "4+ hours",
    iconName: "Eye",
    imageColor: "bg-gradient-to-br from-gray-900 via-amber-800 to-black",
    description: "High-fashion looks designed for photography and video production",
    features: ["Camera-ready finish", "Multiple looks", "HD makeup", "Artist on set"],
  },
  {
    name: "Group Makeup Sessions",
    imageUrl: "/images/services/Your Foundation Dilemmas Solved _ Essence.jpeg",
    category: "Group Service",
    price: "$90/person",
    duration: "1 hour/person",
    iconName: "Users",
    imageColor: "bg-gradient-to-br from-amber-800 via-yellow-700 to-amber-900",
    description: "Perfect for bridal parties, proms, or group events with customized looks",
    features: ["Minimum 3 people", "Customized looks", "Group discount", "Travel available"],
  },
  {
    name: "Makeup Lesson & Consultation",
    imageUrl: "/images/services/lesson.jpg",
    category: "Education",
    price: "$150",
    duration: "2 hours",
    iconName: "BookOpen",
    imageColor: "bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-800",
    description: "Personalized lesson teaching you how to recreate your favorite Liora looks",
    features: ["Product guidance", "Technique tutorial", "Take-home notes", "Product samples"],
  },
];

async function seed() {
  try {
    await connectDB();
    
    // Clear existing services
    await Service.deleteMany({});
    console.log("Cleared existing services.");

    // Seed services
    await Service.insertMany(makeupServices);
    console.log("Seeded initial services.");

    // Create a default admin if none exists
    const adminEmail = "admin@liora.com";
    const existingAdmin = await Profile.findOne({ email: adminEmail });
    
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash("admin123", 10);
      await Profile.create({
        name: "Liora Admin",
        email: adminEmail,
        password: hashedPassword,
        role: "admin",
        bio: "Master Artist & Founder",
        avatarColor: "from-amber-700 to-yellow-600"
      });
      console.log("Created default admin user: admin@liora.com / admin123");
    } else {
        // Update password if admin exists but password field was empty/new
        if (!existingAdmin.password) {
            const hashedPassword = await bcrypt.hash("admin123", 10);
            existingAdmin.password = hashedPassword;
            await existingAdmin.save();
            console.log("Updated password for existing admin.");
        }
    }

    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
}

seed();
