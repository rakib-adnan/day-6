
// Send a welcome message to everyone over the age of 18 based on the age of the data array of all the members of a club and send a greeting message to the person over the age of 40, of course, send the message through a function, and to those who are under 18 years of age. Give the message to be attentive.


const ageCal = [

[ 'Abdullah', 18, 'JAVA', 'Dhaka'],
[ 'Abu Sufian', 30, 'PHP',  'comilla' ],
[ 'Anamul Haq', 17, 'Laravel',  'Barishal' ],
[ 'Abu Sayed', 35, 'GoLang',  'Foridpur' ],
[ 'Najmul ', 55, 'PHP',  'Rajsahi' ],
[ 'Arif ', 34, 'Python',  'Khulna' ],
[ 'Saydul ', 40, 'JAVA',  'Rajsahi' ],
[ 'Ebrahim ', 15, 'Python',  'Dinajpur' ],

];

 for(let i = 0; i < ageCal.length; i++ ){


console.log(`---------------------`);
     console.log(`
    
    Name        = ${ageCal[i][0]}
    Age         = ${ageCal[i][1]}
    Skill       = ${ageCal[i][2]}
    Location    = ${ageCal[i][3]}
    `);
    console.log(`---------------------`);

    if(ageCal[i][1] > 0 && ageCal[i][1] < 18){
        console.log(`You are not permited`);
    }else if(ageCal[i][1] >=18 && ageCal[i][1] <= 40 ){
        console.log(`Your Permission Granted`);
    }else if(ageCal[i][1] > 40){
        console.log(`You are Old Man`);
    }
 }
 console.log(ageCal[i][1]);