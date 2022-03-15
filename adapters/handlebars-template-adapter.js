const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');

class HandlebarsTemplateAdapter {
  async fillHTMLTemplate({ templateFileName, variables }) {
    const file = path.resolve(__dirname, '..', 'templates', templateFileName);

    const templateFileContent = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });

    const parseTemplate = handlebars.compile(templateFileContent);

    return parseTemplate(variables);
  }
}

module.exports = HandlebarsTemplateAdapter;
