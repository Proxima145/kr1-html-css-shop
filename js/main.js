const deliveryDialog = document.querySelector("#delivery");

document.querySelectorAll("[data-dialog-open]").forEach((button) => {
  button.addEventListener("click", () => {
    deliveryDialog.showModal();
  });
});
