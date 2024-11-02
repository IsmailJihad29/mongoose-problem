//?Sorting Objects

const cars = [
    { make: 'Toyota', model: 'Corolla', year: 2010 },
    { make: 'Honda', model: 'Civic', year: 2008 },
    { make: 'Tesla', model: 'Tesla', year: 2024 }
  ];
  
  cars.sort((a, b) => a.year - b.year);
  
  console.log(cars);
  