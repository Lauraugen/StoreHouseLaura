(function () { //Para que se ejecute una vez en carga

    //Formulario AddTienda
    let formAddTienda = document.getElementById('fValidAddTienda');
    let validoCif;
    let validoName;
    let validoAddress;
    let validoPhone;
    let validoCoords;
    let validoPhotos;
    let iCif;
    let iName;
    let iAddress;
    let iPhone;
    let iCoords;
    let iPhotos;

    formAddTienda.addEventListener('input', function (event) {
        // event.preventDefault();
        validoCif = false;
        validoName = false;
        validoAddress = false;
        validoPhone = false;
        validoCoords = false;
        validoPhotos = false;
        iCif = document.getElementById('iCif');
        iName = document.getElementById('iName');
        iAddress = document.getElementById('iAddress');
        iPhone = document.getElementById('iPhone');
        iCoords = document.getElementById('iCoords');
        iPhotos = document.getElementById('iPhotos');
        validarEntradas()

    })

    formAddTienda.addEventListener('submit', function (event) {
        if ((!validoCif) || (!validoName) || (!validoAddress) || (!validoPhone) || (!validoCoords) || (!validoPhotos)) {
            event.preventDefault(); //No deja lanzar el evento submit si es false
        }
    })

    function validarEntradas() {
        let valorCif = iCif.value;
        let valorName = iName.value;
        let valorAddress = iAddress.value;
        let valorPhone = iPhone.value;
        let valorCoords = iCoords.value;

        if (!valorCif) {
            mensajeError(iCif, 'El Cif está vacío');
            validoCif = false;
        } else if (!(/([a-z]|[A-Z]|[0-9])[0-9]{7}([a-z]|[A-Z]|[0-9])/g.test(valorCif))) {
            //B25165028 ej Cif
            mensajeError(iCif, 'El Cif no es correcto');
            validoCif = false;
        } else {
            mensajeCorrecto(iCif, 'Correcto');
            validoCif = true;
        }

        if (!valorName) {
            mensajeError(iName, 'El Nombre está vacío');
            validoName = false;
        } else {
            mensajeCorrecto(iName, 'Correcto');
            validoName = true;
        }
        if (!valorAddress) {
            mensajeError(iAddress, 'La dirección está vacía');
            validoAddress = false;
        } else {
            mensajeCorrecto(iAddress, 'Correcto');
            validoAddress = true;
        }
        if (!valorPhone) {
            mensajeError(iPhone, 'El teléfono está vacío');
            validoPhone = false;
        } else {
            mensajeCorrecto(iPhone, 'Correcto');
            validoPhone = true;
        }

        if (!valorCoords) {
            mensajeError(iCoords, 'El teléfono está vacío');
            validoCoords = false;
        } else {
            mensajeCorrecto(iCoords, 'Correcto');
            validoCoords = true;
        }
    }



    function mensajeError(input, mensaje) {
        let contenedorInput = input.parentElement; //Recoge el contenedor del input
        let msg = contenedorInput.querySelector('.msg');
        msg.innerText = mensaje;
        input.classList.add('invalido');
        input.classList.remove('valido');
    }

    function mensajeCorrecto(input, mensaje) {
        let contenedorInput = input.parentElement; //Recoge el contenedor del input
        let msg = contenedorInput.querySelector('.msg');
        msg.innerText = mensaje;
        input.classList.add('valido');
        input.classList.remove('invalido');
    }





})();