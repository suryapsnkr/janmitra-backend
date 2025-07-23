const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  paymentMode: { type: String, enum: ['Cash', 'Card', 'Online'], required: true },
  paymentStatus: { type: String, enum: ['Paid', 'Unpaid'], default: 'Unpaid' },
  transactionId: { type: String },
  amount: { type: Number, required: true },
  paidAt: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
