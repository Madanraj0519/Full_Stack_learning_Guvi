function areJSONEqual(json1, json2) {
    const stringifiedJSON1 = JSON.stringify(json1);
    const stringifiedJSON2 = JSON.stringify(json2);
  
    return stringifiedJSON1 === stringifiedJSON2;
  }
  
  const json1 = { "name": "John", "age": 30, "city": "New York" };
  const json2 = { "age": 30, "city": "New York", "name": "John" };
  
  console.log(areJSONEqual(json1, json2)); 