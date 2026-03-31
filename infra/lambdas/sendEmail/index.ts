import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { emailBody } from "./emailBody";

const ses = new SESClient({
  region: "eu-west-2",
});

interface ContactFormBody {
  name: string;
  email: string;
  phone?: string;
  message?: string;
}

export const handler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "no body was provided" }),
        headers: { "Content-Type": "application/json" },
      };
    }

    const body: ContactFormBody = JSON.parse(event.body);

    const { name, email, phone, message } = body;

    if (!name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false }),
      };
    }

    const params = {
      Source: process.env.FROM_EMAIL!,
      Destination: {
        ToAddresses: [process.env.FROM_EMAIL!],
      },
      ReplyToAddresses: [email],
      Message: {
        Subject: { Data: `New therapy enquiry from ${name}` },
        Body: { Text: { Data: emailBody(name, email, phone, message) } },
      },
    };

    await ses.send(new SendEmailCommand(params));

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (error) {
    console.log("error happened", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ success: false }),
    };
  }
};
