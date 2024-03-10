import mongoose from "mongoose";

const recentOrders = new mongoose.Schema({
    invoice_number:{
        type:String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
    },
    custom_name:{
        type:String,
        required: true,
        unique: false,
        min: 3,
        max: 20,
    },
    method:{
        type:String,
        required: true,
        unique: false,
        min: 3,
        max: 20,
    },
    amount:{
        type: Number,
        required: true,
        unique: false,
    },
    status:{
        type:String,
        required: true,
    },
}, {timestamps: true}
);

export const RecentOrders = mongoose.models.RecentOrders || mongoose.model("RecentOrders", recentOrders);