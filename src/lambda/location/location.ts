import { APIGatewayProxyResult } from 'aws-lambda';

export async function handler(): Promise<APIGatewayProxyResult> {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Location'
      })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: 'An error occured'
    };
  }
}
