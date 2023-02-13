const { default: test, it } = require("node:test")
const { describe } = require("yargs")
const Employee = require("../lib/employee")

test('Employee class has correct properties and methods', () => {
    const employee = new Employee('mike', 1, 'mike@email.com');
    
    expect(employee.name).toEqual('mike');
    expect(employee.id).toEqual(1);
    expect(employee.email).toEqual('mike@email.com');
    expect(employee.getName()).toEqual('mike');
    expect(employee.getId()).toEqual(1);
    expect(employee.getEmail()).toEqual('mike@email.com');
    expect(employee.getRole()).toEqual('Employee');
  });