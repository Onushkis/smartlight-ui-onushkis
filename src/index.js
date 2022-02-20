import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from './App';
import ErrorBoundary from './components/Errorboundery';

Sentry.init({
  dsn: "https://d5782e721d104a83ab5e542468c31041@o1140328.ingest.sentry.io/6197432",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
     <ErrorBoundary>

    <App />
     </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

