var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];
var re = /@gmail\.com$|@yahoo\.com$/;

var trustedEmails = arr.filter(user => re.test(user.email)).map(user => user.email);

console.log(trustedEmails);

// Фільтрація довірених email-адрес
// var trustedEmails = arr
//     .map(user => user.email)
//     .filter(email => /@gmail\.com$|@yahoo\.com$/.test(email));

// console.log(trustedEmails);
