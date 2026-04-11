fetch("./prompts.json").then((reponse) => {
    const jsonPromise = reponse.json();
    jsonPromise.then((json) => {
        let index = 0
        let title = ""
        let category = ""
        let prompt = ""
        while (index < json.length){
            title = document.createTextNode(json[index].title);
            category = document.createTextNode(json[index].category);
            prompt = document.createTextNode(json[index].prompt);

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
            document.getElementById('Table_json_prompts').appendChild(to_append);
            index += 1
        } 
    });
});

function render(title_value, category_value, prompt_value) {
    console.log("test")
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
    document.getElementById('Table_prompts_to_add').appendChild(to_append);
}

form = document.getElementById("Prompt_form");

form.onsubmit = function(question) {
    question.preventDefault();
    render(document.getElementById("title").value, document.getElementById("category").value, document.getElementById("prompt").value);
    form.reset();
}
