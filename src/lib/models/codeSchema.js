import { Schema, model, models } from "mongoose";

const codeSchema = new Schema({
    codeStr: {
        type: String,
        unique: true,
        required: true,
    },
    used: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Code = models?.Code || model('Code', codeSchema);

export default Code;