require('dotenv').config()
const CONSTANTS = {
  ERROR: {
    USER_INTEGRATION_NOT_FOUND: 'User integration not found in storage',
    USERS_IDS_ERROR: 'Error on separe userIds',
    USER_INFO_ERROR: 'User infos not found',

    USERS_NOT_FOUND_ERROR: 'Users not found in database',
    ERROR_ON_INSER_BG: 'Rows can not inserted, please retry again later'

  },

  MESSAGE: {
    SUCCESS: 'Operation has completed'
  },

  LOCAL: {
    HANDLE: 'Handle report'
  },

  REPORT: {
    PATH: 'reports',
    REPORT_NAME: 'operation'
  },

  STORAGE:{
    FILE_NAME: 'users_integrations_report.json',
    BUCKET_NAME: process.env.BUCKET_NAME,
    IS_PUBLIC: false,
  },

  PUBSUB:{
    TOPIC_NAME: process.env.TOPIC_NOTIFICATION_REPORT,
  }
}

exports.CONSTANTS = Object.freeze(CONSTANTS)
