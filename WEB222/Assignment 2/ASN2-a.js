/***************************************************************************** 
* WEB222 – Assignment 2 
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
* No part of this assignment has been copied manually or electronically from any other source 
* (including web sites) or distributed to other students. 
* 
* Name: Joseph Mwamba-Mukuna Student ID: 163997216 Date: 06/03/2024 
* ******************************************************************************/
function emailConcat() {
    const table = document.getElementsByTagName('table')[0];
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const className = rows[i].className;
        const rowNum = document.getElementsByClassName(className)[0];
        const first = rowNum.getElementsByTagName('td')[0].innerText;
        const last = rowNum.getElementsByTagName('td')[1].innerText;

        const emailString = `${first}.${last}@aol.com`;

        const email = rowNum.lastElementChild;
        email.innerText = emailString;
    }
}
