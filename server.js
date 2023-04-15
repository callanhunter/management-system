const inquirer = require("inquirer");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;

// Connect to the database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "management_db",
  },
  console.log(`Connected to the management_db database.`)
);

// adds the starting question prompt
function initialChoices() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add a Role",
        "View All Departments",
      ],
    })
    // depending on how the user responds, this will take them to the choice they made
    .then(({ action }) => {
      switch (action) {
        case "View all Employees":
          viewEmployees();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Update Employee Role":
          updateEmployeeRole();
          break;
        case "View All Roles":
          viewRoles();
          break;
        case "Add a Role":
          addRole();
          break;
        case "View All Departments":
          viewDepartments();
          break;
      }
    });
  function viewEmployees() {
    console.log("Viewing all employees");
    let query = "SELECT * FROM employee";
    db.query(query, (err, row) => {
      if (err) throw err;
      console.table(row);
      initialChoices();
    });
  }
  function viewDepartments() {
    console.log("Viewing all departments");
    let query = "SELECT * FROM department;";
    db.query(query, (err, row) => {
      if (err) throw err;
      console.table(row);
      initialChoices();
    });
  }
}
