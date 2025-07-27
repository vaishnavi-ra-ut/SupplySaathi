import mongoose from 'mongoose';

const clusterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    marketLocation: { type: String, required: true },
    location: {
        type: { type: String, enum: ['Point'], default: 'Point' },
        coordinates: { type: [Number], required: true }, // [lng, lat]
    },
    vendorsGoing: { type: Number, default: 0 },
    status: { type: String, enum: ['active', 'joining', 'planning'], default: 'joining' },
    meetingTime: { type: String, required: true }, // e.g. 'Friday 10 AM'
    icon: { type: String },
    description: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    joinedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

clusterSchema.index({ location: '2dsphere' }); // For geospatial queries

export default mongoose.model('Cluster', clusterSchema);
