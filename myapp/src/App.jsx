import React,{useState, useEffect} from 'react'
import "./App.scss";

import * as dotenv from "react-dotenv"
const {GoogleGenerativeAI}=require('@google/generative-ai');
const genAI=new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);

window.onload = function(){
  var back = document.querySelector('.main')
      back.onmousemove = function(e) {
      var x = e.pageX - back.offsetLeft - back.offsetParent.offsetLeft
      var y = e.pageY - back.offsetTop - back.offsetParent.offsetTop
      back.style.setProperty('--x', x + 'px')
      back.style.setProperty('--y', y + 'px')
}
}






export async function run(prompt){
    const model=genAI.getGenerativeModel({model:"gemini-pro"});
    
    const reuslt=await model.generateContent(prompt);
    const res=await reuslt.response;
    const text=res.text();
    return text;
    //console.log(text);

}

// run();





function App() {
  
const[generatedText,setText]=useState("HI IM GEMINI ASK ME SOMETHING");
const [prompt,setprompt]=useState("");

const handleinput = (e) => {
  setprompt(e.target.value);
}

const handleClick = async () => {
  try {
      // Update prompt here
      const text = await run(prompt);
      setText(text);
  } catch (error) {
      console.error('Error occurred while generating and setting text:', error);
  }
}



  return (
    <div className="app">

    <h1>GeminAI</h1>
    <label for="prompt">Enter your prompt:</label>
    <input type="text" id="prompt" placeholder="Write a story..." value={prompt} onChange={handleinput}></input>
    <button onClick={handleClick} id="generateBtn">Generate Content</button>
    <div id="output">{generatedText}
      </div>

      

     
   
    </div>
  );
}

export default App;
