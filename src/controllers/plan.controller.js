const Plan = require('../models/plan.model');

exports.create = async (req,res,next) => {
  try {
    const plan = await Plan.create(req.body);
    return res.status(201).json(plan);
  } catch (err) { next(err); }
};

exports.list = async (req,res,next) => {
  try {
    const plans = await Plan.find().populate('coverageIds');
    return res.status(200).json(plans);
  } catch (err) { next(err); }
};

exports.getById = async (req,res,next) => {
  try {
    const plan = await Plan.findById(req.params.id).populate('coverageIds');
    if (!plan) return res.status(404).json({ message: 'Plan not found' });
    return res.status(200).json(plan);
  } catch (err) { next(err); }
};

exports.update = async (req,res,next) => {
  try {
    const plan = await Plan.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!plan) return res.status(404).json({ message: 'Plan not found' });
    return res.status(200).json(plan);
  } catch (err) { next(err); }
};

exports.remove = async (req,res,next) => {
  try {
    const plan = await Plan.findByIdAndDelete(req.params.id);
    if (!plan) return res.status(404).json({ message: 'Plan not found' });
    return res.status(200).json({ message: 'Plan deleted' });
  } catch (err) { next(err); }
};
