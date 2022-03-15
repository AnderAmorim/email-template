const googlePubSub = require('../adapters/google-pubsub-adapter');
const { PUB_SUB_EMAIL_TOPIC } = require('../config/app.env');

class EmailPublisher {
  #channel;
  constructor({ channel }) {
    this.#channel = channel;
  }

  async publish({ destination, from, subject, content }) {
    const data = Buffer.from(content).toString('base64');

    const attributes = {
      destination,
      from,
      channel: this.#channel,
      createdAt: new Date().toISOString(),
      subject,
    };
    const response = await googlePubSub({ message: data, topic: PUB_SUB_EMAIL_TOPIC, attributes, createTopicIfNotExists:false });
    return response
  }
}

module.exports = EmailPublisher;
