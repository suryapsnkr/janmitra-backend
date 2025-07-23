const WebsiteSetting = require('../models/websiteSetting.model');

exports.createSetting = async (req, res) => {
  try {
    const setting = new WebsiteSetting(req.body);
    await setting.save();
    res.status(201).json(setting);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getSetting = async (req, res) => {
  try {
    const setting = await WebsiteSetting.findOne();
    res.json(setting);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSetting = async (req, res) => {
  try {
    const setting = await WebsiteSetting.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.json(setting);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
