import {Context} from 'aws-lambda';
import {captureLambdaHandler, Tracer} from '@aws-lambda-powertools/tracer';
import middy from "@middy/core";
import {injectLambdaContext, Logger} from "@aws-lambda-powertools/logger";

const tracer = new Tracer();
const logger = new Logger();

export const lambdaHandler = middy(async (event: any, context: Context): Promise<any> => {
    logger.info('Event', event)
    throw new Error('This is a test error');
})
    .use(captureLambdaHandler(tracer))
    .use(injectLambdaContext(logger, {clearState: true}));

