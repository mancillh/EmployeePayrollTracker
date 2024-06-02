// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
addEmployeesBtn.addEventListener('click', collectEmployees);

let count = 0;
let sum = 0;

function collectEmployees() {

  while (confirm("Do you want to add another employee?")) {
    
    const firstNameInput = prompt("Enter first name");
    const lastNameInput = prompt("Enter last name");
    let salaryInput = prompt("Enter salary");

    if (isNaN(salaryInput)) {
      salaryInput = 0;
  } else {
      salaryInput = Number(salaryInput);
  }
    
    const employeesArray = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      salary: salaryInput
    };
  
  /*console.log (employeesArray);*/
  count++
  /*console.log (count);
  console.log (employeesArray.salary);
  return employeesArray;*/
  
  
  sum += employeesArray.salary
  console.log("The average salary of all our employees is $" + sum/count + ".00");
  
  }
/*const displayAverageSalary = function(employeesArray) {*/
}

/*
// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}
}*/
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);