let panier = JSON.parse(localStorage.getItem('panier'));
console.log(panier);

var produit = [];
const container = document.getElementById("container");
if (panier === null || panier == 0){

    var blockPanier = document.createElement("div");
    var panierVide = document.createElement("p");

    panierVide.classList.add("card-text","text-center");

    container.appendChild(blockPanier);
    blockPanier.appendChild(panierVide);

    blockPanier.innerHTML = "aucun produits dans le panier";

} else {
    let panierRempli = [];
    let objet = JSON.parse(localStorage.getItem('panier'))
    console.log(objet)
    for (i = 0; i < panier.length; i++){


        var blockPanier = document.createElement('div');
        var nameProduct = document.createElement("h2");
        var blockInfo = document.createElement('div');
        var colorProd = document.createElement("span");
        var prix = document.createElement('span');

        blockPanier.classList.add();
        nameProduct.classList.add("text-center");
        colorProd.classList.add("card-text");
        prix.classList.add("card-text");

        container.appendChild(blockPanier);
        blockPanier.appendChild(nameProduct);
        blockPanier.appendChild(blockInfo);
        blockInfo.appendChild(colorProd);
        blockInfo.appendChild(prix);
        function buildpanier(object){
            let name = nameProd.value;
            let couleur = optionProd.value;
            let prixObj = prixProd.value;
            console.log(name);
        }
        
        
        nameProduct.innerHTML = panier.nameProd;
        colorProd.innerHTML = panier.optionProd;
        prix.innerHTML = panier.prixProd;


        
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