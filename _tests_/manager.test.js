const manager = require("../lib/manager")

test('Manager class has correct properties and methods', () => {
    const manager = new Manager('mike', 3, 'mike@email.com', 123);
    
    expect(manager.name).toEqual('mike');
    expect(manager.id).toEqual(3);
    expect(manager.email).toEqual('mike@email.com');
    expect(manager.officeNumber).toEqual(123);
    expect(manager.getOfficeNumber()).toEqual(123);
    expect(manager.getRole()).toEqual('manager');
  });
  