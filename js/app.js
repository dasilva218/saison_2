/*---------- Debut de l'épisode 1 --------------------- *

//Episode 1 : Adresse email
// ce programme demande à l'utilisateur son email et controle sa validité
// initialisation d'une variable regex

const regex = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
// déclaration d'une variable email
let email;
// demande de l'email à l'utilisateur
email = prompt('Entrez votre adresse email');
// teste de la validité de l'email
if (regex.test(email)) {
    alert(`${email} : est une adresse mail valide.`)
} else {
    alert(`${email} : est une adresse mail non valide.`)
}
/*---------- fin de l'épisode 1 --------------------- */
/*---------- Début de l'épisode 2 --------------------- *

alert("Ce programme vérifie les critères de selection d'un mot de passe")
//initialiser un mot de passe par l'utilisateur
let password = prompt("Veuillez choisire un mot de passe :")
// const regex pour controle sur la taille
const regexTaille = /^[a-zA-Z0-9]{8,}$/;
// const regex sur le controle des chiffres
const regexChiffre = /[0-9]+/
// const regex sur le controle d'une majuscule
const regexMaj = /[A-Z]+/
// condition sur ls diff valeur
    if (!(regexTaille.test(password))) {
        alert("Rentrez au minimum huit caractères")
    }else if (!(regexMaj.test(password))) {
        alert("Le mot de passe doit contenir au moins une majuscule")
    }else if (!(regexChiffre.test(password))) {
        alert("Le mot de passe doit contenir au moins un chiffre")
    }else{
        alert("Votre mot de passe respecte toute les condition !")
    }

/*---------- fin de l'épisode 2 --------------------- */
/*---------- Début de l'épisode 3 --------------------- *

alert("Ce programme demande à l'utilisateur son nom et le nombre d'enfant et affiche un résumé.");
//déclaration des variables nom et nombre d'enfant
let nom, nombrEnfant;
// récupération du nom
nom = prompt('Quel est votre nom ?');
// récupération du nombre d'enfant
nombrEnfant = prompt("Combien d'enfant avez vous ?");
let quant = Number(nombrEnfant);
//condition sur le nombre d'enfant
if (quant == NaN) {
    alert('Entrez un nombre')
}else if (quant < 0) {
    alert("Entrez un nombre positif")
} else {
    if (quant >= 2) {
        alert(`${nom}, vous avez ${quant} enfants`)
    }else if (quant === 0) {
        alert(`${nom}, vous n'avez pas d' enfant`)
    }
    else {
        alert(`${nom}, vous avez ${quant} enfant`)
    }
}
/*---------- fin de l'épisode 3 --------------------- */

/*---------- Début de l'épisode 4 --------------------- *

// info à l'utilisateur
alert('Ce programme vérifie le format de date exemple : 15/02/1995')
// récupération de la date saisie par user
let userDate = prompt("Veuillez entrez une date valide : ")
// condition regex
const regexDate = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
// vérification du format
if (regexDate.test(userDate)) {
    alert(`Le format de date est valide !`)
} else {
    alert(`Le format de date n'est pas valide !`)

}
/*---------- fin de l'épisode 4 --------------------- */
/*---------- Début de l'épisode 5 --------------------- *

alert("Ce programme demande votre nom, prenom et sexe et stocke le resultat sous forme d'objet en console")
class Personnage {
    constructor(nom, prenom, sexe) {
        this.nom = nom;
        this.prenom = prenom;
        this.sexe = sexe;
        this.titre = '';
    }
    affichePerso(){
        if (this.sexe == 'féminin') {
            this.titre = 'Mme'
        }else{
            this.titre = 'M'
        }
        console.log(`Bonjour ${this.titre} ${this.prenom} ${this.nom}`)
    }

}
//initialisation des variables nom prenom et sexe par l'utilisateur
let nom = prompt("Entrez votre nom :")
let prenom = prompt("Entrez votre prenom :")
let sexe = prompt("Entrez votre sexe écrire féminin ou masculin :")

const personnage1 = new Personnage(nom, prenom, sexe);
console.log(personnage1);
/*---------- fin de l'épisode 5 --------------------- */

/*---------- Début de l'épisode 6 --------------------- *
alert("Ce programme demande à l'utilisateur de saisirun numéro et renvoie le jour exemple, Entreé : 3 et Sortie : mercredi ")
// tableau des jours
const jours = ['lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche']
let numero = prompt('Entrez le numero du jour :');
numero = Number(numero);
if (numero >= 1 && numero <= 9 ) {
    alert((jours[numero - 1]));
}else{alert("Entrez un nombre positif")} 

/*---------- fin de l'épisode 6 --------------------- */

/*---------- Début de l'épisode 7 --------------------- *
alert("Ce programme vous propose de calculer votre moyenne en Mathématique")
// class étudiant pour le calcul des moyennes des objets etudiants
class Etudiants {
    
    //paramète notes pour les notes des etudiants
    constructor(notes){
        this.notes = notes;
    }
    //fonction calcul de la moyenne
    calculMoyenne(){
        let result;
        let somme = 0;
        let moyenne;
        result = this.notes.split(',');
        result.forEach(function(val) {
            if (parseInt(val,10) >= 0 && parseInt(val,10) <= 20) {
                somme += parseInt(val,10)    
            }else{
                alert("note entre 0 et 20")
            }
        })
        return moyenne = somme/result.length
    }
}

let valeurs = prompt('Entrer vos notes séparé par des virgules')
// instance de la classe Etudiant
const etudiant1 = new Etudiants(valeurs);
// affiche la moyenne
alert(etudiant1.calculMoyenne());
/*---------- Fin de l'épisode 7 --------------------- */

/*---------- Début de l'épisode 8 --------------------- */

/*---------- Fin de l'épisode 8 --------------------- */
