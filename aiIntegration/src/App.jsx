
import React from 'react'

import{GoogleGenAI} from "@google/genai"
function App() {
  const apiKey=import.meta.env.VITE_GEMINI_API_KEY ;
  const ai = new GoogleGenAI({apiKey});
  async function run(){
     const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
  }
  return (
    <div>App
   
      <button onClick={run}>Get dta</button>
    </div>
  )
}

export default App