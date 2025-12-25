import { GoogleGenerativeAI} from "@google/generative-ai";


const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;  

const ai = new GoogleGenerativeAI(API_KEY);

 async function runGemini(prompt) {
 
    const model = ai.getGenerativeModel({ model: "gemini-2.5-flash"});

    const result = await model.generateContent(prompt);
    const response =  result.response;
   
    const text = response.text();

    console.log("Gemini text:", text);

    return text;
}

export default runGemini;