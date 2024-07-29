function calculateSalary(employee) {
  const salary = employee.hoursWorked * employee.payPerHour;

  const report = `
        Name: ${employee.name}
        Hours_Worked: ${employee.hoursWorked}
        Pay_Per_Hour: ${employee.payPerHour}
        Total_Salary: ${salary}
    `;

  console.log(report);

  return salary;
}

//la funcion tiene 2 responsabilidades, se debe refactorizar en dos funciones y en dos archivos distintos de ser posible o necesario

//asi seria mejor:

function calculateSalary(employee) {
  const salary = employee.hoursWorked * employee.payPerHour;
}

function generateReport(employee, salary) {
  const report = `
    Name: ${employee.name}
    Hours_Worked: ${employee.hoursWorked}
    Pay_Per_Hour: ${employee.payPerHour}
    Total_Salary: ${salary}
`;

  console.log(report);
}

const salary = calculateSalary(employee);

generateReport(employee, salary);

//de esta manera cada funcion cumple solo una tarea, loq ue la hace mas sencilla de leer y mantener.
