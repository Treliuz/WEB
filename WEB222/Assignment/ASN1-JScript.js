/***************************************************************************** 
* WEB222 – Assignment 1 
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
* No part of this assignment has been copied manually or electronically from any other source 
* (including web sites) or distributed to other students. 
* 
* Name: Joseph Mwamba-Mukuna Student ID: 163997163 Date: 11/02/2024 
* 
******************************************************************************/
document.getElementById('getYear').addEventListener('click', displayCurrentYear);
document.getElementById('getMonth').addEventListener('click', displayCurrentMonth);

function displayCurrentYear() {
    const year = new Date().getFullYear();
    alert("Current year: " + year);
    console.log("Current year: " + year)
}

function displayCurrentMonth() {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const currentMonth = new Date().getMonth();
    let monthName = months[currentMonth];
    alert("Current Month: " + monthName);
    console.log("Current Month: " + monthName);
}
