import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
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

const Order = mongoose.models.Order || mongoose.model("Orders", orderSchema);

export default Order;

