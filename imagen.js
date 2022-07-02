function descargarGrafo() {
    console.log("dkdk")
            html2canvas($('imagen')).then(function (canvas) {
                alert("entro")
                return Canvas2Image.saveAsPNG(canvas);
                $(".response").append(canvas);
            });
        }