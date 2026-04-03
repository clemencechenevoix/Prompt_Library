const fetchPromise = fetch("./prompts.json");

fetchPromise.then((reponse) => {
    const jsonPromise = reponse.json();
    jsonPromise.then((json) => {
        //json is the array of hash from json; json[index] is the hash in index
        //this the test next
        let index = 0
        while (index < json.length){
            console.log(json[index].title);
            console.log(json[index].category);
            console.log(json[index].prompt);
            index += 1
        } 
    });
});