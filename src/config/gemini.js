import { GoogleGenerativeAI} from "@google/generative-ai";


const API_KEY = "AIzaSyCprtUZIpzl9dUGG78-LeqlW9cAXJ-X940";  // your key

const ai = new GoogleGenerativeAI(API_KEY);

 async function runGemini(prompt) {
  //try {
    const model = ai.getGenerativeModel({ model: "gemini-2.5-flash"});

    const result = await model.generateContent(prompt);
   
    const text =
  result &&
  result.response &&
  result.response.candidates &&
  result.response.candidates[0] &&
  result.response.candidates[0].content &&
  result.response.candidates[0].content.parts &&
  result.response.candidates[0].content.parts[0] &&
  result.response.candidates[0].content.parts[0].text
    ? result.response.candidates[0].content.parts[0].text
    : "";


    console.log("Gemini text:", text);

    return text;

/*  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while fetching the AI response.";
  }*/
}

export default runGemini;