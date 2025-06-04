const Campaign = require("../models/Campaign");

exports.createCampaign = async (req, res) => {
  try {
    const { userId, campaignName, scheduledTime, emails } = req.body;
    const campaign = await Campaign.create({ userId, campaignName, scheduledTime, emails });
    res.status(201).json(campaign);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
