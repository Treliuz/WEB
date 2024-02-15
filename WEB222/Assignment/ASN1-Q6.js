/***************************************************************************** 
* WEB222 – Assignment 1 
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
* No part of this assignment has been copied manually or electronically from any other source 
* (including web sites) or distributed to other students. 
* 
* Name: Joseph Mwamba-Mukuna Student ID: 163997163 Date: 11/02/2024 
* 
******************************************************************************/
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
