console.log("Hello");
console.log($);

window.onload = function getToDos() {
  //make API request
  axios.get("/api/todos").then(response => {
    const data = response.data;
    console.log(data);
    // using data from API request, 
    // create some HTML
    const list = $("#todoContainer"); //jquery selector 
    for (const item of data) {
      const text =  item.text; 
      const id = item._id;
      list.append(`<div>${text}<button id="${id}">x</button></div>`);    
    }   
  })
}

function addTodo () {
  const text = $("#input").val();
  //console.log(text);
  axios.post('/api/todo', {text}).then(response => {
    const data = response.data;
    const text = data.text;
    const id = data._id;
    const list = $("#todoContainer");
    list.append(`<div>${text}<button id="${id}">x</button></div>`);
  })  
}

function deleteTodo () {
  console.log("deleting", $(this).attr("id"));
  const button = $(this);
  const id = button.attr("id");
  axios.delete(`/api/todo/${id}`).then(response => {
    console.log("successfully deleted");
    const parent = button.parent();
    parent.remove();
  })
}

$("#addTodo").on("click", addTodo);
$("#todoContainer").on("click", "button", deleteTodo);