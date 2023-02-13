function Student(name, gender, age) {
  
  this.name = name;
  this.gender = gender;
  this.age = age;
  Student.prototype.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    Student.setSubject(subjectName) 
    Student.prototype.subject; 
}

Student.prototype.addMarks = function (...marks) {

    for (marks in addMarks){
        if (marks.hasOwnProperty == true) {
            addMarks(...marksToAdd)
        }

    }
}

Student.prototype.getAverage = function () {
  let averageValue = getAverage();
  for (let i = 0; i < marks.length; i++){
     if (marks[i] < 1){
        return 0;
     }
     else (
       sum += marks[i]
     )
     averageValue = sum/marks.length;
  }
}

Student.prototype.exclude = function (reason) {
    exclude(reason)
    delete Student.marks;
    delete Student.subject;
    Student.prototype.exclude = reason;
}
