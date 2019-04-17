//selects element to print to html
addjokeToDom = jokeAsHTML => {
    const el = document.querySelector(".container");
    el.innerHTML = ""; //put this in your function
    el.innerHTML += jokeAsHTML;
};

//returns joke item in the html
jokeFactory = tell => {
    return `
      <h3>Chuck Norris</h3>
      <br>
      <p>${tell}</p>
      `;
  };
  
  //gets the api 
  function getData() {
        fetch("http://api.icndb.com/jokes/random")
        .then(result => result.json())
        .then(jokeInfo => {
            console.log(jokeInfo)
            const tell = jokeInfo.value.joke //console.log to find!!!
            const jokeAsHTML = jokeFactory(tell);
            addjokeToDom(jokeAsHTML);
        })
  }
  
  //selects button on html
  const getDataButton = document.getElementById("btn-getData");
  
  //add listener for dynamic function
  getDataButton.addEventListener("click", () => getData ("joke"));
  
