const Unit = require('../models/unit_master.model');

exports.createUnit = async (req, res, next) => {
  try {
    const unit = new Unit(req.body);
    const saved = await unit.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};

exports.getAllUnits = async (req, res, next) => {
  try {
    const list = await Unit.find();
    res.json(list);
  } catch (err) {
    next(err);
  }
};

exports.updateUnit = async (req, res, next) => {
  try {
    const updated = await Unit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteUnit = async (req, res, next) => {
  try {
    await Unit.findByIdAndDelete(req.params.id);
    res.json({ message: 'Unit deleted' });
  } catch (err) {
    next(err);
  }
};
