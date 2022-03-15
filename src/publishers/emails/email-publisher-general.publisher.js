const {PUB_SUB_EMAIL_CHANNEL, PUB_SUB_EMAIL_FROM} = require('../../config/app.env');
const HandlebarsTemplateAdapter = require('../../adapters/handlebars-template-adapter');
const EmailPublisher = require('../email-publisher');
class EmailPublisherGeneralEmail extends EmailPublisher {
  constructor() {
    super({ channel: PUB_SUB_EMAIL_CHANNEL });
    this.templateAdapter = new HandlebarsTemplateAdapter();
    this.defaultExtension = '.hbs';
    this.defaultVars = { year: new Date().getFullYear() };
  }

  resolveFile({ fileName }) {
    const hasFileToResolve = fileName.indexOf(this.defaultExtension) > -1 ? fileName : fileName + this.defaultExtension;
    return hasFileToResolve;
  }

  async publish({ templateName, subject, destination, vars }) {
    const content = await this.templateAdapter.fillHTMLTemplate({
      templateFileName: this.resolveFile({ fileName: templateName }),
      variables: { ...vars, ...this.defaultVars },
    });
    const response = await super.publish({ destination, from: PUB_SUB_EMAIL_FROM, subject, content });
    return response
  }
}

module.exports = EmailPublisherGeneralEmail;
