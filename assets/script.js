// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

function collectEmployees() {

  const employeesArray = [];

  let start = true

  while (start) {

    const firstNameInput = prompt("Enter first name");
    const lastNameInput = prompt("Enter last name");
    const salaryInput = prompt("Enter salary");

    if (isNaN(salaryInput)) {
      salaryInput = 0;
    } 

    const employeeInfo = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      salary: parseInt(salaryInput)
    };

    employeesArray.push(employeeInfo);

    start = confirm("Do you want to add another employee?")
  }

  
  return employeesArray;
}

const displayAverageSalary = function (employeesArray) {
  // we need to loop through the array. add up the salaries of all the employess then divide by the total amount of employees

  let total = 0;

  for (i = 0; i < employeesArray.length; i++) {
    total += employeesArray[i].salary
  }

  const average = total/employeesArray.length
  console.log("The average salary of our employees is $" + average + ".00");
}


const getRandomEmployee = function (employeesArray) {
  let computerChoiceNum = employeesArray[Math.floor(Math.random() * employeesArray.length)];
 
  console.log(`Congratulations to ${computerChoiceNum.firstName} ${computerChoiceNum.lastName} our random drawing winner!`);
}


/*let computerChoiceName = ${secondArray[computerChoiceNum]};
//need two arrays, one called employeesArray that returns first name, last name, and salary//
//second array, accumulated list of employees to go with computerChoice//

let secondArray = [];
let i = 0;

while (i >= 0) {
myArray.push(i);
}
};

/*

}*/

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