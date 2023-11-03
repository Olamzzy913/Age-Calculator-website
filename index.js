function calAge() {
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const btnCal = document.getElementById('btn');
const repo = document.getElementById('tetext');
const repo2 = document.getElementById('tetext2');
const repo3 = document.getElementById('tetext3');
const task1 = document.getElementById('quary1');
const task2 = document.getElementById('quary2');
const task3 = document.getElementById('quary3');

var date = new Date();

var da1 = date.getDate();
var mo1 = 1 + date.getMonth();
var ye1 = date.getFullYear();


var da2 = day.value;
var mo2 = month.value;
var ye2 = year.value;

var month1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if (da2 === "") {
    task3.innerHTML = `Enter a valid date`
    document.getElementById("error1").style.color = "red"
}

if (mo2 === "") {
    task2.innerHTML = `Enter a valid month`
    document.getElementById("error2").style.color = "red"
}

 if (ye2 === "") {
    task1.innerHTML = `Enter a valid year`
    document.getElementById("error3").style.color = "red"
}

if (ye2 > ye1) {
    task1.innerHTML = `Year must be in the Past`
    document.getElementById("error3").style.color = "red"
}

if (da2 > da1) {
    da1 = da1 + month1[mo1 - 1];
    mo1 = mo1 - 1;
}

if (mo2 > mo1) {
    mo1 = mo1 - 12;
    ye1 = ye1 - 1;
}

else {
   
    var d = da1 - da2;
    var m = mo1 - mo2;
    var y = ye1 - ye2;

    repo.innerHTML = `${d}`;
    repo2.innerHTML = `${m}`;
    repo3.innerHTML = `${y}`;
  }

}








