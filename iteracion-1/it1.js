// 1.1 Añade un botón a tu html con el id btnToClick
// y en tu javascript añade el evento click que ejecute un console log
// con la información del evento del click
let btnClick = document.querySelector("#btnToClick");
btnClick.addEventListener("click", function(event) {
    console.log(event);
})