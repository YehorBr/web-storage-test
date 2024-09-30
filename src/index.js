const formRef = document.getElementById('studentForm')
const tableRef = document.getElementById('studentsTable').querySelector('tbody')

const students = [];

formRef.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    const student = {
        id: Date.now(),
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        age: form.elements.age.value,
        course: form.elements.course.value,
        faculty: form.elements.lastName.value,
    }

    students.push(student)

    localStorage.setItem('students', JSON.stringify(students))

    form.reset()   


     const  studentsMarkup = students.map((student)=>{
        return  `
        <tr>
        <td>${student.id}</td>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.age}</td>
        <td>${student.course}</td>
        <td>${student.faculty}</td>
        <td>
        <button class="btn btn-warning btn-sm" onclick="editStudent(${student.id})">Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deleteStudent(${student.id})">Delete</button>
        </td>
        </tr>
        `

    }).join()

    tableRef.insertAdjacentHTML('beforeend', studentsMarkup)
}







