const Firm = require('../models/firm.model');

exports.create = async (req, res, next) => {
  try {
    const firm = new Firm(req.body);
    const saved = await firm.save();
    res.status(201).json(saved);
  } catch (err) { next(err); }
};

exports.getAll = async (req, res, next) => {
  try {
    const list = await Firm.find();
    res.json(list);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const updated = await Firm.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    await Firm.findByIdAndDelete(req.params.id);
    res.json({ message: 'Firm deleted' });
  } catch (err) { next(err); }
};
