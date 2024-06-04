// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

//This function prompts the user for information and returns an array
function collectEmployees() {

  // begin with an empty array
  const employeesArray = [];

  // simple boolean to begin access to the while loop when the site first loads
  let start = true

  // while the user has indicated they want to add an employee...
  while (start) {

    const firstNameInput = prompt("Enter first name");
    const lastNameInput = prompt("Enter last name");
    const salaryInput = prompt("Enter salary");

    // if the salary is not input as a number, enter 0
    if (isNaN(salaryInput)) {
      salaryInput = 0;
    } 

    const employeeInfo = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      salary: parseInt(salaryInput) //parseInt converts a string number into an integer
    };
    
    // pushes the values from the employeeInfo object into an array called employeesArray
    employeesArray.push(employeeInfo);

    // prompts the user to add another employee. If yes, while loop restarts. If not, exit loop
    start = confirm("Do you want to add another employee?")
  }
  // returns an employeeArray, each index is an employee with three properties (first name, last name, salary)
  return employeesArray;
}

//Displays Average Salary
const displayAverageSalary = function (employeesArray) {

  let total = 0;

  // this for loop provides the sum of all employees' salaries
  for (i = 0; i < employeesArray.length; i++) {
    total += employeesArray[i].salary
  }

  // to get the average, divide the sum of the salaries from above by the number of employees entered
  const average = total/employeesArray.length

  // this logs the average salary in the console
  console.log("The average salary of our employees is $" + average + ".00");
}

// Chooses Random Employee
  const getRandomEmployee = function (employeesArray) {
  // computer chooses a number between 0 and the length of the array which is how many employees have been added
  let computerChoice = employeesArray[Math.floor(Math.random() * employeesArray.length)];
  // this logs the randomly selected employee into the console and also associates the number randomly chosen by the computer with an employee's name
  console.log(`Congratulations to ${computerChoice.firstName} ${computerChoice.lastName} our random drawing winner!`);
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
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