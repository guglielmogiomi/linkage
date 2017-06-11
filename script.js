$( document ).ready(function() {
    console.log( "ready!" );
    console.log($( window ).height());
    setup();
});

var altezzaL2 = 0
var altezzaR2 = 0
var altezzaL3 = 0
var altezzaR3 = 0
var cellHeight = 0
var altezzafinestra = $( window ).height()
var tolleranza = $( window ).height() / 30
var settorefinestra = $( window ).height() / 2

function setup(){
	$(".left" ).scroll(didScrollLeft);
	$(".right").scroll(didScrollRight);
}


function didScrollLeft(){
	 console.log($("#L2").offset().top);
	 altezzaL2 = $("#L2").offset().top;
   console.log($("#L3").offset().top);
	 altezzaL3 = $("#L3").offset().top;
	 checkIfMatch2();
   checkIfMatch3();
}

function didScrollRight(){
	 console.log($("#R2").offset().top);
	 altezzaR2 = $("#R2").offset().top;
   console.log($("#R3").offset().top);
	 altezzaR3 = $("#R3").offset().top;
	 checkIfMatch2();
   checkIfMatch3();
}

function checkIfMatch2(){
	if (   (0 < altezzaL2 && altezzaL2 < settorefinestra)
      && (0 < altezzaR2 && altezzaR2 < settorefinestra)
      && (Math.abs(altezzaL2 - altezzaR2) <= tolleranza) ) {
		      console.log("**** Match ****");
          document.getElementById("footer_inner").style.display='block';
	}
  else {
          document.getElementById("footer_inner").style.display='none';
  }
}

function checkIfMatch3(){
	if (   (0 < altezzaL3 && altezzaL3 < settorefinestra)
      && (0 < altezzaR3 && altezzaR3 < settorefinestra)
      && (Math.abs(altezzaL3 - altezzaR3) <= tolleranza) ) {
		      console.log("**** Match ****");
          document.getElementById("footer_inner").style.display='block';
	}
  else {
          document.getElementById("footer_inner").style.display='none';
  }
}
