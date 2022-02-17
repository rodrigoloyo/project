 

let countriesList = [];
 

function output(countriesList){

    console.log(countriesList[0].name.common)
    for (const property in countriesList) {
        console.log(`${property}: ${countriesList[property].name.common}`);
        let elementArticle = document.createElement("article")

        elementArticle.innerHTML += `<h2>${countriesList[property].name.common}</h2>`;
        elementArticle.innerHTML += `<h3>Capital: ${countriesList[property].capital}</h3>`;

        elementArticle.innerHTML += `<img src=${countriesList[property].flags.png} alt=${countriesList[property].name.common} >`; 
        

        document.querySelector("#countries").appendChild(elementArticle);
     

         
    }
}


let add = " "  
const activities = document.getElementById('lang');

activities.addEventListener('change', (e) => {
  console.log(`e.target.value = ${ e.target.value }`);
  reset()
  let value = e.target.value
  console.log(value)

  console.log(`activities.options[activities.selectedIndex].value = ${ activities.options[activities.selectedIndex].value }`);
  let add = " " 

  console.log(typeof(value))
  console.log(add);
  switch(value) {
         
       case "1":
            add  = "spa";
            break;
       case "2":
            add  = "german";
           
            break;
       case "3":
           add  = "eng";
           break;        
        }
  console.log(add);
  let  url = 'https://restcountries.com/v3.1/lang/'   + add;
      console.log(url)
      fetch(url)
      .then(response => response.json())
      .then(country => {
       countriesList = country;
       output(countriesList);
          
  
     
    });

}
);

function reset(){  
    const element = document.querySelector("#countries");
    element.innerHTML = " ";
}
 