
const urlmodule = require('urlopen');

let ctx = session.name('POC');
let contentID = ctx.getVariable('contentID');

const url = `http://vdicorcata106.na.mmfg.net:8080/getContentByID?contentid=${contentID}`;

console.info('####', Object.getOwnPropertyNames(contentID));


session.output.write(contentID);

/*
urlmodule.open({
  target: url,
  method: 'get'
}, (error, response) => {
  response.readAsBuffer((error, responseData) => {
    session.output.write(responseData);
  });
});
*/
