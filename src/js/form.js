const dadosUsuario = document.querySelectorAll(".dados");
const botaoForm = document.getElementById("botao-enviar");
const botaoLimpar = document.getElementById("botao-limpar")

/* DEIXA OS INPUTS NA COR VERDE AO DIGITAR */
// dadosUsuario.forEach(input => {
//   input.addEventListener("input", () => {
//     if (input.value) {
//       input.classList.add("aceito");
//       input.classList.remove("recusado");
//       input.nextElementSibling.classList.add("alertaOff");
//     } else {
//       input.classList.remove("aceito");
//       input.classList.add("recusado");
//       input.nextElementSibling.classList.remove("alertaOff");
//     }
//   });
// });

/* DEIXA O FORM VERDE, DEPOIS DE ENVIAR OS DADOS CORRETAMENTE */
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

/* EXECUTA A LIMPEZA DOS INPUTS APÓS O CLIQUE NO BOTÃO LIMPAR */
botaoLimpar.addEventListener("click", () => {
  dadosUsuario.forEach((input) => {
    input.classList.contains("aceito") && input.classList.remove("aceito")
    input.classList.contains("recusado") && input.classList.remove("recusado")
    input.nextElementSibling.classList.contains("alertaOff") || input.nextElementSibling.classList.add("alertaOff")
  })
})
