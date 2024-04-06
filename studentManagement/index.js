


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        return `
            <div class="person">
             <h2>${this.name}</h2>
            <p>Age: ${this.age}</p>
            </div>`;
    }


}

class Student extends Person{
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }
    displayInfo() {
        return `
            <div class="person">
             <h2>${this.name}</h2>
            <p>Age: ${this.age}</p>
            <p>Age: ${this.subject}</p>

            </div>`;
    }
}

const personList = document.getElementById('person-list');
const studentForm = document.getElementById('student-form');


studentForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const subject = document.getElementById('subject').value;
    const newStudent = new Student(name,age,subject);
    personList.innerHTML += newStudent.displayInfo();
    
        
})
