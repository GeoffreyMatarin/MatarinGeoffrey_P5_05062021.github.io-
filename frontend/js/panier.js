let panier = JSON.parse(localStorage.panier);



const container = document.getElementById("container");
var titrePanier = document.createElement('h1');
titrePanier.classList.add("card","col","text-center","p-2", "border-dark");
container.appendChild(titrePanier);
if (panier == 0){

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
        var blockBouton = document.createElement('div');
        var deletteBtn = document.createElement('button');

        blockPanier.classList.add("row",);
        
        blockArticle.classList.add("card","col-11","text-center", "border-dark","p-0","mx-auto","mb-4");
        nameProduct.classList.add("card-header","col","text-center", "border-dark","m-0","py-2");
        containerInfo.classList.add("card-body","container", "text-center")
        blockInfo.classList.add("row","card-body");
        colorProd.classList.add("col-6");
        prix.classList.add("col-6");
        blockArticle.classList.add("row")
        deletteBtn.classList.add( "btn-danger","col","mx-auto", "card-body");

        
        
        container.appendChild(blockPanier);
        blockPanier.appendChild(blockArticle);
        blockArticle.appendChild(nameProduct)
        blockArticle.appendChild(containerInfo);
        containerInfo.appendChild(blockInfo);
        blockInfo.appendChild(colorProd);
        blockInfo.appendChild(prix);
        blockArticle.appendChild(blockBouton)
        blockBouton.appendChild(deletteBtn)
        
       
        
        
        
        nameProduct.innerText = panier[i].nameProd;
        colorProd.innerText = "Couleur sélectionnée : " + panier[i].optionProd;
        prix.innerText = "Prix  = " + panier[i].prixProd + ' €';
        deletteBtn.innerText = "Supprimer";
        titrePanier.innerText = "Votre panier";
       
        deletteBtn.setAttribute('onclick','supression('+ i + ')');
        
    }    

    }
  
      function supression(position){
          panier = JSON.parse(localStorage.getItem("panier"));
          panier.splice(position,1);
          localStorage.setItem("panier",JSON.stringify(panier));
          window.location.reload();

      };

      
        
    prixTotal(panier)
    

    function prixTotal(panier){
   
            const totalProduit = []; 
               
            for (let i=0; i< panier.length; i++){
               totalProduit.push(panier[i].prixProd);         
                 
            }
            
            let sum = 0;
            for (let i=0; i< totalProduit.length; i++){
                sum +=parseInt(totalProduit[i]);
            }
           
            var blockTotal = document.createElement('div');
            var titreTotal = document.createElement('h1');
            var somme = document.createElement('span');

            blockTotal.classList.add("row", "card-body" ,"mx-5","my-0");
            titreTotal.classList.add("col-6", "text-center");
            somme.classList.add('col-6', "text-center","pt-3");

            blockPanier.appendChild(blockTotal);
            blockTotal.appendChild(titreTotal);
            blockTotal.appendChild(somme);

        
            titreTotal.innerText = 'Total du panier :'
            somme.innerText = sum  + ' €' ;
        } 

        
        




let products = [];
let contact;
let submit = document.getElementById('submit');
document.getElementById("formEnvoi").addEventListener("submit", function(e) {
    e.preventDefault();
    var erreur;
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var email = document.getElementById('email');
    var adresse = document.getElementById('adresse');
    var codepostale = document.getElementById('codepostale');
    var ville = document.getElementById('ville');
    

    for(let i =0;i < panier.length; i++){
        
        products.push(panier[i].idObjet);
        
        
        
        
        
    }

    
       
        

    
    
    contact ={
        firstName : document.getElementById("nom").value,
        lastName : document.getElementById("prenom").value,
        address : document.getElementById("adresse").value,
        city : document.getElementById("ville").value,
        email : document.getElementById("email").value,

    }
    
    
    
    
    
    
    
    

    
    if(panier.length > 0){
        const toPost = JSON.stringify({contact, products});
        console.log(toPost);
       return fetch("http://localhost:3000/api/teddies/order",{
            method: "POST",
            
            headers: 
                
                {'content-type' :  'application/json; charset=utf-8'},
            
            body: toPost

        })
        .then((reponse) => {
            return reponse.json()
            
        })
         .then (function(reponse){
             let orderInfos={
                userName :contact.lastName,
                orderId: reponse.orderId,
             };
             console.log(orderInfos);
             localStorage.setItem("orderInfos",JSON.stringify(orderInfos));
             window.location.replace("./confirmation.html");
         })
         .catch((error) => {
            alert("une erreur est survenue lors de la requête")
        })
            
    };
         
}
    
    
);