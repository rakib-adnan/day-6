// - Create a MERN stack, Laravel, Django, GoLang,  WordPress, java dives students data structure and make their total income sheet with per developer data, Find specific students.


const devs =[
    ['Md Nur Amin', 30, 'B+', 'MERN Stack', 1000],
    ['Md Sabbir', 40, 'A+', 'Laravel', 1200],
    ['Md Manun', 22, 'B+', 'Django', 1400],
    ['Md Raihan', 70, 'O+', 'GoLang', 2000],
    ['Md Humayan', 34, 'AB-', 'Wordpress', 700],
    ['Emon Khan', 32, 'O-', 'Java', 900],
    ['Kawsar', 26, 'B+', 'Laravel', 1700],
    ['Nazmul', 30, 'O+', 'MERN Stack', 1000],
    ['Md Nur Amin', 30, 'B+', 'Wordpress', 1100],
    ['Abu Sayed', 50, 'AB+', 'Django', 1000],
];

let salary = 0;

for(let i = 0; i < devs.length; i++){

    console.log(`
    
    Name        = ${devs[i][0]}
    Age         = ${devs[i][1]}
    Blood Group = ${devs[i][2]}
    Skill       = ${devs[i][3]}
    Selary      = ${devs[i][4]}
   
    `);
    salary = salary + devs[i][4];  
    
}
console.log(`
Total Pay Amount = ${salary}`);