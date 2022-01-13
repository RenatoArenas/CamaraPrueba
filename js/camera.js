function validarExt() {
    var imgInput = document.getElementById('imgInput');
    var imgRuta = imgInput.value;
    var extPermitidas = /(.jpg|.PNG|.svg|.webp)$/i;
    console.log(extPermitidas)
    
    if (!extPermitidas.exec(imgRuta)) {
        alert('Solo se permiten imagenes');
        imgInput.value = "";
    }
    else {
        if(imgInput.files && imgInput.files[0]) {
            var visor = new FileReader();
            visor.onload=function(e) {
                document.getElementById('visorImg').innerHTML = '<embed src="'+e.target.result+'" width="500" height="500" >';
            }
            visor.readAsDataURL(imgInput.files[0]);
        }
    }
}