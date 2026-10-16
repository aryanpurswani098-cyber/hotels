const jsonString=`{"name": "Alice", "age": 25, "hobbies": ["reading",
"painting"]}`;
const jsonObject= JSON.parse(jsonString);
const age = jsonObject.age;
console.log(age);
