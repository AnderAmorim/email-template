const { createAndSendMail } = require(".");
const vars = {
  firstName: 'Anderson',
  linkReport: 'https://eppg.fgv.br/sites/default/files/teste.pdf'
}
const data = btoa(JSON.stringify({templateName:'report-template', vars, destination:"andersonamorim939@gmail.com", subject: "Seu relatório está pronto!"}))
createAndSendMail({data})