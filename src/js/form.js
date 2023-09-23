const dadosUsuario = document.querySelectorAll(".dados");
const botaoForm = document.querySelector(".btn-enviar");
const alertaForm = document.querySelectorAll(".alertaOn");

botaoForm.addEventListener("click", (event) => {
  event.preventDefault();

  dadosUsuario.forEach((input) => {
    if (input.value) {
      input.classList.add("aceito");
      input.classList.remove("recusado");
      input.nextElementSibling.classList.add("alertaOff");
    } else {
      input.classList.remove("recusado");
      input.classList.add("aceito");
      input.nextElementSibling.classList.remove("alertaOff");
    }
  });
});
