window.addEventListener('load', function(){
    console.log("Conenido cargado.")
    var imagenes=[];
    imagenes[0]="img/Img1 Index.jpg";
    imagenes[1]="img/Img2 Index.jpg";
    imagenes[2]="img/Img3 Index.jpg";
    var i=0;
    function cambiar(){
        document.slider.src=imagenes[i];
        if(i<2){
            i++;
        }else{
            i=0;
        }
    }
    setInterval(cambiar,3000);

})