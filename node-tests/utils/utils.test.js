const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
  var res = utils.square(8);

  expect(res).toBe(64).toBeA('number');
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(11);
//   // expect({name: 'Krzysztof'}).toEqual({name: 'Krzysztof'});
//   // expect([2,3,4]).toInclude(3);
//   expect({
//     name: 'Krzysztof',
//     age: 22,
//     location: 'Szczecin'
//   }).toInclude({
//     age: 22
//   });
// });

it('should verify first and last names are set', () => {
  var user = {
    age: 22,
    location: 'Szczecin'
  };
  var res = utils.setName(user, 'Krzysztof Michalski');

  expect(res).toBeA('object').toEqual(user).toInclude({
    firstName: 'Krzysztof',
    lastName: 'Michalski'
  });
});
