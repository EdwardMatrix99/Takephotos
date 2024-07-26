(function () {
  var streaming = false,
    video = document.querySelector("#video"),
    canvas = document.querySelector("#canvas"),
    canvas2 = document.querySelector('#canvas2'),
     canvas3 = document.querySelector('#canvas3'),
    photo = document.querySelector("#photo"),
    startbutton = document.querySelector(".startbutton"),
    startbutton2 = document.querySelector(".startbutton2"), 
     startbutton3 = document.querySelector(".startbutton3").classList.add('hide'), 
    width = 320,
    height = 0;
let boton3 = document.createElement('button'); 
let descargar1 = document.createElement('button'); 
let descargar2 = document.createElement('button'); 

  

  navigator.getUserMedia({   video: true, audio: false, },
    function (stream) {
      if (navigator.getUserMedia) {
        video.srcObject = stream;
      } else {
        var vendorURL = window.URL ; /* window.webkitURL */
        video.src = vendorURL.createObjectURL(stream);
      }
      video.play();
    },
    function (err) {
      console.log("An error occured! " + err);
    },
  ) 
  video.addEventListener(
    "canplay",
    function (ev) {
      if (!streaming) {
        height = video.videoHeight / (video.videoWidth / width);
         video.setAttribute("width", 700);
         video.setAttribute("height", 400);
        canvas.setAttribute("width", width);
        canvas.setAttribute("height", height);
        canvas2.setAttribute("width", width);
        canvas2.setAttribute("height", height);
    
        streaming = true;
      }
    },
    false,
  );

  function takepicture(canvas) {
    canvas.width = width;
    canvas.height = height;
    let ctx= canvas.getContext("2d")
    ctx.drawImage(video, 0, 0, width, height);
    let data = canvas.toDataURL("image/png");
     //photo.setAttribute("src", data);
    
  
    
  }



 function ocultar (startbutton){startbutton.classList.add('hide');}
 startbutton.addEventListener( "click",  () => {takepicture(canvas); ocultar(startbutton); }, false 
  );
  startbutton.addEventListener( "click",  () => { ocultar(startbutton); }, false 
  );



                              function crearboton ( ) { 
                               boton3.classList.add("boton3");
                               boton3.textContent = "Download All "; 
                               document.body.appendChild(boton3);}
 
                               function crearboton1 ( ) { 
                               descargar1.classList.add("D1");
                               descargar1.textContent = "Download 1 "; 
                               document.body.appendChild(descargar1);}

                               function crearboton2 ( ) { 
                              descargar2.classList.add("boton2");
                               descargar2.textContent = "Download 2 "; 
                               document.body.appendChild(descargar2);}


function mostraranotherno ( ) { startbutton2.classList.add("hide"); }   mostraranotherno();   

function mostraranother ( ) { startbutton2.classList.remove("hide"); }


startbutton.addEventListener(
    "click",
    function (ev) {
     ev.preventDefault();
     mostraranother();

    
      
    },
    false,
  );

startbutton2.addEventListener(
    "click",
    function (ev) {
     ev.preventDefault();
      
    takepicture(canvas2)
    
      
    },
    false,
  );


  
startbutton2.addEventListener(
    "click",
    function (ev) {
     ev.preventDefault();
     mostraranotherno();   

    
      
    },
    false,
  );




  // --------------------FUNCION DESCARGAR ---------------- 


startbutton2.addEventListener(
    "click",
    function (ev) {
     ev.preventDefault();
     crearboton();
    
      crearboton1(); 
      crearboton2(); 
    
      
    },
    false,
  );

function download (canvas) { 

  let imagen = canvas 
 imagen.toBlob(function(blob){
  let a  = document.createElement('a'); 
  a.href = URL.createObjectURL(blob); 
  a.download = " picture.png"; 
  document.body.appendChild(a); 
  a.click(); 
  },'image/png');
  
   
 }



boton3.addEventListener('click',()=>{download(canvas); download(canvas2);} , false);
descargar1.addEventListener('click',()=>{download(canvas)} , false);
descargar2.addEventListener('click',()=>{download(canvas2)} , false);

//boton3.addEventListener('click',()=>{download(canvas2)} , false);








/*   function takepicturetwo() {
    canvas2.width = width;
    canvas2.height = height;
    canvas2.getContext("2d").drawImage(video, 500, 500, width, height);
    let data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);

    
  } */
  
  // TODO SE PUEDE SOLUCIONAR CON CLASS HIDE PARA LOS BOTONES Y SEGUIR HACIENDO EVENT LISTETNER
  // TNATOS COMO SE QUIERA
/* startbutton2.classList.add("hide"); 
startbutton3.classList.add("hide"); 

function mostraranother ( ) { startbutton2.classList.remove("hide"); }
function removertake ( ) { startbutton.classList.add("hide"); }
function mostraranother3 ( ) { startbutton3.classList.remove("hide"); }


boton3 = document.createElement('button'); 

function crearboton ( ) { 
                               boton3.classList.add("boton3");
                               boton3.textContent = "Download "; 
                               document.body.appendChild(boton3);

                             

}

  startbutton.addEventListener( "click",  function (ev) {
     ev.preventDefault();

    takepicture(canvas)
   
    startbutton.classList.add("hide"); 
    
 
},   false,  
  );

  startbutton.addEventListener(
    "click",
    function (ev) {
     ev.preventDefault();
     mostraranother();

    
      
    },
    false,
  );

  startbutton.addEventListener(
    "click",
    function (ev) {
     ev.preventDefault();
     removertake();

    
      
    },
    false,
  );

  
  startbutton2.addEventListener(
    "click",
    function (ev) {
     ev.preventDefault();
      takepicture(canvas2);

    
      
    },
    false,
  );


   
  startbutton2.addEventListener(
    "click",
    function (ev) {
     ev.preventDefault();
     
    startbutton2.classList.add("hide"); 
    
      
    },
    false,
  );

  startbutton2.addEventListener(
    "click",
    function (ev) {
     ev.preventDefault();
     
     mostraranother3();
    
      
    },
    false,
  );


  // falta solucionar la creacion dentro del dom boton 3  !!!!!!impotante repara el botnon 3
  // para poder usarlo desde el dom y ser mas dinamico 
  // arreglar arriba las functoonees de add remove para ser una sola con difrente botn

  function remove3 ( ) { startbutton3.classList.add('hide'); }

  startbutton3.addEventListener(
    "click",
    function (ev) {
     ev.preventDefault();
     
       takepicture(canvas3);

       
      
    },
    false,
  );


  startbutton3.addEventListener("click",  () => {crearboton(); remove3(); }, false );





 
 boton3.addEventListener( 

"click",
    function (ev) {
     ev.preventDefault();
     
     
     download(blob); 
       
      
    },
    false,

); */


}



)();