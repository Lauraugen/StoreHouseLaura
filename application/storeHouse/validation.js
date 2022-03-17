// "use strict";

// (function () { //Para que se ejecute una sola vez en carga

//     let formAddStore = document.forms.formAddTienda; //Recogemos el name del formulario
//     $(formAddStore).removeAttr('novalidate'); //Eliminamos elemento novalidate del form

//     formAddStore.iCif.addEventListener('invalid', function () {
//         this.setCustomValidity('El Cif no es Valido');
//     })

//     formAddStore.iCif.addEventListener('change', function () {
//         this.setCustomValidity('');
//     })

//     formAddStore.iName.addEventListener('invalid', function () {
//         this.setCustomValidity('El Nombre no es Valido');
//     })

//     formAddStore.iName.addEventListener('change', function () {
//         this.setCustomValidity('');
//     })

//     formAddStore.iAddress.addEventListener('invalid', function () {
//         this.setCustomValidity('La dirección no es Valida');
//     })

//     formAddStore.iAddress.addEventListener('change', function () {
//         this.setCustomValidity('');
//     })

//     formAddStore.iPhone.addEventListener('invalid', function () {
//         this.setCustomValidity('El teléfono no es Valido');
//     })

//     formAddStore.iPhone.addEventListener('change', function () {
//         this.setCustomValidity('');
//     })

//     formAddStore.iCoords.addEventListener('invalid', function () {
//         this.setCustomValidity('Las coordenadas no son Validas');
//     })

//     formAddStore.iCoords.addEventListener('change', function () {
//         this.setCustomValidity('');
//     })

//     formAddStore.iPhotos.addEventListener('invalid', function () {
//         this.setCustomValidity('Las fotos no son Validas');
//     })

//     formAddStore.iPhotos.addEventListener('change', function () {
//         this.setCustomValidity('');
//     })


//     $('#fValidAddTienda').submit(function (event) {
//         let isValid = true;
//         let firstInvalidElement = null;



//         if (!this.iCif.checkValidity()) {
//             isValid = false;
//             showFeedback($(this.iCif), false,);
//             firstInvalidElement = this.iCif;
//         } else {
//             showFeedback($(this.iCif), true,);
//         }

//         //Siempre lo último a comprobar
//         if (!isValid) {
//             event.preventDefault(); //Prevenimos que los datos se guarden
//             event.stopPropagation();
//             firstInvalidElement.focus(); //El elemento erroneo se 'selecciona'
//         }
//     });

//     function defaultCheckElement(event) {
//         this.value = this.value.trim();
//         if (!this.checkValidity()) {
//             showFeedBack($(this), false);
//         } else {
//             showFeedBack($(this), true);
//         }
//     }



//     function showFeedback(input, valid, message) { //Para mostrar el mensaje de error (testeando)
//         let validClass;
//         if (valid) {
//             validClass = "is-valid";
//         } else if (!valid) {
//             validClass = "is-invalid";
//         }
//         let div;
//         if (valid) {
//             input.nextAll(`div.valid-feedback`);
//         } else if (!valid) {
//             input.nextAll(`div.invalid-feedback`);
//         }
//         //input.nextAll(`div`).removeClass('d-block');
//         input.removeClass('is-valid is-invalid').addClass(validClass);

//         if (message) {
//             div.empty();
//             div.append(message);
//         }
//     }

//     $(formAddStore.iCif).change(defaultCheckElement);

//     formAddStore.iCif.addEventListener('beforeinput', function (event) {
//         let isValid = true;
//         if (event.data) {
//             if (!(/([a-z]|[A-Z]|[0-9])[0-9]{7}([a-z]|[A-Z]|[0-9])/g.test(event.data))) {
//                 isValid = false;
//             }


//         }

//         if (!isValid) {
//             event.preventDefault();
//         }
//     })
// })();




(function () {




    let form = document.forms.formAddTienda;

    form.iCif.addEventListener('invalid', function () {
        this.setCustomValidity('El Cif no es Valido');
    })

    form.iCif.addEventListener('change', function () {
        this.setCustomValidity('');
    })

    form.iName.addEventListener('invalid', function () {
        this.setCustomValidity('El nombre es obligatorio.');
    });
    form.iName.addEventListener('change', function () {
        this.setCustomValidity('');
    });

    // form.vfFile.addEventListener('change', function(){
    // 	this.setCustomValidity('');
    // 	if (!checkFileExtension(this.files[0], ['jpg','png','gif'])){
    // 		this.setCustomValidity('Debe seleccionar un archivo con extensión jpg, png o gif.');
    // 	}
    // 	let size = 10;
    // 	if (checkFileSize(this.files[0], size)){
    // 		this.setCustomValidity(`"El archivo ${this.files[0].name} no debe ser mayor a ${size}KB"`);
    // 	}
    // });


    // function checkFileExtension(file, allowedExtensions) {
    //     let fileExtension = file.name.split('.').pop().toLowerCase();
    //     return allowedExtensions.some((extension) => {
    //         return extension === fileExtension
    //     });
    // }
    // function checkFileSize(file, size) {
    //     return (file.size > size * 1024);
    // }






    $(form).submit(function (event) {
        let isValid = true;
        let firstInvalidElement = null;
        event.preventDefault();



        if (!this.iName.checkValidity()) {
            isValid = false;
            showFeedBack($(this.iName), false);
            firstInvalidElement = this.iName;
        } else {
            showFeedBack($(this.iName), true);
        }

        if (!this.iCif.checkValidity()) {
            console.log(this.iCif.value);
            if (!(/([a-z]|[A-Z]|[0-9])[0-9]{7}([a-z]|[A-Z]|[0-9])/g.test(this.iCif.value))) {
                isValid = false;
                showFeedBack($(this.iCif), false,);
                firstInvalidElement = this.iCif;
            }

        } else {
            showFeedBack($(this.iCif), true,);
        }

        //Siempre lo último a comprobar
        if (!isValid) {
            event.preventDefault(); //Prevenimos que los datos se guarden
            event.stopPropagation();
            firstInvalidElement.focus(); //El elemento erroneo se 'selecciona'
        }

        if (!isValid) {
            event.preventDefault();
            event.stopPropagation();
            firstInvalidElement.focus();
        }


        form.addEventListener('reset', (function (event) {
            let feedDivs = $(this).find('div.valid-feedback, div.invalid-feedback');
            feedDivs.removeClass('d-block').addClass('d-none');
            let inputs = $(this).find('input');
            inputs.removeClass('is-valid is-invalid');
        }));


        function showFeedBack(input, valid, message) {
            let validClass = (valid) ? 'is-valid' : 'is-invalid';
            let div = (valid) ? input.nextAll("div.valid-feedback") : input.nextAll("div.invalid-feedback");

            input.removeClass('is-valid is-invalid').addClass(validClass);
            if (message) {
                div.empty();
                div.append(message);
            }
        }

        function defaultCheckElement(event) {
            this.value = this.value.trim();
            if (!this.checkValidity()) {
                showFeedBack($(this), false);
            } else {
                showFeedBack($(this), true);
            }
        }

        $(form.iName).change(defaultCheckElement);

        $(form.iCif).change(defaultCheckElement);

        form.iCif.addEventListener('beforeinput', function (event) {
            let isValid = true;
            if (event.data) {
                if (!(/([a-z]|[A-Z]|[0-9])[0-9]{7}([a-z]|[A-Z]|[0-9])/g.test(event.data))) {
                    isValid = false;
                }



            }
            if (!isValid) {
                event.preventDefault();
            }
        })



    });

})();


