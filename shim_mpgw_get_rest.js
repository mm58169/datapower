
const urlmodule = require('urlopen');
const service = require('service-metadata');

// retrieve contentID mapping from previously saved variable
let ctx = session.name('POC');
let contentIDXML = ctx.getVariable('contentID'); // var://context/POC/contentID
let contentID = XML.stringify(contentIDXML).split('\n')[1];

// set JSON backend url
const url = `http://vdicorcata106.na.mmfg.net:8080/getContentByID?contentid=${contentID}`;
service.setVar('var://service/routing-url', url);
