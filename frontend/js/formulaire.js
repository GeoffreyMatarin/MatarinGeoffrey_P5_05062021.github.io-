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