const inquirer = require('inquirer');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3306;
const connection = require('./config/connection');

function init() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Please select one command from the following:",
                name: "command",
                choices: [
                    "View departments.",
                    "View roles.",
                    "View all employees.",
                    "Add a new department.",
                    "Add a new role",
                    "Add an employee.",
                    "Update an employee role.",
                    "Exit."  
                ]
            }
        ])
        .then( async(answers) => {
            const { command } = answers;

            if (command === "View departments.") {
                viewAllDept();

            } else if (command === "View roles.") {
                viewAllRoles();

            } else if (command === "View all employees.") {
                viewAllEmp();

            } else if (command === "Add a new department.") {
                addDept();

            } else if (command === "Add a new role") {
                addRole();

            } else if (command === "Add an employee.") {
                 addEmp();
            } else if (command === "Update an employee role.") {
                 updateEmp();

            } else if (command === "Exit.") {
                console.log("Exiting program...Goodbye!");
                process.exit();

            } 
        })
};



    
        

init();