const direccionPedidoToggle = document.getElementById("checkBoxPedido");
const direccionPedidoLabel = document.getElementById("labelDireccionPedido");
const direccionPedidoInput = document.getElementById("inputDireccionPedido");
const datePedidoInput = document.getElementById("datePedido");

document.addEventListener("DOMContentLoaded", () => onDOMContentLoaded());

direccionPedidoToggle.addEventListener("change", () => {
  showDireccionPedido(direccionPedidoToggle.checked);
});

const onDOMContentLoaded = () => {
  showDireccionPedido();

  getCurrentDate();
};

const showDireccionPedido = (checked = false) => {
  direccionPedidoInput.style.display = checked ? "block" : "none";
  direccionPedidoLabel.style.display = checked ? "block" : "none";
};

const getCurrentDate = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = (today.getMonth() + 1).toString().padStart(2, "0");
  const currentDay = today.getDate().toString().padStart(2, "0");
  const currentDateFormatted = `${currentYear}-${currentMonth}-${currentDay}`;

  setDatePedidoInputValues(currentDateFormatted);
};

const setDatePedidoInputValues = (currentDate) => {
  datePedidoInput.value = currentDate;
  datePedidoInput.min = currentDate;
};
