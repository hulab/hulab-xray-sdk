/* eslint-disable no-console */
const AWS_XRAY = require('aws-xray-sdk');

const FAKE_XRAY = {
  plugins: {},
  config: () => {},
  express: {
    openSegment: () => {},
    closeSegment: () => {}
  },
  captureAWS: (capture) => capture,
  getSegment: () => {},
  captureAsyncFunc: (name, callback) => callback(),
  setAWSWhitelist: () => {},
  appendAWSWhitelist: () => {},
  setStreamingThreshold: () => {},
  setLogger: () => {},
  getLogger: () => {},
  setDaemonAddress: () => {},
  captureFunc: (name, callback) => callback(),
  captureCallbackFunc: (name, callback) => callback(),
  captureAWSClient: (client) => client,
  captureHTTPs: (capture) => capture,
  captureHTTPsGlobal: (capture) => capture,
  capturePromise: () => {},
  utils: {},
  database: {},
  middleware: {},
  getNamespace: () => {},
  resolveSegment: () => {},
  setSegment: () => {},
  isAutomaticMode: () => false,
  enableAutomaticMode: () => {},
  enableManualMode: () => {},
  setContextMissingStrategy: () => {},
  Segment: {},
  Subsegment: {},
  SegmentUtils: {}
};

module.exports = parseInt(process.env.AWS_XRAY) ? AWS_XRAY : FAKE_XRAY;
