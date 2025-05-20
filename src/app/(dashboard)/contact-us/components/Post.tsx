// src/app/contact/components/Post.ts
import emailjs from '@emailjs/browser';

export const submitEnquiry = async (
    name: string,
    email: string,
    subject: string,
    enquiry: string
): Promise<{ success: boolean; error?: string }> => {
    try {
        // Send admin copy
        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ADMIN_ID!,
            {
                user_name: name,
                user_email: email,
                subject,
                message: enquiry,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );


        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_USER_ID!,
            {
                user_name: name,
                user_email: email,
                subject,
                message: enquiry,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );

        return { success: true };
    } catch (error: any) {
        console.error('EmailJS error:', error.text || error.message);
        return { success: false, error: error.text || error.message };
    }
};
