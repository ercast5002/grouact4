//alert("Hola este es mi Javascript");
let nombre = "Marta";
const nombre1 = "Ermes";
var nombre2  = "Castro";

console.log(nombre);
console.log(nombre1);
console.log(nombre2);

document.addEventListener("DOMContentLoaded", function () {
    let menus = document.querySelectorAll(".menu");

    menus.forEach(menu => {
        menu.addEventListener("mouseover", function () {
            let submenu = menu.querySelector(".submenu");
            if (submenu) {
                submenu.style.display = "block";
            }
        });

        menu.addEventListener("mouseleave", function () {
            let submenu = menu.querySelector(".submenu");
            if (submenu) {
                submenu.style.display = "none";
            }
        });
    });
});

