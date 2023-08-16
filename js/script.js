// قائمة الأسماء
var names = ["John", "Jane", "Jim", "Alice", "Bob"];

// الحلقة التكرارية
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i][0].toLowerCase();

  // التحقق إذا كان الحرف الأول j أو غيره
  if (firstLetter === 'j') {
    console.log("Goodbye " + names[i]);
  } else {
    console.log("Hello " + names[i]);
  }
}
