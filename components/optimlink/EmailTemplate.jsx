import React from 'react';
import { z } from 'zod';

// Define the schema for props
const EmailTemplateSchema = z.object({
  name: z.string(),
  request: z.string(),
});

export const EmailTemplate = (props) => {
  // Validate props
  const { name, request } = EmailTemplateSchema.parse(props);

  return (
    <div>
      <h1>Wecome, {name}!</h1>
      <h2>We have well received your request, our team will reach out to you soon. </h2>
      <p>Your request:</p>
      <p>{request}</p>
    </div>
  );
};

// Export the schema for use in other parts of the application
export { EmailTemplateSchema };