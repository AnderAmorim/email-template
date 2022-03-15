const { CreateAndSendEmail } = require("../../controllers/create-and-send-email")
const EmailPublisherGeneralEmail = require("../../publishers/emails/email-publisher-general.publisher")

exports.CreateAndSendEMailFactory = () => {
  const templateAdapter = new EmailPublisherGeneralEmail()
  return CreateAndSendEmail({ templateAdapter })
}
