const ArrayAPI = [
  'http://jsonplaceholder.typicode.com/posts/1',
  'http://jsonplaceholder.typicode.com/posts/2',
  'http://jsonplaceholder.typicode.com/posts/3',
  'http://jsonplaceholder.typicode.com/posts/5',
  'http://jsonplaceholder.typicode.com/posts/14',
  'http://jsonplaceholder.typicode.com/posts/25',
  
];
  
async function chain (ArrayAPI) {
  for (let element of ArrayAPI) {
    await request(element)
      .then(response => console.log(`${response.id} - ${response.title} - ${response.body}`))
      .catch(error => console.log(`Error code: ${error.message}`));
  } 
}
  
function request (url) {
  return fetch(url)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error(response.status);
    });
}
  
chain(ArrayAPI);