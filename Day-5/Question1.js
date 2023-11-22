const myJson = {
    "name": "John",
    "age": 30,
    "city": "New York",
    "hobbies": ["reading", "traveling", "coding"],
    "address": {
      "street": "123 Main St",
      "zipCode": "10001"
    }
  };
  
// For...In Loop (for arrays):

for (const index in myJson.hobbies) {
    console.log(myJson.hobbies[index]);
  }
  // For...Of Loop (for arrays):
  for (const hobby of myJson.hobbies) {
    console.log(hobby);
    }
//For Each Loop (for arrays):
myJson.hobbies.forEach(value => {
    console.log(value);
  });
//For...In Loop:
for (const key in myJson) {
  console.log(key, myJson[key]);
}
//For Loop:
for (let key in myJson) {
    console.log(key, myJson[key]);
  }
  
  
  