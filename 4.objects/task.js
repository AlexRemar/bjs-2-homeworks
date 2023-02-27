function Student(name, gender, age) {
  let student = new Student("Василиса", "женский", 19)
  let student1 = new Student("Игорь", "мужской", 18)
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
   if('marks' in student){
    this.marks.push(...marks);
   }
}


Student.prototype.getAverage = function () { 
  if('marks' in marks){ 
  for (let i = 0; i < this.marks.length; i++){ 
     sum += this.marks[i]; 
     return sum/this.marks.length[i]; 
  } 
}
  else{
    return 0;
  }  
} 


Student.prototype.exclude = function (reason) {
  delete Student.marks;
  delete Student.subject;
  this.exclude = reason;
}
