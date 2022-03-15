const {log, types, logStatusEnum} = require('../adapters/logger')
const { PubSub } = require('@google-cloud/pubsub');
const {PUB_SUB_PROJECT_ID, GOOGLE_APPLICATION_CREDENTIALS} = require('../config/app.env');
const { INTERNAL_ERROR_CREATE_TOPIC, INTERNAL_ERROR_PUBLISH } = require('./constants');
const googlePubSubConfig = { projectId: PUB_SUB_PROJECT_ID, credentials: JSON.parse(GOOGLE_APPLICATION_CREDENTIALS) };

const pubSub = new PubSub(googlePubSubConfig);

module.exports = async function googlePublisher({ message, topic, attributes, createTopicIfNotExists = true }) {
  let messageDataBuffer = typeof message === 'string' ? Buffer.from(message) : Buffer.from(JSON.stringify(message));

  if (!attributes) {
    attributes = {};
  }

  if (createTopicIfNotExists) {
    await pubSub
      .topic(topic)
      .create()
      .catch((error) => log({
        severity:logStatusEnum.ERROR,
        method:'google-pubsub-adapter',
        className:'google-pubsub-adapter',
        errorsInfos: INTERNAL_ERROR_CREATE_TOPIC,
        data: { topic, attributes },
        type:types.request,
        notify:true
      }));
  }
  const response = await pubSub.topic(topic).publish(messageDataBuffer, attributes).catch((error) => 
    log({
      severity:logStatusEnum.ERROR,
      method:'google-pubsub-adapter',
      className:'google-pubsub-adapter',
      errorsInfos: INTERNAL_ERROR_PUBLISH,
      data: { topic, attributes },
      type:types.request,
      notify:true
    })
  );;
  return response
};
