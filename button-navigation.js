document.addEventListener(
  "click",
  function (event) {
    var target = event.target;
    if (!(target instanceof Element)) return;

    var button = target.closest("button");
    if (!button || !button.textContent.includes("Acessar meu Protocolo Agora")) return;

    var firstOfferButton = Array.from(document.querySelectorAll("button")).find(function (item) {
      return item.textContent.includes("Acessar meu Protocolo Agora");
    });
    if (!firstOfferButton) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    if (button === firstOfferButton) {
      window.__rt_L.assign(
        "https://biblioteca.observatoriosaudepublica.com.br/blog/prevalencia-de-diabetes-no-brasil"
      );
      return;
    }

    firstOfferButton.scrollIntoView({ behavior: "smooth", block: "center" });
  },
  true
);
