const cron = require("node-cron");
const Campaign = require("../models/Campaign");

const runScheduler = () => {
  cron.schedule("* * * * *", async () => {
    const now = new Date();
    const campaigns = await Campaign.find({ scheduledTime: { $lte: now }, sent: false });

    campaigns.forEach(async (campaign) => {
      campaign.emails.forEach(email => {
        console.log(`Sending campaign "${campaign.campaignName}" to ${email}`);
      });
      campaign.sent = true;
      await campaign.save();
    });
  });
};

module.exports = runScheduler;
