let panier = JSON.parse(localStorage.panier);


var produit = [];
const container = document.getElementById("container");
var titrePanier = document.createElement('h1');
titrePanier.classList.add("card","col","text-center","p-2", "border-dark");
container.appendChild(titrePanier);
if (panier === null){

    var blockPanier = document.createElement("div");
    var panierVide = document.createElement("p");

    panierVide.classList.add("card-text","text-center");

    container.appendChild(blockPanier);
    

    blockPanier.innerHTML = "aucun produits dans le panier";

} else {
    
    
    for (i = 0; i < panier.length; i++){


        var blockPanier = document.createElement('div');
        
        var blockArticle = document.createElement("div");
        var nameProduct = document.createElement("h2");
        var containerInfo =document.createElement("div");
        var blockInfo = document.createElement('div');
        var colorProd = document.createElement("span");
        var prix = document.createElement('span');
        var deletteBtn = document.createElement('button');

        blockPanier.classList.add("row",);
        
        blockArticle.classList.add("card","col-11","text-center", "border-dark","p-0","m-auto",);
        nameProduct.classList.add("card-header","col","text-center", "border-dark","m-0","p-0");
        containerInfo.classList.add("card-body","container", "text-center")
        blockInfo.classList.add("row","card-body");
        colorProd.classList.add("col-6");
        prix.classList.add("col-6",);
        deletteBtn.classList.add( "btn-warning","col-4","m-auto",);

        
        
        container.appendChild(blockPanier);
        blockPanier.appendChild(blockArticle);
        blockArticle.appendChild(nameProduct)
        blockArticle.appendChild(containerInfo);
        containerInfo.appendChild(blockInfo);
        blockInfo.appendChild(colorProd);
        blockInfo.appendChild(prix);
        blockInfo.appendChild(deletteBtn)
        
       
        
        
        
        nameProduct.innerText = panier[i].nameProd;
        colorProd.innerText = "Couleur :" + panier[i].optionProd;
        prix.innerText = "Prix  =" + panier[i].prixProd;
        deletteBtn.innerText = "Supprimer";
        titrePanier.innerText = "Votre panier";


        
    }
    let total = 0;

            for (let i=0; i< panier.length; i++){
                total = Number(panier[i].prixProd)/100;
                console.log(total);
            }
            
        
        
    
}

        
            





document.getElementById("formEnvoi").addEventListener("submit", function(e) {
    e.preventDefault();
    var erreur;
    var nom = document.getElementById('nom');
    var prenom = document.getElementById('prenom');
    var email = document.getElementById('email');
    var adresse = document.getElementById('adresse');
    var codepostale = document.getElementById('codepostale');
    var ville = document.getElementById('ville');

    if (!ville.value) {
        erreur = "Veuillez renseigner votre ville";
    }
    if (!codepostale.value){
        erreur = "Veillez renseigner votre code postale"
    }
    if (!adresse.value) {
        erreur = "Veuillez renseigner votre adresse";
    }
    if (!email.value) {
        erreur = "Veuillez renseigner votre adresse email";
    }

    if (!prenom.value) {
        erreur = "Veuillez renseigner votre prenom";
    }
    if (!nom.value) {
        erreur = "Veuillez renseigner votre nom";
    }

    if (erreur){
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    }else{ 
     alert("commande prise en compte");
    }
});