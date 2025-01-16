"use server"


import { createGroq } from '@ai-sdk/groq';
import { generateObject } from 'ai'
import { z } from 'zod';

const groq = createGroq({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

export async function generateBio (input: string, temperature: number, model: string) {

  const {
    object: data,
  } = await generateObject({
    model: groq(model),
    system: "You generate three notifications for message app",
    prompt: input,
    temperature: temperature,
    maxTokens: 1024,
    schema: z.object({
      data: z.array(
        z.object({
          bio: z.string().describe("Add generated bio here!"),
        })
      ),
    }),
  });

  return {data}
}