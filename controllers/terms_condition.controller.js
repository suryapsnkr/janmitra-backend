const TermsAndConditions = require('../models/terms.model');

// 🆕 Create or Update (singleton)
exports.upsertTerms = async (req, res) => {
  try {
    const existing = await TermsAndConditions.findOne();
    let terms;

    if (existing) {
      terms = await TermsAndConditions.findByIdAndUpdate(existing._id, req.body, { new: true });
    } else {
      terms = await TermsAndConditions.create(req.body);
    }

    res.json(terms);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 📥 Get
exports.getTerms = async (req, res) => {
  try {
    const terms = await TermsAndConditions.findOne();
    res.json(terms || {});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
