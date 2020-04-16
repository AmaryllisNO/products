fetch("http://localhost/flower-power/wp-json/wc/store/products")
    .then(response => response.json())
    .then(json => makeProducts(json))
    .catch(error => console.log(error)); 

const name = document.querySelector(".name");
const productDiv = document.querySelector(".product")
console.log(name.innerHTML);

    let newHTML = "";
    
    function makeProducts(json) {

      var results = json; 

      console.dir(results[0].name);

       results.forEach(results => {

        console.dir(results.name)

       newHTML += 
            `                      
            <h4 class="name">${results.name}</h4>
            <img src="${results.images[0].src}" alt="${results.images[0].alt}">
            ${results.description}
            `
       });
       
       productDiv.innerHTML = newHTML;
      
    }




