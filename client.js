console.log("Whattuppp");

$(document).ready(init);
function init() {
  $("js-total-salary").on("submit", submitEmployee);
  //   $(".js-table-body").on("click", ".js-btn-delete", deleteEmployee);
}

function submitEmployee(event) {
  console.log("submit:", event);
  event.preventDefault();
  console.log("employee added!");

  const submitEmployee = {
    employeeFirstName: $(".js-input-firstName").val(),
    employeeLastName: $(".js-input-lastName").val(),
    employeeID: $(".js-input-ID").val(),
    employeeTitle: $(".js-input-Title").val(),
    employeeAnnualSalary: $(".js-input-annualSalary").val()
  };
  employee.push(employeeName);
  console.log("EMPLOYEES:", employee);
}
