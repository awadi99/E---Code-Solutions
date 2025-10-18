import mongoose from "mongoose";

const DocsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    idea: {
        type: String,
        required: true,
    },
})

const Docs = mongoose.model("Docs", DocsSchema);

export default Docs;