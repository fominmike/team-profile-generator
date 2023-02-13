const intern = require("../lib/intern")


test('Intern class has correct properties and methods', () => {
  const intern = new Intern('mike', 2, 'mike@email.com', 'University of Davis');
  
  expect(intern.name).toEqual('mike');
  expect(intern.id).toEqual(2);
  expect(intern.email).toEqual('mike@email.com');
  expect(intern.school).toEqual('University of Davis');
  expect(intern.getSchool()).toEqual('University of Davis');
  expect(intern.getRole()).toEqual('Intern');
});
