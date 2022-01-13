const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '17/05/2019 9:00 AM',
      isLoggedIn: false
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '17/05/2019 9:30 AM',
      isLoggedIn: true
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '17/05/2019 9:45 AM',
      isLoggedIn: true
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '17/05/2019 9:50 AM',
      isLoggedIn: false
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '17/05/2019 10:00 AM',
      isLoggedIn: false
    }
  ];
  
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [{ userId: 'fg12cy', rate: 5 }, { userId: 'zwf8md', rate: 4.5 }],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ];

  const randomId = () => {
    const numbersLetters = '0123456789abcdefghijklmnopqrstuvwzyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
      ''
    );
    let randId = '';
    let randIndex;
    for (let i = 0; i < 6; i++) {
      randIndex = Math.floor(Math.random() * numbersLetters.length);
      randId += numbersLetters[randIndex];
    }
    return randId;
  };
  ////////////////
  const newUser = {
    _id: randomId(),
    username: 'Asabeneh',
    email: 'asabeneh@asabeneh.com',
    password: '123123123',
    createdAt: new Date(),
    isLoggedIn: false
  };
  const signUp = () => {
    const { email } = newUser;
    for (const user of users) {
      if (user['email'] == email) {
        return 'An email has already exist. Please log in!';
      }
    }
    users.push(newUser);
    return 'You have successfully signed up!';
  };
  console.log(users);
  console.log(signUp(newUser));
  console.log(signUp(newUser));
  console.log(users);
  ///////////////////////////////
  const currentUser = {
    email: 'asabeneh@asabeneh.com',
    password: '123123123'
  };
  const signIn = user => {
    let found = false;
    const { email, password } = user;
    for (let i = 0; i < users.length; i++) {
      if (users[i]['email'] === email && users[i]['password'] === password) {
        users[i].isLoggedIn = true;
        return 'Successfully logged in';
      }
    }
    if (!found) {
      return 'Use does not exist';
    }
  };
  console.log(signIn(currentUser));
  console.log(users);
  console.log(signIn({ email: 'asab@asab.com', password: '123456' }));
  