import mongoose from "mongoose";

const NewUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["User", "Customer", "Company"],
        default: "User",
        required: true
    },

    companyName: {
        type: String,
        required: function () {
            return this.role === "Company";
        }, trim: true,

    },

    agencyName: {
        type: String,
        required: function () {
            return this.role === "Company";
        }, trim: true,
    },
    service: {
        type: String,
        required: function () {
            return this.role === "Company" || this.role === "Customer";
        },
        trim: true,
    },
},
    { timestamps: true }
);


const NewUser = mongoose.model("NewUser", NewUserSchema);

export default NewUser;
