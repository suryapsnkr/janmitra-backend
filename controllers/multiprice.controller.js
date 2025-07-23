const Multiprice = require('../models/multiprice.model');

exports.createMultiprice = async (req, res, next) => {
  try {
    const mp = new Multiprice(req.body);
    const saved = await mp.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};

exports.getAllMultiprices = async (req, res, next) => {
  try {
    const list = await Multiprice.find()
      .populate('product_id')
      .populate('unit_id');
    res.json(list);
  } catch (err) {
    next(err);
  }
};

exports.updateMultiprice = async (req, res, next) => {
  try {
    const updated = await Multiprice.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteMultiprice = async (req, res, next) => {
  try {
    await Multiprice.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    next(err);
  }
};
