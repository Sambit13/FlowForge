// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://0a88e64d9bf518568b531fbeb100b507@o4511576266637312.ingest.us.sentry.io/4511648587120640",

  integrations: [
    Sentry.vercelAIIntegration({
      recordInputs: true,
      recordOutputs:true,
    }),
    Sentry.consoleLoggingIntegration({levels:["log","warn","error"]}),
  ],

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,
  sendDefaultPii: true,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
