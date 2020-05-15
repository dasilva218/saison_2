/* ------- Début de l'épisode 9 ----------*

//fonction multiplication avec un seul paramètre le nombre a multiplier
let multiplication = (x) => {
    for (let index = 0; index <= 12; index++) {
        
        console.log(`${x} * ${index} = `,x * index)

    }
}
// appel de la fonction avec l'argument 2
multiplication(2)

/* ------- Fin de l'épisode 9 ----------*/

/* ------- Début de l'épisode 10 ----------*

function nombrePaire(nombre) {
    // calcule du modulo d'un nombre
    let modul = nombre % 2;
    // si le modulo est = 0 en valeur et en type le nombre est pair
    if (modul === 0) {
        return true
    // si le modulo est != 0 le nombre est impair return false   
    } else {
        return false
    }
}
console.log(nombrePaire(23))
/* ------- Fin de l'épisode 10 ----------*/

/*---------- Debut de l'épisode 1 --------------------- *

//Episode 1 : Adresse email
// ce programme demande à l'utilisateur son email et controle sa validité
// initialisation d'une variable regex
(function (email) {
    // regex sur le controle du email
    const regex = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    // demande de l'email à l'utilisateur
    email = prompt('Entrez votre adresse email');
    // teste de la validité de l'email
    if (regex.test(email)) {
        alert(`${email} : est une adresse mail valide.`)
    } else {
        alert(`${email} : est une adresse mail non valide.`)
    }
})()

/*---------- fin de l'épisode 1 --------------------- */

/*---------- Début de l'épisode 2 --------------------- *
(function (password) {
    alert("Ce programme vérifie les critères de selection d'un mot de passe")
    //initialiser un mot de passe par l'utilisateur
    password = prompt("Veuillez choisire un mot de passe :")
    // const regex pour controle sur la taille
    const regexTaille = /^[a-zA-Z0-9]{8,}$/;
    // const regex sur le controle des chiffres
    const regexChiffre = /[0-9]+/
    // const regex sur le controle d'une majuscule
    const regexMaj = /[A-Z]+/
    // condition sur ls diff valeur
    if (!(regexTaille.test(password))) {
        alert("Rentrez au minimum huit caractères")
    } else if (!(regexMaj.test(password))) {
        alert("Le mot de passe doit contenir au moins une majuscule")
    } else if (!(regexChiffre.test(password))) {
        alert("Le mot de passe doit contenir au moins un chiffre")
    } else {
        alert("Votre mot de passe respecte toute les condition !")
    }
})()
/*---------- fin de l'épisode 2 --------------------- */

/*---------- Début de l'épisode 4 --------------------- *
(function (userDate) {
    // info à l'utilisateur
    alert('Ce programme vérifie le format de date exemple : 15/02/1995')
    // récupération de la date saisie par user
    userDate = prompt("Veuillez entrez une date valide : ")
    // condition regex
    const regexDate = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    // vérification du format
    if (regexDate.test(userDate)) {
        alert(`Le format de date est valide !`)
    } else {
        alert(`Le format de date n'est pas valide !`)

    }
})()
/*---------- fin de l'épisode 4 --------------------- */

/*---------- Début de l'épisode 6 --------------------- *
(function (numero) {
    alert("Ce programme demande à l'utilisateur de saisirun numéro et renvoie le jour exemple, Entreé : 3 et Sortie : mercredi ")
    // tableau des jours
    const jours = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
    numero = prompt('Entrez le numero du jour :');
    numero = Number(numero);
    if (numero >= 1 && numero <= 9) {
        alert((jours[numero - 1]));
    } else { alert("Entrez un nombre positif") }
})()
/*---------- fin de l'épisode 6 --------------------- */

/*---------- Début de l'épisode 7 --------------------- *
alert("Ce programme vous propose de calculer votre moyenne en Mathématique")

let etudiants = (tab) => {

        let somme = 0;
        let moyenne;
        // boucle sur les valeur du tableau
        tab.forEach(function(val) {
            if (parseInt(val,10) >= 0 && parseInt(val,10) <= 20) {
                somme += parseInt(val,10)    
            }else{
                alert("note entre 0 et 20")
            }
        })
        // arrondi du résultat
        return moyenne = Math.floor(somme/tab.length) 
    }


let valeurs = prompt('Entrer vos notes séparé par des virgules')
// séparation des valeurs dans un tableau
let result = valeurs.split(',');
// stocke le resultat de la fonction dans une variable
let sommes = etudiants(result);
// affiche le resultat
alert("La moyenne est :" + sommes);
/*---------- Fin de l'épisode 7 --------------------- */
