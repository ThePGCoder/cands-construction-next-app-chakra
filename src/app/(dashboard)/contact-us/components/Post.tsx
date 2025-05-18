import emailjs from 'emailjs-com';

export const submitEnquiry = async (
  name: string,
  email: string,
  subject: string,
  enquiry: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        user_name: name,
        email: email,
        subject,
        message: enquiry,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    console.log('EmailJS sent:', result.text);
    return { success: true };
  } catch (error: any) {
    console.error('EmailJS error:', error.text || error.message);
    return { success: false, error: error.text || error.message };
  }
};
