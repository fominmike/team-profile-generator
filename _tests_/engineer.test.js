const engineer = require ("../lib/engineer")

test('Engineer class has correct properties and methods', () => {
    const engineer = new Engineer('mike', 1, 'mike@email.com', 'mike');
    
    expect(engineer.name).toEqual('mike');
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toEqual('mike@email.com');
    expect(engineer.github).toEqual('mike');
    expect(engineer.getGithub()).toEqual('mike');
    expect(engineer.getRole()).toEqual('Engineer');
  });