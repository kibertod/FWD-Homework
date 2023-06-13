var greenSlide = document.getElementById("greenSlide");
var graySlide = document.getElementById("graySlide");
var whiteSlide = document.getElementById("whiteSlide");
var gromborg = document.getElementById("gromborg");
var mainpageText = document.getElementById("mainpageText");
var cyber = document.getElementById("cyber");
var toad = document.getElementById("toad");
var logo = document.getElementById("logo");
var texts = document.getElementsByClassName("text");
var technologiesWin = document.getElementById("technologies");
var helloWin = document.getElementById("hello");
var whyMeWin = document.getElementById("whyMe");
var contactsWin = document.getElementById("contacts");
var activeWin = helloWin;
var alert = document.getElementById("alert");
var alertText = document.getElementById("alert-message");


function a(){
	greenSlide.style.top = '-3px';
	whiteSlide.style.top = '-3px';
}

function b(){
	graySlide.style.left = '50px';
}

function c(){
	toad.style.color = "#00AD00";
	gromborg.style.opacity = '1';
	mainpageText.style.opacity = '1';
	setTimeout(function(){
	setTimeout(function(){for(i=0; i < texts.length; i++) {texts[i].style.fontFamily = 'one';
 		setTimeout(function(){for(i=0; i < texts.length; i++) {texts[i].style.fontFamily = 'two';
	 		setTimeout(function(){for(i=0; i < texts.length; i++) {texts[i].style.fontFamily = 'three';
	 			setTimeout(function(){for(i=0; i < texts.length; i++) {texts[i].style.fontFamily = 'gotham';}}, 100);
	 	}}, 100); 
	 }}, 100); 
 }}, 100);}, 1000);}

function d(){
	cyber.style.color = "#FFF";
	toad.style.color = "#FFF";
}


function alert_(text){
	alertText.innerHTML = text;
	alert.style.top = "25%";
}


function closeAlert(){
	alert.style.top = "-60%";
}


function send_mail(){
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let message = document.getElementById("message").value;
	if (email.includes("@")){
		let dataReceived = "";
		fetch("https://cybertoad.ru/mail_send/", {
			method: "post",
			headers: { "Content-Type": "plain/text" },
			body: `{"email": "${email}", "name": "${name}", "text": "${message}"}`
		})
			.then(resp => {
				if (resp.status === 200) {
					return resp
				} else {
					console.log("Status: " + resp.status)
					return Promise.reject("server")
				}
			})
			.then(dataJson => {
				dataReceived = dataJson
			})
			.catch(err => {
				if (err === "server") return
				console.log(err)
			})

		console.log(`Received: ${dataReceived.text}`);
		alert_("Your message is sent");
	} else {
		alert_("Your email is incorrect");
	}
}

function showText(text){
	activeWin.style.display = "none"
	document.getElementById(activeWin.id + "Btn").className = "menuBtn";
	document.getElementById(text + "Btn").className = "menuBtn menuBtn-active";
	document.getElementById(text).style.display = "block";
	activeWin = document.getElementById(text);
	setTimeout(function(){for(i=0; i < texts.length; i++) {texts[i].style.fontFamily = 'one';
 		setTimeout(function(){for(i=0; i < texts.length; i++) {texts[i].style.fontFamily = 'two';
	 		setTimeout(function(){for(i=0; i < texts.length; i++) {texts[i].style.fontFamily = 'three';
	 			setTimeout(function(){for(i=0; i < texts.length; i++) {texts[i].style.fontFamily = 'gotham';}}, 100);
	 	}}, 100); 
	 }}, 100); 
 }}, 100);	
}

b();
setTimeout(function(){ 

        if (graySlide.style.left === '50px'){
        	a();
        }
    }, 750);  
graySlide.addEventListener("transitionend", a, false);
greenSlide.addEventListener('transitionend', c, false);
gromborg.addEventListener('transitionend', d, false);