// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
/*addEmployeesBtn.onclick = function() {
  const employeesArray = collectEmployees();
}*/

// Collect employee data
function collectEmployees() {
  const employeesArray=[]
  
  while (true) {
    const firstNameInput = prompt ("Enter first name");
    if (firstNameInput === null) break;
    const lastNameInput = prompt ("Enter last name");
    if (lastNameInput === null) break;
    let salaryInput = prompt ("Enter salary");
    if (salaryInput === null) break;

    if (isNaN(salaryInput)) {
      salaryInput = 0;
    } else {
    salaryInput = parseFloat(salaryInput);
    }

    const employee = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      salary: salaryInput
    };
  employeesArray.push(employee);

  // Asks user if they want to add another employee
  addEmployee = confirm("Do you want to add another employee?");

}

return employeesArray;
  
}
  // TODO: Get user input to create and return an array of employee objects
  
  
  /*while(let i = 0; i < 3; i++) {
    const response = prompt(employeesArray[i]);
    userResponses[employeesArray[i]] = response;
  }

  
};

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
 sum (employeesArray[2])/employeesArray.length
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const index = Math.floor(Math.random() * .length);
  const computerChoice = [0] + [1];
}

window.alert("The randomly selected employee is " + computerChoice)
*/
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
