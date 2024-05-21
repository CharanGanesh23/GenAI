
//import { GoogleGenerativeAI } from '@google/generative-ai';
require('dotenv').config();
const GoogleGenerativeAI=require('@google/generative-ai')
const genAI=new GoogleGenerativeAI(process.env.API_KEY);
async function run(){


   
    const model=genAI.getGenerativeModel({model:"gemini-pro"});
    const prompt="write a stry about majicbook"
    const reuslt=await model.generateContent(prompt);
    const res=await reuslt.response;
    const text=res.text();
    console.log(text);

}
// document.getElementById("myButton").addEventListener("click", buttonClick);
