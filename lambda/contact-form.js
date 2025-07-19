const AWS = require('aws-sdk');

// Initialize AWS services
const ses = new AWS.SES({ region: 'us-east-1' });
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  // Configure CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'CORS preflight' })
    };
  }

  try {
    // Parse the request body
    const body = JSON.parse(event.body);
    const { firstName, lastName, email, subject, message, newsletter } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'All fields are required'
        })
      };
    }

    // Store contact submission in DynamoDB
    const contactSubmission = {
      id: Date.now().toString(),
      firstName,
      lastName,
      email,
      subject,
      message,
      newsletter: newsletter || false,
      createdAt: new Date().toISOString(),
      timestamp: Date.now()
    };

    await dynamodb.put({
      TableName: process.env.CONTACT_TABLE_NAME || 'jerry-trudell-contacts',
      Item: contactSubmission
    }).promise();

    // Send email notification using SES
    const emailParams = {
      Source: process.env.FROM_EMAIL || 'noreply@jerrytrudell2024.com',
      Destination: {
        ToAddresses: [process.env.TO_EMAIL || 'info@jerrytrudell2024.com']
      },
      Message: {
        Subject: {
          Data: `Campaign Contact: ${subject}`,
          Charset: 'UTF-8'
        },
        Body: {
          Text: {
            Data: `New contact form submission:
            
Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}
Newsletter: ${newsletter ? 'Yes' : 'No'}

Message:
${message}

Submitted at: ${new Date().toLocaleString()}`,
            Charset: 'UTF-8'
          }
        }
      }
    };

    await ses.sendEmail(emailParams).promise();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Contact form submitted successfully'
      })
    };

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Internal server error'
      })
    };
  }
};