import dotenv from 'dotenv';
import path from 'path';
import Joi from 'joi';

type Config = {
  port: number;
  mongodbUrl: string;
  awsAccessKeyId: string;
  awsSecretAccessKey: string;
  awsS3Region: string;
  awsS3BucketName: string
  awsCognitoUserPoolId: string;
  awsCognitoClientId: string;
};

// Function to load and validate environment variables
function loadConfig(): Config {
  // Determine the environment and set the appropriate .env file
  const env = process.env.NODE_ENV || 'development';
  const envPath = path.resolve(__dirname, `./configs/.env.${env}`);
  dotenv.config({ path: envPath });

  // Define a schema for the environment variables
  const envVarsSchema = Joi.object({
    PORT: Joi.number().default(3000),
    MONGODB_URL: Joi.string().required(),
    AWS_ACCESS_KEY_ID: Joi.string().required(),
    AWS_SECRET_ACCESS_KEY: Joi.string().required(),
    AWS_S3_REGION: Joi.string().required(),
    AWS_S3_BUCKET_NAME: Joi.string().required(),
    AWS_COGNITO_USER_POOL_ID: Joi.string().required(),
    AWS_COGNITO_CLIENT_ID: Joi.string().required()

  }).unknown().required();

  // Validate the environment variables
  const { value: envVars, error } = envVarsSchema.validate(process.env);
  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }

  return {
    port: envVars.PORT,
    mongodbUrl: envVars.MONGODB_URL,
    awsAccessKeyId: envVars.AWS_ACCESS_KEY_ID,
    awsSecretAccessKey: envVars.AWS_SECRET_ACCESS_KEY,
    awsS3Region: envVars.AWS_REGION,
    awsS3BucketName: envVars.AWS_S3_BUCKET_NAME,
    awsCognitoUserPoolId: envVars.USER_POOL_ID,
    awsCognitoClientId: envVars.COGNITO_APP_CIENTID
  };
}

// Export the loaded configuration
const configs = loadConfig();
export default configs;