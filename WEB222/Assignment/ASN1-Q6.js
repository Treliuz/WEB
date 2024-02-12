const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Enter a zipcode: ', (zipcode) => {
    function validateZip(zipcode) {
        var pattern =/^[A-Z]\d[A-Z]\d[A-Z]\d$/;
        return pattern.test(zipcode);
    }
    console.log(validateZip(zipcode));
readline.close();
});
