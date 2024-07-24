function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า

  // let left = '';
  // let right = '';
  let temp = '';
  for (let i = 0; i < customers.length; i++) {
    if (customers[i] > customers[i + 1]) {
      temp = customers[i];
      customers[i] = customers[i + 1];
      customers[i + 1] = temp;
    }
  }
  for (let i = 0; i < customers.length; i++) {
    if (customers[i] > customers[i + 1]) {
      temp = customers[i];
      customers[i] = customers[i + 1];
      customers[i + 1] = temp;
    }
  }

  return customers;
}

let customers = ['Somchai', 'Arthit', 'Suchada', 'Napasorn', 'Pimchanok'];

console.log(sortCustomerName(customers));
//// [ "Arthit", "Napasorn", "Pimchanok", "Somchai", "Suchada"]
//[ 'Arthit', 'Somchai', 'Napasorn', 'Pimchanok', 'Suchada' ]
customers = ['Arthit', 'Somchai', 'Napasorn', 'Pimchanok', 'Suchada'];

console.log(sortCustomerName(customers));
// ['Arthit', 'Napasorn', 'Pimchanok', 'Somchai', 'Suchada'];

// ตอบคำถามตรงนี้จ้า
// จำสูตร bubble sort ไม่ได้ แต่ที่เขียนไปเป็นการใช้ Loop 2 รอบ เป็น Big O n กำลัง 2 ครับ
