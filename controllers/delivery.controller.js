const Delivery = require('../models/delivery.model');

exports.create = async (req, res, next) => {
  try {
    const saved = await Delivery.create(req.body);
    res.status(201).json(saved);
  } catch (err) { next(err); }
};

exports.getAll = async (req, res, next) => {
  try {
    const list = await Delivery.find().populate('orderId', 'orderId amount');
    res.json(list);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const updated = await Delivery.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    await Delivery.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) { next(err); }
};
