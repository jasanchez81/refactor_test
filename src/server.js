let translate = require('./translator');
let text = "quiero trabajar con los mejores";
let targetLang = 'en';

//console.log(translate);
translate.translateText(text, targetLang)
  .then(function(finalData){
    console.log(`This is the result: " ${finalData} "`);
  })
  



