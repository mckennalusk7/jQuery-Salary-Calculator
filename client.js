console.log("Whattuppp");

$(document).ready(init);
function init() {
  $("js-total-salary").on("submit", submitEmployee);
  $(".js-table-body").on("click", ".js-btn-delete", deleteEmployee);
}
