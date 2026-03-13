document.addEventListener("DOMContentLoaded", () => {

    /* ==================================================
       NAVBAR COM SOMBRA AO ROLAR A PÁGINA
    ================================================== */
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("shadow-sm");
        } else {
            navbar.classList.remove("shadow-sm");
        }
    });

    /* ==================================================
       BOTÃO VOLTAR AO TOPO
    ================================================== */
    const btnTop = document.querySelector(".btn-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btnTop.style.display = "flex";
        } else {
            btnTop.style.display = "none";
        }
    });

    btnTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    /* ==================================================
       FEEDBACK SIMPLES NO FORMULÁRIO
       (visual, sem backend)
    ================================================== */
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Mensagem enviada com sucesso! Entraremos em contato 😊");
            form.reset();
        });
    }

});

(function () {
  emailjs.init("1NGXmu5Huu-MuKs9V");
})();

document.getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.send("service_gmail", "template_ak9u0xq", {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      service: document.getElementById("service").value,
      message: document.getElementById("message").value,
    })
    .then(function () {
      alert("Mensagem enviada com sucesso!");
      document.getElementById("contact-form").reset();
    })
    .catch(function (error) {
      alert("Erro ao enviar mensagem");
      console.log(error);
    });
  });
