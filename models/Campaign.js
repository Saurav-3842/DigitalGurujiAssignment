const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema({
  userId: String,
  campaignName: String,
  scheduledTime: Date,
  emails: [String],
  sent: { type: Boolean, default: false },
});

module.exports = mongoose.model("Campaign", CampaignSchema);
