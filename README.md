# AWS IoT Rules Engine with AWS Lambda Action Example
This is a project built and deployed using AWS SAM, and accompanies the blog on [How to ensure resilience for your AWS IoT Rules Engine to AWS Lambda integration](https://dev.to/iotbuilders/how-to-ensure-resilience-for-your-aws-iot-rules-engine-to-aws-lambda-integration-1aoi).

The small demo application shows how to configure AWS Lambda Powertools for Typescript tracer and logger using descriptors, in order to create the Service Map and the needed tracing, to understand the asynchrnous invocation behaviour of AWS Lambda from the AWS IoT Rules Engine.
To demonstrate how AWS IoT Rules Engine works when invoking AWS Lambda, and how AWS Lambda behaves when invoked asynchronous, a small Typescript Lambda function, app.ts, was created to return an error. Because AWS Lambda is invoked asynchrnously, we will see that the AWS IoT Rules Engine receives a 202 response from Lambda, even if the execution fails.
Also, as the SAM template shows, configuring a Destination for the AWS Lambda failed events helps with ensuring resilience (that no data goes missing).

Have a look at the [blog](https://dev.to/iotbuilders/how-to-ensure-resilience-for-your-aws-iot-rules-engine-to-aws-lambda-integration-1aoi) to learn more.

## Build and deploy the application

You can use AWS SAM to build and run this test application.

To use the SAM CLI, you need to install the following tools:

* SAM CLI - [Install the SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
* Node.js - [Install Node.js](https://nodejs.org/en/), including the NPM package management tool.

To build and deploy your application for the first time, run the following in your shell:

```bash
sam build
sam deploy --guided 
```

## Resources
To learn more about the following tools and services, click on the links provided:
1. [AWS SAM](https://aws.amazon.com/serverless/sam/).
2. [Asynchronous AWS Lambda invocations](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html)

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.

