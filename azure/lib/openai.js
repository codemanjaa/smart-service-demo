const { Configuration, OpenAIApi } = require("openai");
const fs = require('fs');
require('dotenv').config();
/*
// Load local.settings.json file
const rawSettings = fs.readFileSync("../local.settings.json");
const settings = JSON.parse(rawSettings);

// Set API key as environment variable
process.env.API_KEY = settings.Values.OPEN_AI_KEY;
*/
const configuration = new Configuration({
    organization: process.env.OPEN_AI_ORGANIZATION,
    apiKey: process.env.OPEN_AI_KEY,
})
//console.log('API KEY SHOWN ------------>',process.env.OPEN_AI_KEY)
const openai = new OpenAIApi(configuration);
module.exports = openai;