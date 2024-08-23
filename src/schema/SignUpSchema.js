import { z } from 'zod';

const beardOptions = ['Clean Shaven', 'Stubble', 'Beard', 'Goatee'];
const hairOptions = ['Short', 'Medium', 'Long', 'Bald'];
const dressOptions = ['Casual', 'Formal', 'Traditional'];

const baseSchema = z.object({
  firstName: z.string().nonempty({ message: "First Name is required" }),
  lastName: z.string().nonempty({ message: "Last Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  gender: z.string().nonempty({ message: "Select a gender" }),
});

const femaleSchema = baseSchema.extend({
  gender: z.literal('female', { errorMap: () => ({ message: "Gender must be female" }) }),
});

const maleSchema = baseSchema.extend({
  gender: z.literal('male', { errorMap: () => ({ message: "Gender must be male" }) }),
  beard: z.enum(beardOptions, { errorMap: () => ({ message: "Select beard option" }) }),
  hair: z.enum(hairOptions, { errorMap: () => ({ message: "Select hair option" }) }),
  dress: z.enum(dressOptions, { errorMap: () => ({ message: "Select dress option" }) }),
});

export const currentSchema = z.discriminatedUnion('gender', [
  femaleSchema,
  maleSchema,
]);
