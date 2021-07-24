
const jsonorderInfos = localStorage.getItem("orderInfos")
const orderInfos = JSON.parse(jsonorderInfos);
const jsonPanier = localStorage.getItem("panier");
const panier = JSON.parse(jsonPanier)



confirmDisplay(panier)
    

function confirmDisplay(panier){

   
const totalProduit = []; 
   
for (let i=0; i< panier.length; i++){
   totalProduit.push(panier[i].prixProd);         
     
}

let sum = 0;
for (let i=0; i< totalProduit.length; i++){
    sum +=parseInt(totalProduit[i]);
}
  




let blockConfirmOrder = document.createElement('div');
let blockConfirm = document.createElement('div');
let messValid = document.createElement('p');
let messOne = document.createElement('p');
let messTwo = document.createElement('p');
let blockRecap = document.createElement('div');
let messRecap = document.createElement('p');
let recapOne = document.createElement('p');
let recapTwo = document.createElement('p');
let goodBye = document.createElement('p')

container.appendChild(blockConfirmOrder);
blockConfirmOrder.appendChild(blockConfirm)
blockConfirm.appendChild(messValid);
blockConfirm.appendChild(messOne);
blockConfirm.appendChild(messTwo);
blockConfirmOrder.appendChild(blockRecap);
blockRecap.appendChild(messRecap);
blockRecap.appendChild(recapOne);
blockRecap.appendChild(recapTwo);
blockConfirmOrder.appendChild(goodBye);


blockConfirmOrder.classList.add('container', 'card','my-3')
blockConfirm.classList.add('row','card-body');
messValid.classList.add('col-12','text-center','pt-4');
messOne.classList.add('col-12' ,'text-center');
messTwo.classList.add('col-12' ,'text-center');
blockRecap.classList.add('row', 'card-body');
messRecap.classList.add('col-12','text-center');
recapOne.classList.add('col-12','text-center');
recapTwo.classList.add('col-12','text-center');
goodBye.classList.add('col-12','text-center','p-4');


messValid.innerText = "Votre commande est validée " + orderInfos.userName + ".";
messOne.innerText = "Notre équipe va traiter la commande dans les plus bref delais. "
messTwo.innerText = "Merci de nous faire confiance pour vos achats ! "

messRecap.innerText= "Vous trouverez le récapitulatif de votre commande ci-dessous :"
recapOne.innerText = "Numero de commande : " + orderInfos.orderId + ' .';
recapTwo.innerText = "Prix total TTC : " + sum + ' €.';
goodBye.innerText = "A bientot sur orinoco et ses annexes ! "

}

localStorage.clear();