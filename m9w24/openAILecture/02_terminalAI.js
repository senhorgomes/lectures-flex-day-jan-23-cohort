// We want to create an app that allows us to communicate with chat-gpt via our terminal
const { argv } = require('process');
// Already established how we connect to openAI
// How do we grab input from the terminal?
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
const { Configuration, OpenAIApi } = require("openai");
// Establish who we are to OpenAi by providing our org key and api key
const configuration = new Configuration({
    organization: "Insert Organization Key",
    apiKey: "Insert API Key",
});

// Connect to openAi using our config file
const openai = new OpenAIApi(configuration);
// We are using readline as its a ready made way to have prompts
readline.question("Hello, my name is Not Siri. I am your AI assistant, how can I help you?\n", userInput => {
    openai.createChatCompletion({
        // Type of model we want
        "model": "gpt-3.5-turbo",
        // The prompts
        // We can assign what role we want our system to take by giving it a prompt
        // We can use the user role to pass in what prompt the user inputed
        "messages": [{"role": "system", "content": "You will provide the shortest answer possible at all times."},{"role": "user", "content": `${userInput}`}],
        // How random do we want the response
        // Ranges from 0-2, 2 being more whacky, 0 being more precise
        "temperature": 0.7,
        // Maximum amount of token we want to use for said response, can make a weird short answer
        // "max_tokens": 2
    }).then((response)=>{
        console.log(response.data.choices[0].message.content);
        readline.close();
    });
})
