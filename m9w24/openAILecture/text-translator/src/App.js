import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const { Configuration, OpenAIApi } = require("openai");
  // Establish who we are to OpenAi by providing our org key and api key
  const configuration = new Configuration({
    organization: "Insert Organization Key",
    apiKey: "Insert API Key",
  });
  // This is the text inputted into our input field
  const [textToBeTranslated, setTextToBeTranslated] = useState("");
  // This allows us to capture which language we want to translate to
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  // This allows us to capture the translated text once we receive it from OpenAI
  const [translatedText, setTranslatedText] = useState("")
  const openai = new OpenAIApi(configuration);
  // Connect to openAi using our config file
  const makeOpenAIAPICall = () => {
    openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Translate this into ${selectedLanguage}:\n\n${textToBeTranslated}\n\n1.`,
      temperature: 0.7
      // Once the call is done, we can set the incoming text to our state
      // Ideally we could have a loading screen of some sort to let the user know what is occuring
    }).then((response) => setTranslatedText(response.data.choices[0].text));
  }
  return (
    <div className="App">
      <header className="App-header">
        <input
          value={textToBeTranslated}
          onChange={(event) => setTextToBeTranslated(event.target.value)}
          type="text">
        </input>
        <LanguageSelector setLan={setSelectedLanguage} Lan={selectedLanguage}/>
        <button onClick={()=>makeOpenAIAPICall()}>Translate the text!</button>
        <h2>Translated text:{translatedText}</h2>
      </header>
    </div>
  );
}

export default App;
