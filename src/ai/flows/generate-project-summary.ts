'use server';

/**
 * @fileOverview Generates concise summaries for academy projects using AI.
 *
 * - generateProjectSummary - A function that generates the project summary.
 * - GenerateProjectSummaryInput - The input type for the generateProjectSummary function.
 * - GenerateProjectSummaryOutput - The return type for the generateProjectSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectSummaryInputSchema = z.object({
  projectDescription: z.string().describe('The description of the academy project.'),
});
export type GenerateProjectSummaryInput = z.infer<typeof GenerateProjectSummaryInputSchema>;

const GenerateProjectSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the academy project.'),
});
export type GenerateProjectSummaryOutput = z.infer<typeof GenerateProjectSummaryOutputSchema>;

export async function generateProjectSummary(input: GenerateProjectSummaryInput): Promise<GenerateProjectSummaryOutput> {
  return generateProjectSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectSummaryPrompt',
  input: {schema: GenerateProjectSummaryInputSchema},
  output: {schema: GenerateProjectSummaryOutputSchema},
  prompt: `You are an AI assistant that generates concise summaries for data science projects.
  Please provide a brief summary of the following project description:
  {{projectDescription}}
  `,
});

const generateProjectSummaryFlow = ai.defineFlow(
  {
    name: 'generateProjectSummaryFlow',
    inputSchema: GenerateProjectSummaryInputSchema,
    outputSchema: GenerateProjectSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
