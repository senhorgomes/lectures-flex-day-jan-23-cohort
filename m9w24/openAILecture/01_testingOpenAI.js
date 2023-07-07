// How can we use the OpenAI API?

const { Configuration, OpenAIApi } = require("openai");
// Establish who we are to OpenAi by providing our org key and api key
const configuration = new Configuration({
    organization: "Insert Organization Key",
    apiKey: "Insert API Key",
});

const openai = new OpenAIApi(configuration);
// Connect to openAi using our config file
openai.createChatCompletion({
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": "Say this is a test!"}],
    "temperature": 0.7
}).then((response)=>console.log(response.data.choices[0].message.content));
