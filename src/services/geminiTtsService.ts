// src/services/geminiTtsService.ts
import { CONFIG } from '../config';

interface GeminiTtsResponse {
  candidates?: {
    content?: {
      parts?: {
        inlineData?: {
          data: string;
          mimeType: string;
        }
      }[]
    }
  }[];
}

export async function synthesizeSpeech(text: string): Promise<string | null> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${CONFIG.GEMINI_MODEL}:generateContent?key=${CONFIG.GEMINI_API_KEY}`;
  
  const payload = {
    contents: [{
      parts: [{
        text: `Lee este texto en español de manera formal y clara: ${text}`
      }]
    }],
    generationConfig: {
      responseModalities: ["AUDIO"],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: {
            voiceName: CONFIG.TTS_VOICE
          }
        }
      }
    }
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini TTS Error:', errorData);
      return null;
    }

    const data: GeminiTtsResponse = await response.json();
    const base64Audio = data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    
    return base64Audio || null;
  } catch (err) {
    console.error('Error calling Gemini TTS:', err);
    return null;
  }
}
