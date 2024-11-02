//?Array Filtering and Mapping

const people = [
    { name: 'John', age: 25, gender: 'male' },
    { name: 'Jane', age: 22, gender: 'female' },
    { name: 'Mike', age: 30, gender: 'male' },
    { name: 'Rohit', age: 40, gender: 'male' }
  ];
  
  const maleNames = people
    .filter(person => person.gender === 'male')
    .map(person => person.name);
  
  console.log(maleNames);
  