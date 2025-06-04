const mongoose = require("mongoose");
const Lead = require("./models/Lead");
require("dotenv").config();

const leads = [
  { userId: "user123", name: "Alice Johnson", email: "alice.johnson@example.com" },
  { userId: "user123", name: "Bob Smith", email: "bob.smith@example.com" },
  { userId: "user123", name: "Carol White", email: "carol.white@example.com" },
  { userId: "user123", name: "David Lee", email: "david.lee@example.com" },
  { userId: "user123", name: "Eva Green", email: "eva.green@example.com" },
  { userId: "user123", name: "Frank Harris", email: "frank.harris@example.com" },
  { userId: "user123", name: "Grace Adams", email: "grace.adams@example.com" },
  { userId: "user123", name: "Henry Baker", email: "henry.baker@example.com" },
  { userId: "user123", name: "Isla Martin", email: "isla.martin@example.com" },
  { userId: "user123", name: "Jack Wilson", email: "jack.wilson@example.com" },

  { userId: "user456", name: "Katie Moore", email: "katie.moore@example.com" },
  { userId: "user456", name: "Liam Scott", email: "liam.scott@example.com" },
  { userId: "user456", name: "Mia Cooper", email: "mia.cooper@example.com" },
  { userId: "user456", name: "Noah Hall", email: "noah.hall@example.com" },
  { userId: "user456", name: "Olivia Young", email: "olivia.young@example.com" },
  { userId: "user456", name: "Paul Allen", email: "paul.allen@example.com" },
  { userId: "user456", name: "Quinn Wright", email: "quinn.wright@example.com" },
  { userId: "user456", name: "Rachel King", email: "rachel.king@example.com" },
  { userId: "user456", name: "Sam Turner", email: "sam.turner@example.com" },
  { userId: "user456", name: "Tina Phillips", email: "tina.phillips@example.com" },

  { userId: "user789", name: "Uma Mitchell", email: "uma.mitchell@example.com" },
  { userId: "user789", name: "Victor Parker", email: "victor.parker@example.com" },
  { userId: "user789", name: "Wendy Evans", email: "wendy.evans@example.com" },
  { userId: "user789", name: "Xander Brooks", email: "xander.brooks@example.com" },
  { userId: "user789", name: "Yara Diaz", email: "yara.diaz@example.com" },
  { userId: "user789", name: "Zane Foster", email: "zane.foster@example.com" },
  { userId: "user789", name: "Abby Hayes", email: "abby.hayes@example.com" },
  { userId: "user789", name: "Ben Long", email: "ben.long@example.com" },
  { userId: "user789", name: "Cathy Russell", email: "cathy.russell@example.com" },
  { userId: "user789", name: "Danielle Simmons", email: "danielle.simmons@example.com" },
];


mongoose.connect(process.env.MONGODB_URI,{
      dbName: "SchedulerDBDigitalGuruji",
    }).then(async () => {
  await Lead.insertMany(leads);
  console.log("Leads inserted");
  process.exit();
});
