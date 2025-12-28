const studentsJson = `[{"name":"Anna","subject":{"title":"Mathematics","grades":[5,4,3,2]}},{"name":"Boris","subject":{"title":"Physics","grades":[3,4,5]}},{"name":"Vera","subject":{"title":"Chemistry","grades":[2,2,3]}},{"name":"Gleb","subject":{"title":"Computer Science","grades":[5,5,4]}},{"name":"Daria","subject":{"title":"Literature","grades":[4,2,5]}},{"name":"Evgeny","subject":{"title":"History","grades":[3,3,2]}},{"name":"Zhanna","subject":{"title":"Biology","grades":[5,4,4]}},{"name":"Igor","subject":{"title":"Geography","grades":[2,3,4]}},{"name":"Kira","subject":{"title":"English","grades":[5,5,2]}},{"name":"Lev","subject":{"title":"Russian","grades":[4,4,3]}},{"name":"Marina","subject":{"title":"Physical Education","grades":[5,2,5]}},{"name":"Nikita","subject":{"title":"Music","grades":[3,2,3]}},{"name":"Olga","subject":{"title":"Art","grades":[4,4,5]}},{"name":"Pavel","subject":{"title":"Social Studies","grades":[2,2,2]}},{"name":"Roman","subject":{"title":"Astronomy","grades":[5,5,5]}},{"name":"Svetlana","subject":{"title":"Economics","grades":[4,2,3]}}]`

function showStudentsWithTwos(studentsJson) {
    const students = JSON.parse(studentsJson)
    students.forEach(student => {
        if (student.subject.grades.includes(2)) {
            console.log(`${student.name}: ${student.subject.title}`)
        }
    })
}

showStudentsWithTwos(studentsJson)