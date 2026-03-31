export const emailBody = (
  name: string,
  email: string,
  phone?: string,
  message?: string,
) => `
New Therapy Enquiry

Name: ${name}
Email: ${email}
Phone: ${phone || "No phone provided"}

Message:
${message || "No message provided in the form"}
`;
