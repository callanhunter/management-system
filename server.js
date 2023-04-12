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
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: ["View all Employees", "Add Employee", "Update Employee Role"],
  });
}
