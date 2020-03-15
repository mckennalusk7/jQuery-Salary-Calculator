console.log("Whattuppp");

$(document).ready(init);
function init() {
  $("js-total-salary").on("submit", submitEmployee);
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
  console.log("submit:", event);
  event.preventDefault();
  console.log("employee added!");

  const submitEmployee = {
    employeeFirstName: $(".js-input-firstName").val(),
    employeeLastName: $(".js-input-lastName").val(),
    employeeID: $(".js-input-ID").val(),
    employeeTitle: $(".js-input-Title").val(),
    employeeAnnualSalary: parseFloat($(".js-input-annualSalary").val())
  };
  employee.push(employeeName);
  console.log("EMPLOYEES:", employee);
  render();
}

function render() {
  $(".js-table-body").empty();
  let totalSalary = 0;

  for (let i = 0; i < employee.length; i++) {
    const employeeInput = salary[i];
    // find total salary
    totalSalary +=
      employeeInput.employeeAnnualSalary * employeeInput.totalSalary;

    $(".js-table-body").append(`
<tr>
  <td>${employeeInput.employeeFirstName}</td>
  <td>${employeeInput.employeeLastName}</td>
  <td>${employeeInput.employeeID}</td>
  <td>${employeeInput.employeeTitle}</td>
  <td>${employeeInput.employeeAnnualSalary}</td>
  <td><button class= ".js-btn-delete" data-index="${i}">Delete</button></td>
</tr>
`);
  }
  $("js-total-salary").text(`$${totalSalary}`);
}
