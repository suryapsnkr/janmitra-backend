const Pincode = require('../models/pincode.model');

// ➕ Create
exports.createPincode = async (req, res) => {
  try {
    const pincode = new Pincode(req.body);
    await pincode.save();
    res.status(201).json(pincode);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 📋 Get All
exports.getPincodes = async (req, res) => {
  try {
    const pincodes = await Pincode.find();
    res.json(pincodes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔍 Get by ID
exports.getPincodeById = async (req, res) => {
  try {
    const pincode = await Pincode.findById(req.params.id);
    if (!pincode) return res.status(404).json({ message: 'Pincode not found' });
    res.json(pincode);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✏️ Update
exports.updatePincode = async (req, res) => {
  try {
    const pincode = await Pincode.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pincode) return res.status(404).json({ message: 'Pincode not found' });
    res.json(pincode);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ❌ Delete
exports.deletePincode = async (req, res) => {
  try {
    const pincode = await Pincode.findByIdAndDelete(req.params.id);
    if (!pincode) return res.status(404).json({ message: 'Pincode not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
