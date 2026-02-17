import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minlength: [2, 'Name must be at least 2 characters'],
        maxlength: [100, 'Name cannot exceed 100 characters']
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters']
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    socials: {
        instagram: { type: String, default: "" },
        facebook: { type: String, default: "" },
        X: { type: String, default: "" },
        tiktok: { type: String, default: "" }
    },
    bio: {
        type: String
    },
    aboutMe: {
        type: String
    },
    dateOfBirth: {
        type: Date,
        validate: {
            validator: function(value) {
                return value <= new Date();
            },
            message: 'Date of birth cannot be in the future'
        }
    },
    achievements: [
        {
            title: {
                type: String,
                required: [true, 'Achievement title is required'],
                trim: true,
                maxlength: [200, 'Title cannot exceed 200 characters']
            },
            description: {
                type: String,
                trim: true,
                maxlength: [1000, 'Description cannot exceed 1000 characters']
            }
        }
    ]
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    serviceId: { type: String, required: true },
    status: { type: String, enum: ["pending", "confirmed", "completed", "cancelled"], default: "pending" },
    date: { type: Date, default: Date.now }
}, { timestamps: true });

const orderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" }
}, { timestamps: true });

const contentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, enum: ["Tutorial", "News", "Collection"], default: "Tutorial" },
    description: { type: String },
    videoUrl: { type: String },
    imageUrl: { type: String },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }
}, { timestamps: true });

const promotionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    discount: { type: String },
    expiryDate: { type: Date },
    imageUrl: { type: String },
    targetUrl: { type: String },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: String, required: true },
    duration: { type: String, required: true },
    iconName: { type: String, default: "Sparkles" },
    imageColor: { type: String },
    description: { type: String, required: true },
    features: [{ type: String }]
}, { timestamps: true });

const Profile = mongoose.models.Profile || mongoose.model("Profile", profileSchema);
const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
const Content = mongoose.models.Content || mongoose.model("Content", contentSchema);
const Promotion = mongoose.models.Promotion || mongoose.model("Promotion", promotionSchema);
const Service = mongoose.models.Service || mongoose.model("Service", serviceSchema);

export { Profile, Booking, Order, Content, Promotion, Service };
