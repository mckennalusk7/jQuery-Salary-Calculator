console.log("Whattuppp");

const employee = [];

$(document).ready(init);
function init() {
  $(".js-form-employee").on("submit", submitEmployee);
  $(".js-table-body").on("click", ".js-btn-delete", deleteEmployee);
}

function deleteEmployee(event) {
  console.log("DELETE:", event);
  console.log("DELETE:", this);

  const employeeIndex = $(this).data("index");
  console.log("DELETE:", employeeIndex);
  employee.splice(employeeIndex, 1);

  render();
}

function submitEmployee(event) {
  event.preventDefault();

  const submitEmployee = {
    employeeFirstName: $("#js-input-firstName").val(),
    employeeLastName: $("#js-input-lastName").val(),
    employeeID: $("#js-input-id").val(),
    employeeTitle: $("#js-input-title").val(),
    employeeAnnualSalary: parseFloat($("#js-input-annualSalary").val()),
  };
  employee.push(submitEmployee);
  $("#js-input-firstName").val("");
  $("#js-input-lastName").val("");
  $("#js-input-id").val("");
  $("#js-input-title").val("");
  $("#js-input-annualSalary").val("");
  console.log("employee added!:", submitEmployee);
  render();
}

function render() {
  $(".js-table-body").empty();
  let totalSalary = 0;

  for (let i = 0; i < employee.length; i++) {
    let employeeInput = employee[i];
    // find total salary
    totalSalary += employeeInput.employeeAnnualSalary;

    $(".js-table-body").append(`
<tr>
  <td>${employeeInput.employeeFirstName}</td>
  <td>${employeeInput.employeeLastName}</td>
  <td>${employeeInput.employeeID}</td>
  <td>${employeeInput.employeeTitle}</td>
  <td>${employeeInput.employeeAnnualSalary}</td>
  <td><button class="js-btn-delete" data-index="${i}">Delete</button></td>
</tr>
`);
  }

  //  divide annual by 12, to get monthly
  totalSalary /= 12;
  totalSalary = totalSalary.toFixed(2);

  $(".js-total-salary").text(`$${totalSalary}`);
}
