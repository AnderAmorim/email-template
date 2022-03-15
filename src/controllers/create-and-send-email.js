const {log, types, logStatusEnum} = require('../adapters/logger')
const { ERROR_PUBLISH } = require('./constants')
exports.CreateAndSendEmail = ({ templateAdapter }) => ({
  async handleMessage({ templateName, vars, destination, subject }) {
    try {
      const response = await templateAdapter.publish({templateName, subject, destination, vars})
      return response
    } catch (error) {
      log({
        severity:logStatusEnum.ERROR,
        method:'handleMessage',
        className:'CreateAndSendEmailController',
        errorsInfos: ERROR_PUBLISH,
        data: { templateName, vars, destination, subject },
        type:types.request,
        notify:true
      })
    }
  }
})