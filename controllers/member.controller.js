const Member = require('../models/member.model');

exports.createMember = async (req, res) => {
  try {
    const member = new Member(req.body);
    await member.save();
    res.status(201).json(member);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getMembers = async (req, res) => {
  try {
    const members = await Member.find()
      .populate('qualificationId', 'name')
      .populate('relationId', 'name')
      .populate('pincodeId', 'pincode city state');
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMemberById = async (req, res) => {
  try {
    const member = await Member.findById(req.params.id)
      .populate('qualificationId', 'name')
      .populate('relationId', 'name')
      .populate('pincodeId', 'pincode city state');
    if (!member) return res.status(404).json({ message: 'Member not found' });
    res.json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMember = async (req, res) => {
  try {
    const member = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!member) return res.status(404).json({ message: 'Member not found' });
    res.json(member);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteMember = async (req, res) => {
  try {
    const member = await Member.findByIdAndDelete(req.params.id);
    if (!member) return res.status(404).json({ message: 'Member not found' });
    res.json({ message: 'Member deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
