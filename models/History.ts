import mongoose from "mongoose";

const HistorySchema = new mongoose.Schema ({
    name: String,
}, {timestamps: true});

export default mongoose.models.History || mongoose.model('History', HistorySchema);