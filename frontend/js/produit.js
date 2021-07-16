    let params = new URL (document.location).searchParams;
    let id = params.get("id");

    product()

const article = [];



//function qui attend getArticles
async function product() {

    const article = await getArticle();


        
        detailProd(article);
        
        
    
}
//envoi requette
function getArticle(){
    return fetch("http://localhost:3000/api/teddies/" + id)
    .then((reponse) => {
        return reponse.json()
    })
    .then((data) => {
        return data
    })
    .catch((error) => {
        alert("une erreur est survenue lors de la requête")
    })
};
     



    
    
    
    function detailProd(teddy){ 
        

        
            let imgArt = teddy.imageUrl;
            let nameArt = teddy.name;
            let priceArt = teddy.price;
            let descart = teddy.description;
            let colorsArt = teddy.colors;
            let idArt = teddy._id;
            
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
            var colorSelector = document.createElement('div')
            var titreColorSelect = document.createElement('h4')
            var productcolor = document.createElement('select')
            
            var addBtn = document.createElement('button')


            section.classList.add('row');
            productCol.classList.add('col');
            card.classList.add("card", "border-dark" ,"mb-5","col-6","mx-auto");
            productImg.classList.add("card-img-top");
            cardBody.classList.add("card-body");
            productName.classList.add("text-center", "mb-5");
            productDesc.classList.add();
            productPrice.classList.add("text-center");
            productcolor.classList.add('custom-select',"mdb-select","md-form","mb3");
            addBtn.classList.add("bnt", "btn-success", "d-flex",)
           
            

            


            container.appendChild(section);
            section.appendChild(productCol);
            productCol.appendChild(card);
            card.appendChild(lienImg);
            lienImg.appendChild(productImg);
            card.appendChild(cardBody);
            cardBody.appendChild(productName);
            cardBody.appendChild(productDesc);
            cardBody.appendChild(productPrice);
            cardBody.appendChild(colorSelector)
            colorSelector.appendChild(titreColorSelect)
            colorSelector.appendChild(productcolor)
            
            cardBody.appendChild(addBtn)
            
            

            productDesc.innerHTML = teddy.description;
            productName.innerHTML = teddy.name;
            productPrice.innerHTML = teddy.price / 100 + '€' ;
            productImg.setAttribute("src", teddy.imageUrl);
            
            titreColorSelect.innerHTML = "Selectionnez la couleur";
            for(let i=0; i < teddy.colors.length; i++){
                
                
    
                
                
                var option = new Option (teddy.colors[i],teddy.colors[i]);

                
                productcolor.options.add(option);
                
    
            }

            addBtn.innerHTML = "Ajouter au panier";
            addBtn.onclick = function (){
                
                let selectedColor = productcolor.value;
                let choixProduit ={
                    idObjet : id,
                    nameProd : teddy.name,
                    optionProd : selectedColor,
                    prixProd : teddy.price / 100 ,
                    
                }
                
                
                

                panier = localStorage.panier;
                if (panier==null){
                    panier = [];
                    
                } else{
                    panier =JSON.parse(panier);
                }
  
                    panier.push(choixProduit);
                    localStorage.setItem("panier", JSON.stringify(panier));
                    alert("article ajouter au panier");
                    
                    console.log(panier);  
               
            
            

            };


            
            
           
            
      }


      
    

       

     


   




   




