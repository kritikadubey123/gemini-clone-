import React, { createContext, useState } from "react";
import  runGemini  from "../config/gemini"; 

export const Context = createContext();

const ContextProvider = (props) => {
    
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("")
    const [prevPrompts, setPrevPrompts] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState(""); 
    

    const onSent = async () => {

         const sentText = input.trim();
           if (!sentText) return;
     
        setResultData("")
        setLoading(true)
        setShowResult(true)

         setRecentPrompt(sentText);
         setPrevPrompts((prev) => [...prev, { sender: "user", text: sentText }]);
        
         try {
      // Call the API with the exact prompt that was sent
      const response = await runGemini(sentText);

      // Response expected as string: put into resultData and (optionally) into history
      setResultData(response || ""); 
      setPrevPrompts((prev) => [...prev, { sender: "ai", text: response || "" }]);
    } catch (err) {
      console.error("runGemini error:", err);
      setResultData("Error: Could not get response. Please try again.");
      setPrevPrompts((prev) => [
        ...prev,
        { sender: "ai", text: "Error: Could not get response." },
      ]);
    } finally {
      setLoading(false);
      setInput(""); // clear the input box after sending
    }
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
      