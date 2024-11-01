import { GEMINI_API_KEY } from "../util/constants.mjs";
import handleError from "../util/handle-error.mjs";
import fetch from 'node-fetch';

export default async function getGeminiAnswer(text){
    const body = {
        contents: {
            parts: [
                {
                    text: text
                }
            ]
        }
    };

    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
        {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).catch(err => handleError(err));

    if (response.ok){
        const json = await response.json().catch(err => handleError(err));
        const responseText = json.candidates[0].content.parts[0].text;

        return responseText;

    }else{
        throw new Error("Gemini request failed.");
    }

}