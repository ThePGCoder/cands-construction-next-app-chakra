"use server";

import { Resend } from "resend";
import CustomEmail from "../../../../../emails/CustomEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const submitEnquiry = async (
  name: string,
  email: string,
  subject: string,
  enquiry: string
) => {
  const { error } = await resend.emails.send({
    from: "Philip <phil@pgcoder.co.nz>",
    subject: subject,
    to: email,
    react: CustomEmail({
      name: name,
      subject: subject,
      enquiry: enquiry
    }) as React.ReactNode,
  });
  if (error) {
    console.log(error);
    return;
  }
};
