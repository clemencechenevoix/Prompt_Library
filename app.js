const fetchPromise = fetch("./prompts.json");

fetchPromise.then((reponse) => {
    const jsonPromise = reponse.json();
    jsonPromise.then((json) => {
        //json is the array of hash from json; json[index] is the hash in index
        //this the test next
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