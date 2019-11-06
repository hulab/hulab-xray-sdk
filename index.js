"use strict"

/* eslint-disable no-console */
const AWS_XRAY = require('aws-xray-sdk');

const FAKE_XRAY = {
  plugins: {},
  config: () => {},
  express: {
    openSegment: () => function(req, res, next) {next();},
    closeSegment: () => function(req, res, next) {next();}
  },
  captureAWS: (capture) => capture,
  getSegment: () => {},
  captureAsyncFunc: function(name, callback) {callback();},
  setAWSWhitelist: () => {},
  appendAWSWhitelist: () => {},
  setStreamingThreshold: () => {},
  setLogger: () => {},
  getLogger: () => {},
  setDaemonAddress: () => {},
  captureFunc: function(name, callback) {callback();},
  captureCallbackFunc: function(name, callback) {callback();},
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
