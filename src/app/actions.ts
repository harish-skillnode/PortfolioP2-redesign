"use server";

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const validatedFields = contactFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Validation failed.',
        success: false,
      };
    }
    
    const { name, email, message } = validatedFields.data;

    // In a real application, you would send an email or save to a database here.
    // For example, using Nodemailer or an email service API.
    console.log("Contact form submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Simulate sending email
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true, message: "Message sent successfully! I'll get back to you soon." };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, message: "An unexpected error occurred. Please try again." };
  }
}
