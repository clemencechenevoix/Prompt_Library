# Welcome to Prompt_Library
***

## Task
Create an application where you can read different prompts and add some

## Description
Our application needed to do two things:
- First display the prompt stored on a page
- Second add a form on the same page to add new prompts to the list without storing them

For the first part of this application we stored our different prompts with their category and title in a Json file "prompts.json". Next we load the informations from this Json file in our JavaScript file "app.js". To load them we use the system fetch with Promise.
After loading the prompts we display them in the shape of an array in our Html file "index.html".

For the second part we use the balise "form" in Html to get the information of the new prompt from the user. Next we use a function, which is triggered when the form is sent, which will display the prompts in the array of your prompts. The different prompts added with the form are not stored so when you refresh the page they're gone.

## Installation
To install the project you will need to do 4 steps:

- Make sure you have Docker install (if not, install it on "https://www.docker.com/)

- You will need to clone this reposit for it open a terminal and do :
```
 $> git clone https://github.com/clemencechenevoix/Prompt_Library.git
```

- Put  this line in the terminal :
```
 $> docker compose up
```

- Open your broswer and put in the search :
```
localhost:8080
```

- To stop the process press "CTRL + C"

## Usage
You can read the prompt and copy paste it in an AI if you want to use them.
If you want to add new prompts enter the informations in the form and press the button submit or press enter (don't forget if you refresh the page the prompts added disappear in the void, so don't put any important information you want to keep.)

### The Core Team
Clemence Chenevoix
