// packages
const inquirer = require('inquirer')
const fs = require('fs')

const Employee = require('./lib/employee');
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer")
const Manager = require('./lib/manager')

var leader = "";
var team = [];

var html1 = 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css
    ">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>
<body>
  <section>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">

`
function createManager(response) {
    return `
    <div class="card manager-card">
    <div class="card-header">
        <h2 class="card-title"></h2>
        <h3 class="card-title bg-primary text-white">Manager: <br> ${response.name} </h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: <strong> ${response.id} </strong></li>
            <li class="list-group-item">Email: <strong><a href = ${response.email}>${response.email} </a> </strong></li>
            <li class="list-group-item">Office number: <strong> ${response.officeNumber} </strong></li>
        </ul>
    </div>
</div>
    `
}

function createIntern(response) { 
    return `
    <div class="card intern-card">
    <div class="card-header">
        <h2 class="card-title"></h2>
        <h3 class="card-title bg-primary text-white">Intern: <br> ${response.name} </h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: <strong>${response.id}</strong></li>
            <li class="list-group-item">Email: <strong><a href = ${response.email}>${response.email} </a></strong></li>
            <li class="list-group-item">School: <strong> ${response.school} </strong></li>
        </ul>
    </div>
</div>
    `
}

function createEngineer(response) {
    return `
    <div class="card engineer-card">
    <div class="card-header">
        <h2 class="card-title"></h2>
        <h3 class="card-title bg-primary text-white">Engineer: <br>${response.name} </h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: <strong>${response.id}</strong></li>
            <li class="list-group-item">Email: <strong><a href = ${response.email}>${response.email} </a></strong></li>
            <li class="list-group-item">GitHub: <strong><a href = ${response.github}>${response.github}</a></strong></li>
        </ul>
    </div>   
</div>
    
    `
}



var html2 = 
`
</div>
</section>  
  
</body>
</html>

`

console.log("Welcome to team generator! Enter teams info");

function getManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "what is the manager name?",
            name: "name"
        },
        {
            type: "input",
            message: "what is the manager id?",
            name: "id" 
        },
        {
            type: "input",
            message: "what is the manager email?",
            name: "email"
        },
        {
            type: "input",
            message: "what is the manager office number?",
            name: "officeNumber"
        }
    ]).then((response) => {
        let manager = new Manager(response.name, response.id, response.email, response.officeNumber)
        leader = response.name
        let managerHtml = createManager(response)
        html1 += managerHtml
        team.push(manager)
        console.log(response);
        nextTeamMember()
    })
}

getManager()

function nextTeamMember() {
    inquirer.prompt({
        name: "choice",
        type: "list",
        message: "would you like to add another team member?",
        choices: ['yes', 'no' ] 
    }).then((response) => {
        if (response.choice === "yes") {
            morePpl()
        } else {
            generateHtml(response)
        }
    })
}

function morePpl() {
    inquirer.prompt({
        name: "choice",
        type: "list",
        message: "would you like to add engineer or intern?",
        choices: ["engineer", "intern"]
    }).then((response) => {
        if (response.choice === "engineer") {
            getEngineer()
        } else {
            getIntern()
        }
    })
}




function getIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "what is the interns name?",
            name: "name"
        },
        {
            type: "input",
            message: "what is the interns id?",
            name: "id" 
        },
        {
            type: "input",
            message: "what is the interns email?",
            name: "email"
        },
        {
            type: "input",
            message: "what school the intern go to?",
            name: "school"
        }
    ]).then((response) => {
        let intern = new Intern(response.name, response.id, response.email, response.school)
        leader = response.name
        let internHtml = createIntern(response)
        html1 += internHtml
        team.push(intern)
        console.log(response);
        generateHtml(response)
    })
}

function getEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "what is the engineers name?",
            name: "name"
        },
        {
            type: "input",
            message: "what is the engineers id?",
            name: "id" 
        },
        {
            type: "input",
            message: "what is the engineers email?",
            name: "email"
        },
        {
            type: "input",
            message: "what is the engineers github?",
            name: "github"
        }
    ]).then((response) => {
        let engineer = new Engineer(response.name, response.id, response.email, response.github)
        leader = response.name
        let engineerHtml = createEngineer(response)
        html1 += engineerHtml
        team.push(engineer)
        console.log(response);
        generateHtml(response)
        morePpl(
            
        )
    })

}

function generateHtml(response) {
    fs.writeFile("index.html", html1 + html2, error => {
        if(error) {
            console.log(error);
        } else {
            console.log("HTML file successfully generated!");
        }
    })
}

