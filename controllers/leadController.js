const Lead = require("../models/Lead");

exports.getLeadsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const leads = await Lead.find({ userId });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.postLeadsByUser = async (req, res) => {
  try {
    const { userId, name, email } = req.body;

    if (!userId || !name || !email) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newLead = new Lead({ userId, name, email });
    await newLead.save();

    res.status(201).json({ message: 'Lead created successfully', lead: newLead });
  } catch (error) {
    console.error('Error creating lead:', error);
    res.status(500).json({ message: 'Server error' });
  }
};