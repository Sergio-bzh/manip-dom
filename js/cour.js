// On s'assure que le DOM est chargé
window.load = () => {
// Exécuté après le chargement de la page

// Séléctionner des éléments par leur id
let section = document.getElementById('section1');

// selectionner les élements par leur classe
let invalid = document.getElementsByClassName('invalid-feedback');

// Séléctionner les éléments par leur balise (NE sera pas utilisée souvent mais existe)
let figure = document.getElementsByTagName ("figure");

// Séléctionner les éléments par sélecteur CSS
let span = document.querySelector('div span');//selectionne le 1er résultat
let autreSpan = document.querySelector(".invalid-feedback");//selectionne le 1er résultat
let spans = document.querySelectorAll('div span');//selectionne tous les résultats

let AutresSpans = document.querySelectorAll('[name=email]');//selectionne par attribut

// Modifier le CSS d'un élément
span.style.backgroundColor = 'yellow';

// Modifier le contenu d'un élément
span.innerText = "y"

// getComputedStyle(baliseHTML) permet de récupérer la valeur du style d'un élément HTML (autrement dit son CSS)
console.log(window.getComputedStyle(span)).getPropertyValue("background-color") // getPropertyValue("propriété-css") permet de cibler la propriété css par son nom CSS

// Accéder à la liste des classes d'un élément 


console.log(span.classList.contains("invalid-feedback"));
span.classList.add("invalid");// ajouter une classe
span.classList.remove("invalid-feedback");//enlever une classe
div.classList.toggle("container");//il verifie et si il ya pas la classe machin si il n y a pas machin il ajoute classe (switcher)
div.classList.replace("container","contenair-fluid");//remplace la classe, par une autre classe

console.log(span);

// Ajotuer un élément au DOM (exemple une balise <p>)
// On crée une balise p
let nouvelleP = document.createElement("p");

// On insère le texte
let texte = document.createTextNode ("ceci est le contenu de la balise p")

// On met en lien le texte avec la balise <p>
nouvelleP.appendChild(texte);

// On insère la balise dans le DOM
section.appendChild(nouvelleP);

// Moins conventionnel
let html = section.innerHTML;
html +="<p> ceci est une autre balise p </p>";//le p se mettra a la fin
htmm ="<p> ceci est une autre balise p </p> + html";//le p viendra avant
section.innerHTML = html;


// Les évènements




}