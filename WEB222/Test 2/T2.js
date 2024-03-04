document.getElementsByTagName('button').onclick=displayYear;
document.getElementsByTagName('button').onclick=displayMonth;
function displayYear() {
    const year = new Date().getFullYear();
    document.getElementById('year').innerHTML = year;
}
function displayMonth() {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const currentMonth = new Date().getMonth();
    let monthName = months[currentMonth];
    document.getElementById('month').innerHTML = monthName;
}