// level {1/2/3}
async function GET_DATA() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let DATA = await response.json();
    return DATA;
  }