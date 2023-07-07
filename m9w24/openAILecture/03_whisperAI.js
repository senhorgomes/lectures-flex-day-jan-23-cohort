// How can we grab an audio, and transcribe it using openAI?
const fs = require('fs');
const { Configuration, OpenAIApi } = require("openai");
// Establish who we are to OpenAi by providing our org key and api key
const configuration = new Configuration({
    organization: "Insert Organization Key",
    apiKey: "Insert API Key",
});

const openai = new OpenAIApi(configuration);
// Connect to openAi using our config file
openai.createTranscription(
    fs.createReadStream("OpenAiSample.m4a"),
    "whisper-1",
    undefined,
    // "messages": [{"role": "user", "content": "Say this is a test!"}],
    "text",
    0.7,
    "pt").then((response)=>console.log(response.data));
