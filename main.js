let myHeading = document.querySelector('h2');
 myHeading.textContent = 'Смена фото котиков при клике на картинку';


document.querySelector('html').onclick = function() {
    // alert('Ouch! Stop poking me!');
}


let myImage = document.querySelector('img');
myImage.onclick = function () {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox-icon.png') {
		myImage.setAttribute ('src' , 'images/firefox2.png');
	} 
     else  if (mySrc === 'images/firefox2.png') {
		myImage.setAttribute ('src' , 'images/firefox3.png');
	}
	else if (mySrc === 'images/firefox3.png') {
            myImage.setAttribute ('src' , 'images/firefox4.png');
	}
	else if (mySrc === 'images/firefox4.png') {
		 myImage.setAttribute ('src' , 'images/firefox5.png');
	}
	else if (mySrc === 'images/firefox5.png') {
		myImage.setAttribute ('src' , 'images/firefox6.png');
	}
	else if (mySrc === 'images/firefox6.png') {
		myImage.setAttribute ('src' , 'images/firefox7.png');
	}
	
	else {
		myImage.setAttribute ('src' , 'images/firefox-icon.png');
	}
}