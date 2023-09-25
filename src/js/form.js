const dadosUsuario = document.querySelectorAll(".dados");
const botaoForm = document.querySelector(".botao");

dadosUsuario.forEach(input => {
  input.addEventListener("input", () => {
    if (input.value) {
      input.classList.add("aceito");
      input.classList.remove("recusado");
      input.nextElementSibling.classList.add("alertaOff");
    } else {
      input.classList.remove("aceito");
      input.classList.add("recusado");
      input.nextElementSibling.classList.remove("alertaOff");
    }
  });
});

botaoForm.addEventListener("click", (event) => {
  event.preventDefault();

  dadosUsuario.forEach((input) => {
    if (input.value) {
      input.classList.add("aceito");
      input.classList.remove("recusado");
      input.nextElementSibling.classList.add("alertaOff");
    } else {
      input.classList.remove("aceito");
      input.classList.add("recusado");
      input.nextElementSibling.classList.remove("alertaOff");
    }
  });
});
