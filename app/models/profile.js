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
    bio: {
        type: String
    },
    dateOfBirth: {
        type: Date,
        validate: {
            validator: function(value) {
                // Ensure date is not in the future
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
            },
          
          
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true, // This automatically manages createdAt and updatedAt
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
});
const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
const Profile = mongoose.models.Profile || mongoose.model("Profile", profileSchema);

export default {Booking, Profile};
