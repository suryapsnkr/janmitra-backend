const Qualification = require('../models/qualification.model');

// Create
exports.createQualification = async (req, res) => {
  try {
    const qualification = new Qualification(req.body);
    await qualification.save();
    res.status(201).json(qualification);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Read All
exports.getQualifications = async (req, res) => {
  try {
    const qualifications = await Qualification.find();
    res.json(qualifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read One
exports.getQualificationById = async (req, res) => {
  try {
    const qualification = await Qualification.findById(req.params.id);
    if (!qualification) return res.status(404).json({ message: 'Not found' });
    res.json(qualification);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
exports.updateQualification = async (req, res) => {
  try {
    const qualification = await Qualification.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!qualification) return res.status(404).json({ message: 'Not found' });
    res.json(qualification);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
exports.deleteQualification = async (req, res) => {
  try {
    const qualification = await Qualification.findByIdAndDelete(req.params.id);
    if (!qualification) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
