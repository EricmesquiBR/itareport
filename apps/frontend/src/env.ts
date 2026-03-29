import { z } from "zod";

const envShape = z.object({
  NEXT_PUBLIC_API_URL: z.string().url().default("http://localhost:3030"),
});

const safeEnv = envShape.safeParse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
});

if (!safeEnv.success) {
  throw new Error(`Invalid frontend environment variables: ${safeEnv.error.message}`);
}

export const env = safeEnv.data;
