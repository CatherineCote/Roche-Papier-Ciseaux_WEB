//Jouer......................................................................
const jouer = document.querySelector('.jouer');

jouer.addEventListener('click', function() {
  
  const game = new Game();
  
  //Récupère et affiche le nom écrit dans le champ de texte
  var nom = document.getElementById("nom").value;
  document.getElementById("joueur").innerHTML = nom;
  
  //Partie pour cacher le premier formulaire
  document.body.classList.add('cacher');
  document.body.classList.add('show');
  
  //Animation GSAP..........................................................
  
  
});

//Rejouer.........................................................................
const rejouer = document.querySelector('.rejouer');

rejouer.addEventListener('click', function() {
  document.body.classList.remove('show');
  document.body.classList.remove('cacher');
  
});


class Game{
  constructor(){
    this.listMain = [
      ["✊","✋","✌️"],
       ["✊🏻","✋🏻","✌🏻"],
      ["✊🏽","✋🏽","✌🏽"],
      ["✊🏿","✋🏿","✌🏿"],
    ];
    
    this.afficherChoixJoueur();
    this.afficherChoixOpposant();
    this.resulatMatch();
  }

  afficherChoixJoueur(){
    const choixOption = document.getElementById("choix");
    const indexOptionsJeu = choixOption.selectedIndex;
    
    const choixPeauList = document.querySelector('[name = peau]:checked').value;
    console.log(this.listMain[choixPeauList][indexOptionsJeu]);
    const actionJoueur = this.listMain[choixPeauList][indexOptionsJeu];
    
    //Affichage Joueur........................................................................
  
  const resultatJoueur = document.getElementById("mainJoueur");
  resultatJoueur.innerHTML = `<span>${actionJoueur}</span>`;
  }
  
  afficherChoixOpposant() {
    const couleurRandom = Math.round(Math.random() * 3);
    const couleurOpposant = this.listMain[couleurRandom];
    
    this.actionRandom = Math.round(Math.random() * 2);
    const actionOpposant = couleurOpposant[this.actionRandom];
    
    //Affichage Opposant.......................................................................
    const resulatOpposant = document.querySelector(".choixOpposant");
    resulatOpposant.innerHTML = `<span>${actionOpposant}</span>`;
}
  
  resulatMatch() {
    const partieJoueur = document.querySelector('.joueurGauche');
    const partieOpposant = document.querySelector('.joueurDroite');
    const annonce = document.querySelector('.annonce');
   
    //Rappeler les const précédente
    const choixOption = document.getElementById("choix");
    const indexOptionsJeu = choixOption.selectedIndex;
    
    //Égalité.............................................................
    if(indexOptionsJeu == this.actionRandom){
      partieJoueur.style.setProperty('background-color', "#3F88C5");
      partieOpposant.style.setProperty('background-color', "#3F88C5");
      annonce.innerHTML = "<span>ÉGALITÉ!</span>";
      
    }
    
    //Défaite..............................................................
    else if(
      indexOptionsJeu == 0 && this.actionRandom == 1 ||
      indexOptionsJeu == 1 && this.actionRandom == 2 ||
      indexOptionsJeu == 2 && this.actionRandom == 0 ){
        partieJoueur.style.setProperty('background-color', "#D16D82");
        partieOpposant.style.setProperty('background-color', "#7FD8BE");
        annonce.innerHTML = "<span>DÉFAITE!</span>";
      }
    
    //Victoire..............................................................
    else{
      partieJoueur.style.setProperty('background-color', "#7FD8BE");
        partieOpposant.style.setProperty('background-color', "#D16D82");
        annonce.innerHTML = "<span>VICTOIRE!</span>";
    }
  }
  
}







