const getTotalBalanceByGender = (users, gender) =>
  users
    .filter(user => user.gender === gender)
    .reduce((total, user) => total + user.balance, 0);

// Приклад   
 використання:
const users = [
  { name: '', gender: '', balance: 1000 },
  { name: '', gender: '', balance: 1500 },
  { name: '', gender: '', balance: 800 }
];

const totalMaleBalance = getTotalBalanceByGender(users, 'male');
console.log('Загальний баланс чоловіків:', totalMaleBalance); // Виведе: Загальний баланс чоловіків: 1800

const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863