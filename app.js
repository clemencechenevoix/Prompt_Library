fetch("./prompts.json").then((reponse) => {
    const jsonPromise = reponse.json();
    jsonPromise.then((json) => {
        let index = 0
        let title = ""
        let category = ""
        let prompt = ""
        while (index < json.length){
            render(json[index].title, json[index].category, json[index].prompt, 'Table_json_prompts')
            index += 1
        } 
    });
});

function render(title_value, category_value, prompt_value, table_id) {
    let title = ""
    let category = ""
    let prompt = ""
    title = document.createTextNode(title_value);
    category = document.createTextNode(category_value);
    prompt = document.createTextNode(prompt_value);
  
    let td_1 = document.createElement("td");
    td_1.appendChild(title);
  
    let td_2 = document.createElement("td");
    td_2.appendChild(category);
  
    let td_3 = document.createElement("td");
    td_3.appendChild(prompt);
  
    let to_append = document.createElement("tr");
    to_append.appendChild(td_1);
    to_append.appendChild(td_2);
    to_append.appendChild(td_3);
  
    document.getElementById(table_id).appendChild(to_append);
}

form = document.getElementById("Prompt_form");
form.onsubmit = function(question) {
    question.preventDefault();
    render(document.getElementById("title").value, document.getElementById("category").value, document.getElementById("prompt").value, 'Table_prompts_to_add');
    form.reset();
}
