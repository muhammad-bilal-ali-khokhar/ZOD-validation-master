// IndexBaseSchema.js
import { z } from 'zod';


// simple validation schema
// Define Zod schema for description validation
export const descriptionSchema = z.array(z.object({
  description: z.string().min(1, "Description is required"),
}));


// unique validation schema for description
// Define a schema where description can be either a string or a number
// export const descriptionSchema = z.array(z.object({
//   description: z.union([
//     z.string().min(1, "Description is required"), // String validation
//     z.number().min(1, "Description must be a positive number") // Number validation
//   ]),
// }));



// Define schema with custom validation 
// export const descriptionSchema = z.array(z.object({
//   description: z.string().refine(
//     (value) => value.length >= 5 && value.length <= 10, // Ensure string length is between 5 and 10
//     { message: 'Description must be between 5 and 10 characters long' }
//   )
// }));