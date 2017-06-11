@import url(http://fonts.googleapis.com/css?family=Source+Roboto:700);


body {
  margin: 0;
  padding: 0;
  font-size: 6.0vh;
  font-family: 'Roboto', sans-serif;
  background-color: black;
  overflow-y:hidden;
}


.header{
  height: 9%;
  width:100%;
  border-bottom: 0.8vh solid black;
  position: fixed;
  background-color: white;
  z-index: 300;
  display:block;
}

.headerinner{
margin-left: 3.2vw;
margin-top: 0.9vh;
font-size: 6.0vh;
}


.tendinasx {
  height: 100%;
  width: 28%;
  border: 0.8vh solid black;
  position: fixed;
  top: 0%;
  left: -25%;
  background-color: white;
  z-index: 200;
  display:block;
}


.tendinadx {
  height: 100%;
  width: 28%;
  border: 0.8vh solid black;
  position: fixed;
  top: 0%;
  right: -25%;
  background-color: white;
  z-index: 200;
  display:block;
}



.left {
  width: 50%;
  height: 100vh;
  float: left;
  overflow-y: scroll;
  overflow-x: hidden;


}

.right {
  width: 50%;
  height: 100vh;
  float: right;
  overflow-y: scroll;
  overflow-x: hidden;
}

::-webkit-scrollbar
{
    width:0px;
}
::-webkit-scrollbar-track-piece
{
    background-color:transparent;
}

.didascalia{
  width:50vw;
  position:relative;
  border-right: 0.9vh solid black;
  border-left: 0.9vh solid black;
  background-color: black;
  z-index:100;


}
.immaginesx{
    width: 101%;
    height: auto;
    position: relative;
    margin: 0 auto;
    border: none;
    z-index: 50;
}
.immaginedx{
    width: 101%;
    height: auto;
    position: relative;
    margin: 0 auto;
    border: none;
    z-index: 50;
}


.footer {
  height: 9%;
  width:100%;
  border-top: 0.8vh solid black;
  bottom:0%;
  position: fixed;
  background-color: white;
  z-index: 300;
  display: block;
}

.footerinner{
  text-align: center;
  margin-top: 0.9vh;
  font-size: 6.0vh;
  display:none;
}




.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 98.5%;
  width: 100%;
  z-index:60;
  opacity: 0;
  transition: .2s ease;
  background-color: white;
}

.didascalia:hover .overlay {
  opacity: 1;
}

.textsx {
  color: black;
  font-size: 0.6em;
  position: absolute;
  top: 8%;
  left: 13%;
  width:70%;
  font-family: 'Roboto', sans-serif;
}

.textdx {
  color: black;
  font-size: 0.6em;
  position: absolute;
  top: 8%;
  left: 7%;
  width:70%;
  font-family: 'Roboto', sans-serif;
}
