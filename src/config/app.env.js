require('dotenv').config();
const CONSTANTS = {
  PUB_SUB_EMAIL_FROM: process.env.PUB_SUB_EMAIL_FROM || 'noreply@intelipoint.com.br',
  PUB_SUB_EMAIL_CHANNEL:process.env.PUB_SUB_EMAIL_CHANNEL || 'email',
  PUB_SUB_EMAIL_TOPIC:process.env.PUB_SUB_EMAIL_TOPIC || 'pegakienvios-notifications',
  PUB_SUB_PROJECT_ID:process.env.PUB_SUB_PROJECT_ID || '',
  GOOGLE_APPLICATION_CREDENTIALS:process.env.GOOGLE_APPLICATION_CREDENTIALS || '{}',
  APPLICATION:process.env.APPLICATION || 'wallet-email-template',
  NOT_LOG_SLACK: process.env.NOT_LOG_SLACK !== undefined ? process.env.NOT_LOG_SLACK.toLocaleLowerCase() !== 'false' : true
}

module.exports = Object.freeze(CONSTANTS)