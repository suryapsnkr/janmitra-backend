const Terms = require('../models/terms_condition.model');
const Privacy = require('../models/privacy_policy.model');
const About = require('../models/about_us.model');
const Website = require('../models/website_info.model');

exports.getTerms = async (req, res, next) => {
  try {
    const data = await Terms.findOne();
    res.json(data);
  } catch (err) { next(err); }
};

exports.updateTerms = async (req, res, next) => {
  try {
    const updated = await Terms.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.json(updated);
  } catch (err) { next(err); }
};

exports.getPrivacy = async (req, res, next) => {
  try {
    const data = await Privacy.findOne();
    res.json(data);
  } catch (err) { next(err); }
};

exports.updatePrivacy = async (req, res, next) => {
  try {
    const updated = await Privacy.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.json(updated);
  } catch (err) { next(err); }
};

exports.getAbout = async (req, res, next) => {
  try {
    const data = await About.findOne();
    res.json(data);
  } catch (err) { next(err); }
};

exports.updateAbout = async (req, res, next) => {
  try {
    const updated = await About.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.json(updated);
  } catch (err) { next(err); }
};

exports.getWebsiteInfo = async (req, res, next) => {
  try {
    const data = await Website.findOne();
    res.json(data);
  } catch (err) { next(err); }
};

exports.updateWebsiteInfo = async (req, res, next) => {
  try {
    const updated = await Website.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.json(updated);
  } catch (err) { next(err); }
};
