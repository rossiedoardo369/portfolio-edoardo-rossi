// Anno corrente nel footer, senza doverlo aggiornare a mano ogni anno
document.querySelectorAll('#year').forEach((el) => {
  el.textContent = new Date().getFullYear();
});
