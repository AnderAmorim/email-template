const { CreateAndSendEMailFactory } = require("./factories/controllers/create-and-send-email");

/**
 * Triggered from a message on a Cloud Pub/Sub topic.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */
 exports.createAndSendMail = async (event, context) => {
  try {
    const bufferPayload = Buffer.from(event.data, 'base64').toString();
    const payload = bufferPayload ? JSON.parse(bufferPayload) : {}
    const {templateName, vars, destination, subject} = payload
    const httpResponse = await CreateAndSendEMailFactory().handleMessage({ templateName, vars, destination, subject });
    console.log("Success response=>", httpResponse);
  } catch (err) {
    console.log("error message:", err.message)
    console.log("stack:", err.stack)
  }
};