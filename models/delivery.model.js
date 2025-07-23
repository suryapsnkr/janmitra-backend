const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  deliveryStatus: { type: String, enum: ['pending', 'shipped', 'delivered'], default: 'pending' },
  deliveryDate: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Delivery', deliverySchema);
