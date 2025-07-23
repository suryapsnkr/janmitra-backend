const Warehouse = require('../models/warehouse.model');

exports.createWarehouse = async (req, res, next) => {
  try {
    const wh = new Warehouse(req.body);
    const saved = await wh.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};

exports.getAllWarehouses = async (req, res, next) => {
  try {
    const list = await Warehouse.find();
    res.json(list);
  } catch (err) {
    next(err);
  }
};

exports.updateWarehouse = async (req, res, next) => {
  try {
    const updated = await Warehouse.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteWarehouse = async (req, res, next) => {
  try {
    await Warehouse.findByIdAndDelete(req.params.id);
    res.json({ message: 'Warehouse deleted' });
  } catch (err) {
    next(err);
  }
};
