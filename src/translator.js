"use strict";

const Translate = require('@google-cloud/translate');
const TranslateService = {};
const translate = new Translate({
  keyFilename: './translator.conf.json',
});

TranslateService.translateText = (content, targetLang) => {
  return  translate
            .translate(content,targetLang)
              .then(data=>{
                return data[0];
              }).catch( err=> {
                return err;
              });
}

module.exports = TranslateService;
