function dispayFicheProduct(article,position){
    const container = document.getElementById('container');

    var section = document.createElement('div') ;
    var productCol = document.createElement('div');
    var card = document.createElement('div');
    var lienImg = document.createElement('a');
    var productImg  = document.createElement('img');
    var cardBody = document.createElement('div');
    var productName = document.createElement('h4');
    var productDesc = document.createElement('p');
    var productPrice = document.createElement('h4');
    var productFooter = document.createElement('div');

    //ajouts de classes
    section.classList.add('row');
    productCol.classList.add('col');
    card.classList.add("card", "border-dark" ,"mb-5");
    productImg.classList.add("card-img-top");
    cardBody.classList.add("card-body");
    productName.classList.add("text-center", "mb-5");
    productDesc.classList.add("card-text","text-center");
    productPrice.classList.add("text-center");
    productFooter.classList.add("card-footer", "text-center")
    
    lienImg.href = "produit.html?${article._id}";
  

    //relier elements au parents
    container.appendChild(section)
    section.appendChild(productCol);
    productCol.appendChild(card);
    card.appendChild(lienImg);
    lienImg.appendChild(productImg);
    card.appendChild(cardBody);
    cardBody.appendChild(productName);
    cardBody.appendChild(productDesc);
    cardBody.appendChild(productPrice);
    card.appendChild(productFooter);

    productDesc.innerHTML = article.description;
    productName.innerHTML = article.name;
    productPrice.innerHTML = article.price / 100 + ' €';
    productImg.setAttribute("src", article.imageUrl);
    productFooter.innerHTML = "★ ★ ★ ★ ★";
}