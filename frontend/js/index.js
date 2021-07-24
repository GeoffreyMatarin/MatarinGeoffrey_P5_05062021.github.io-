allProducts()

const article = [];



//function qui attend getArticles
async function allProducts() {

    const articles = await getArticles();

    for (let i=0;i<articles.length;i++){

        article.push(articles[i]);
        dispayProduct(articles[i]);  
    } 
}
//envoi requette
function getArticles(){
    return fetch("http://localhost:3000/api/teddies")
    .then((reponse) => {
        return reponse.json()
    })
    .catch((error) => {
        alert("une erreur est survenue lors de la requête")
    })

};


function dispayProduct(article,){
    
    const container = document.getElementById('container');
    
    //creation des elements
    var section = document.createElement('div') ;
    var productCol = document.createElement('div');
    var card = document.createElement('div');
    var lienCard = document.createElement('a');
    var productImg  = document.createElement('img');
    var cardBody = document.createElement('div');
    var productName = document.createElement('h4');
    var productDesc = document.createElement('p');
    var productPrice = document.createElement('h4');
    var productFooter = document.createElement('div');

    //ajouts de classes
    section.classList.add('row','p-0','m-0');
    productCol.classList.add('col', "p-0");
    card.classList.add("card", "border-dark" ,"mb-5","col-6","mx-auto", "p-0");
    productImg.classList.add("card-img-top" ,'m-0', 'p-0');
    cardBody.classList.add("card-body");
    productName.classList.add("text-center", "mb-5");
    productDesc.classList.add("card-text","text-center");
    productPrice.classList.add("text-center");
    productFooter.classList.add("card-footer", "text-center");
    
    lienCard.href = "produit.html?id=" + article._id;;
  

    //relier elements au parents
    container.appendChild(section);
    section.appendChild(productCol);
    productCol.appendChild(lienCard);
    lienCard.appendChild(card);
    card.appendChild(productImg);
    card.appendChild(cardBody);
    cardBody.appendChild(productName);
    cardBody.appendChild(productDesc);
    cardBody.appendChild(productPrice);
    card.appendChild(productFooter);

    productDesc.innerHTML = article.description;
    productName.innerHTML = article.name;
    productPrice.innerHTML = article.price /100 + '€' ;
    productImg.setAttribute("src", article.imageUrl);
    productFooter.innerHTML = "★ ★ ★ ★ ★";

    
}

