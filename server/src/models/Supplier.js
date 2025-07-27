const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Supplier name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [50, 'Name can be at most 50 characters']
  },
  image: {
    type: String,
    required: [true, 'Image URL is required'],
    match: [/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/, 'Must be a valid image URL']
  },
  category: {
    type: String,
    enum: {
      values: ['vegetables', 'fruits', 'spices', 'grains', 'dairy'],
      message: 'Category must be one of: vegetables, fruits, spices, grains, dairy'
    },
    required: [true, 'Category is required']
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true
  },
  priceRange: {
    type: String,
    required: [true, 'Price range is required'],
    match: [/^₹\d+(-\d+)?\/?kg$/, 'Price range should look like ₹10-50/kg or ₹25/kg']
  },
  rating: {
    type: Number,
    min: [0, 'Rating cannot be less than 0'],
    max: [5, 'Rating cannot exceed 5'],
    default: 0
  },
  trustedBy: {
    type: Number,
    min: [0, 'Trusted by must be 0 or more'],
    default: 0
  },
  specialties: {
    type: [String],
    validate: {
      validator: function (arr) {
        return arr.length <= 5;
      },
      message: 'You can list up to 5 specialties'
    }
  },
  verified: {
    type: Boolean,
    default: false
  },
  delivery: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Supplier', supplierSchema);
