function apsabd() {
    var person1 = {
        FirstName: 'Johnson',
        LastName: 'Keth',
        OfficeAdress: 'Las Vegas'
    };

    var person2 = {
        FirstName: 'Shivam',
        LastName: 'Bhushan',
        OfficeAdress: 'Patna'
    }

    var person3 = {
        FirstName: 'Anuj',
        LastName: 'Jadhav',
        OfficeAdress: 'Pune'
    }

    function printPerson(person) {
        console.log("First Name: " + person.FirstName);
        console.log("Last Name: " + person.LastName);
        console.log("Office Adress: " + person.OfficeAdress);
    }

    printPerson(person1);
    printPerson(person2);
    printPerson(person3);
}