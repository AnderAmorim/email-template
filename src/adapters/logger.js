const { v4:uuidv4 } = require('uuid')
const { NelsonRubens, NelsonRubensTypes } = require('nelson-rubens')
const { APPLICATION, NOT_LOG_SLACK }  = require('../config/app.env')

const logger = new NelsonRubens({
  application: APPLICATION
})

const log = (logProps) => {
  const trace = logProps?.trace || uuidv4()
  const span = false
  logger[logProps.severity]({
    ...logProps,
    trace,
    span,
    notify: NOT_LOG_SLACK ? false : logProps.notify
  })
}

const logStatusEnum = Object.freeze({
  FATAL: 'fatal',
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  DEBUG: 'debug',
  SILENT: 'silent'
})


module.exports = { log, types:NelsonRubensTypes, logStatusEnum }
