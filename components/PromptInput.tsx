'use client'

import { FormEvent, useState } from "react";
import fetchSuggestionFromChatGPT from "../lib/fetchSuggestionFromChatGPT";
import useSWR from "swr"

function PromptInput() {
  const [input, setInput] = useState("");
  const {
    data: suggestion,
    isLoading, mutate,
    isValidating} = useSWR("/api/suggestion", fetchSuggestionFromChatGPT,
     {
      revalidateOnFocus: false,
    }
    );
    const loading = isLoading || isValidating;

    const submitPrompt = async(useSuggestion?: boolean) =>{
      const inputPrompt = input;
      setInput("");

      const promptApi = useSuggestion ? suggestion : inputPrompt;
      const res = await fetch('api/generateImage', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({prompt: promptApi})
      })
      const data = await res.json();
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await submitPrompt()
    }

  return (
    <div className="m-10">
      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row shadow-md shadow-slate-4
      /10 border rounded-md lg:divide-x">
        <textarea 
        value= {input}
        onChange={(e) => setInput(e.target.value)} 
        placeholder={
          (loading && "ChatGPT is thinking for a suggestion...") ||
          suggestion || "Enter your idea here..."}
        className="flex-1 p-4 outline-none rounded-md" />
        <button type="submit"
              className={`p-4 font-bold ${input ? 'bg-violet-500 text-white transition-colors duration-200' : 'text-gray-300 cursor-not-allowed'}`}
              disabled={!input}                     
              > Generate
        </button>
        
        <button className="p-4 bg-violet-400 text-whi
         transition-colors duration-200 font-bold disabled:text-gray-300
         disabled:cursor-not-allowed disabled:bg-gray-400" type="button" onClick={() => submitPrompt(true)}>
           Use Suggestion
         </button>
       
        <button 
        className="p-4 bg-white text-violet-500 border-none transition-colors duration-200 rounded-b-md md:rounded-r-md
        md:rounded-bl-none font-bold" type="button"
        onClick={mutate}
        > New Suggestion</button>
      </form>
      {input && (
        <p className="italic pt-2 pl-2 font-light">
          Suggestion: {" "}
          <span className="text-violet-500">
            {loading ? "ChatGPT is thinking...": suggestion}

          </span>
        </p>
      )}

    </div>
  );
}
;

export default PromptInput