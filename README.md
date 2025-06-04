# Email Campaign Scheduler

A simple backend system for scheduling email campaigns using Node.js, Express, and MongoDB.

## Features

- Create email campaigns
- Fetch leads by user
- Automatically send emails using a scheduler

## Tech Stack

- Node.js
- Express.js
- MongoDB
- node-cron

## Setup

```bash
git clone https://github.com/Saurav-3842/DigitalGurujiAssignment.git

npm install
```
## To Add Dummy Lead

run the seed file to add dummy leads
```bash
node seed.js
```
##API Endpoints
POST /api/campaigns: Create a campaign

GET /api/leads/:userId: Get leads for a user

POST /api/leads: Create leads

##Project Live on [Render](https://digitalgurujiassignment.onrender.com)

