function sortStudentsByScore(students) {
  // เริ่มเขียนโค้ดตรงนี้จ้า

  let temp = {};
  for (let i = 0; i < students.length; i++) {
    if (students[i]?.score < students[i + 1]?.score) {
      temp = students[i];
      students[i] = students[i + 1];
      students[i + 1] = temp;
    }
  }
  for (let i = 0; i < students.length; i++) {
    if (students[i]?.score < students[i + 1]?.score) {
      temp = students[i];
      students[i] = students[i + 1];
      students[i + 1] = temp;
    }
  }
  for (let i = 0; i < students.length; i++) {
    if (students[i]?.score < students[i + 1]?.score) {
      temp = students[i];
      students[i] = students[i + 1];
      students[i + 1] = temp;
    }
  }

  return students;
}

let students = [
  { id: 'S001', name: 'Anan', score: 85 },
  { id: 'S002', name: 'Boon', score: 92 },
  { id: 'S003', name: 'Chai', score: 78 },
  { id: 'S004', name: 'Dao', score: 95 },
  { id: 'S005', name: 'Ek', score: 88 },
  { id: 'S006', name: 'Fah', score: 80 }
];
// console.log(students[1].score);

console.log(sortStudentsByScore(students));
// [
//   { id: "S004", name: "Dao", score: 95 },
//   { id: "S002", name: "Boon", score: 92 },
//   { id: "S005", name: "Ek", score: 88 },
//   { id: "S001", name: "Anan", score: 85 },
//   { id: "S006", name: "Fah", score: 80 },
//   { id: "S003", name: "Chai", score: 78 }
// ]

///// จำสูตร bubbles ไม่ได้จริงๆคร้าบ เดวกลับไปทวนนะครับ T T
