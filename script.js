var n = 3; // Número de mapas

// Cambia el mapa que se muestra
function cambiarmapa(e) {
  var mapaseleccionado = e.target.getAttribute("data-map");
  for (var i = 1; i <= n; ++i) {
    document.querySelector("#mapas_container #mapas .mapa[data-map=\""+i+"\"]").style.opacity = (mapaseleccionado == i ? 1 : 0);
    document.querySelector("#mapas_container #mapas .mapa[data-map=\""+i+"\"]").style.zIndex = (mapaseleccionado == i ? 99 : 0);

    var mapacontainer = document.querySelector("#mapas_container #selector_mapas .selector_mapa[data-map=\""+i+"\"]");
    if (mapaseleccionado == i) {
      mapacontainer.classList.add("active");
    } else {
      mapacontainer.classList.remove("active");
    }
  }
}

// Cambia la pestaña que se muestra
function cambiartab(e) {
  var tabseleccionada = e.target.getAttribute("data-tab");
  document.querySelectorAll(".tab").forEach(el => {
    if (el.getAttribute("data-tab") == tabseleccionada) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });

  document.querySelectorAll(".tab_content").forEach(el => {
    if (el.getAttribute("data-tab") == tabseleccionada) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

// Abre el diálogo con la información del spietzenkandidat
function openModal(e) {
  var person = this.getAttribute("data-person");
  document.querySelector(".modal[data-person=\""+person+"\"]").showModal();
}

// Cierra el diálogo
function closeModal(e) {
  this.parentNode.close();
}

// Código que se ejecuta cuando se carga la página (justo cuando el DOM está listo)
document.addEventListener("DOMContentLoaded", function() {
  // Registramos todos los botones:
  for (var i = 1; i <= n; ++i) {
    document.querySelector(".selector_mapa[data-map=\""+i+"\"]").addEventListener("click", cambiarmapa);
  }

  document.querySelectorAll(".tab").forEach(el => {
    el.addEventListener("click", cambiartab);
  });

  document.querySelectorAll(".person_container, #fonts").forEach(el => {
    el.addEventListener("click", openModal);
  });

  document.querySelectorAll(".modal .close").forEach(el => {
    el.addEventListener("click", closeModal);
  });

  // Registramos los <dialog> con el Polyfill por si algún navegador no los soporta
  document.querySelectorAll("dialog").forEach(el => {
    dialogPolyfill.registerDialog(el);
  });
});
