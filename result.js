
const student = [

[1, 'Sayed Hossen', 89, 59, 77, 88, 98, 87 ],
[2, 'Md Robiul Islam', 87, 69, 87, 78, 98, 81 ],
[3, 'Abul Kalam', 82, 55, 79, 88, 98, 55 ],
[4, 'Apu Ahmed', 89, 59, 87, 88, 98, 87 ],
[5, 'Sazid Hasan', 80, 66, 77, 84, 54, 87 ],
[6, 'Nur Amin', 89, 59, 47, 88, 78, 87 ],
[7, 'Shakib', 82, 99, 67, 76, 91, 81 ],
[8, 'Rishad ', 69, 69, 92, 98, 92, 82 ],
[9, 'Al-Amin', 79, 59, 77, 68, 95, 84 ],
[10, 'Abdur Rahim', 89, 59, 57, 87, 98, 85 ],

];

for(let i = 0; i < student.length; i++){
    let roll = student[i][0]
    let name = student[i][1]
    let bn = student[i][2]
    let en = student[i][3]
    let math = student[i][4]
    let s= student[i][5]
    let ss = student[i][6]
    let rel = student[i][7]
   

    function Result() {

    this.gpa = function (marks) {

        let gpa;

        if (marks >= 0 && marks <= 32) {
            gpa = 0;
        } else if (marks >= 33 && marks < 40) {
            gpa = 1;
        } else if (marks >= 40 && marks < 50) {
            gpa = 2;
        } else if (marks >= 50 && marks < 60) {
            gpa = 3;
        } else if (marks >= 60 && marks < 70) {
            gpa = 3.5;
        } else if (marks >= 70 && marks < 80) {
            gpa = 4;
        } else if (marks >= 80 && marks <= 100) {

            gpa = 5;
        }
        return gpa;
    }




    // grade

    this.grade = function (marks) {

        let grade;

        if (marks >= 0 && marks <= 32) {
            grade = 'F';
        } else if (marks >= 33 && marks < 40) {
            grade = 'D';
        } else if (marks >= 40 && marks < 50) {
            grade = 'C';
        } else if (marks >= 50 && marks < 60) {
            grade = 'B';
        } else if (marks >= 60 && marks < 70) {
            grade = 'A-';
        } else if (marks >= 70 && marks < 80) {
            grade = 'A';
        } else if (marks >= 80 && marks <= 100) {
            grade = 'A+';
        }
        return grade;
    }



    this.cgpa = (bn, en, math, s, ss, rel) => {

        let total_gpa = (bn + en + math + s + ss + rel);

        let cgpa = total_gpa / 6;

        if (bn == 0 || en == 0 || math == 0 || s == 0 || ss == 0 || rel == 0) {
            return "You are failed";
        } else {
            return `Your Grade ${cgpa} & Grade = ${this.totalGrade(cgpa)}`;
        }
    }

    this.totalGrade = function (cgpa) {
        if (cgpa >= 0 && cgpa < 1) {
            return 'F'
        } else if (cgpa >= 1 && cgpa < 2) {
            return 'D'               
        } else if (cgpa >= 2 && cgpa < 3) {
            return 'C'
        } else if (cgpa >= 3 && cgpa < 3.5) {
            return 'B'
        } else if (cgpa >= 3.5 && cgpa < 4) {
            return 'A-'
        } else if (cgpa >= 4 && cgpa < 5) {
            return 'A'
        } else if (cgpa == 5) {
            return 'A+'
        }
    }
}

let adnan = new Result();

console.log(`
  
  Student Name : ${name}
  Student Roll : ${roll}

 Subject        Marks     GPA          Grade
 Bangla      : ${bn}     ${adnan.gpa(bn)}    ${adnan.grade(bn)}
 English     : ${en}     ${adnan.gpa(en)}    ${adnan.grade(en)}
 Math        : ${math}   ${adnan.gpa(math)}  ${adnan.grade(math)}
 Science     : ${s}      ${adnan.gpa(s)}     ${adnan.grade(s)}
 S Science   : ${ss}     ${adnan.gpa(ss)}    ${adnan.grade(ss)}
 Religion    : ${rel}    ${adnan.gpa(rel)}   ${adnan.grade(rel)}
--------------------------------------------------------------------
                    cgpa =${adnan.cgpa(adnan.gpa(bn), adnan.gpa(en), adnan.gpa(math), adnan.gpa(s), adnan.gpa(ss), adnan.gpa(rel))}

`);

}
