
document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/2zixbms_th.jpg') {
	myImage.setAttribute ('src','images/xbbcea_th.jpg');
    } else {
	myImage.setAttribute ('src','images/2zixbms_th.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Learning is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Learning is cool, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}

