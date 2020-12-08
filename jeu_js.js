
var pv_perso1 = document.getElementById("pv_perso1");
var mana_perso1 = document.getElementById("mana_perso1");
var def_perso1= document.getElementById("def_perso1");

var infoevenement = document.getElementById("infoevenement");

var bouton_atq = document.getElementById("attaque");
var bouton_shield = document.getElementById("defence");
var bouton_spe = document.getElementById("attaqueSpe");
var bouton_fintour = document.getElementById("fintour");


var imageGoblin = document.getElementById("imageGoblin");
var info_Monstre = document.getElementById("info_Monstre");
var nom_Monstre = document.getElementById("nom_Monstre");
var pv_Monstre = document.getElementById("pv_Monstre");

/*--------------- Gestion du joueur -------------------------*/

pv_perso1.value = 900;
pv_perso1.innerHTML = pv_perso1.value;


mana_perso1.value = 100;
mana_perso1.innerHTML = mana_perso1.value;

def_perso1.value = 10;
def_perso1.innerHTML = def_perso1.value;



/*

// -------------- Gestion vie joueur -----------------------

function infopvjoueur() {
  var pv = document.getElementById(pvjoueur1);
  var prc = document.getElementById("prcpvjoueur1");
  prc.innerHTML = pv.value + "%";
}
function modifpvjoueur() {
  var val = (Math.round(Math.random() * (-15)-1));
  var pv = document.getElementById("pvjoueur1");
  if((pv.value+val)<=pv.max && (pv.value+val)>=0){
     pv.value += val ;
  }
  else if((pv.value+val)<0){
     pv.value = 0 ;
  }
  infopvjoueur(); 						
}
// -------------- Gestion mana joueur ----------------------- 

function infomanajoueur() {
  var pv = document.getElementById("manajoueur1");
  var prc = document.getElementById("prcmanajoueur1");
  prc.innerHTML = pv.value + "%";
}
function modifmanajoueur() {
  var val = - 20;
  var pv = document.getElementById("manajoueur1");
  if((pv.value+val)<=pv.max && (pv.value+val)>0){
     pv.value += val ;
  }
  else if((pv.value+val)<=0){
     pv.value = 0 ;
     document.getElementById("attaqueSpe").disabled = true;
  }
  infomanajoueur(); 					
}
// -------------- Gestion vie monstre -----------------------

function infopvMonstre() {
  var pv = document.getElementById("pvMonstre");
  var prc = document.getElementById("pourcentage");
  prc.innerHTML = pv.value + "%";
}
function modif() {
  var val = (Math.round(Math.random() * (-10)-1));
  var pv = document.getElementById("pvMonstre");
  if((pv.value+val)<=pv.max && (pv.value+val)>=0){
     pv.value += val ;
  }
  else if((pv.value+val)<0){
     pv.value = 0 ;
  }
  infopvMonstre(); 							// lance la fonction infoMonstre
}
// -------------- Affiche info du monstre -----------------------
function afficheinfo(){
		document.getElementById("infoMonstre").style.opacity = "1";
}
function cacheinfo(){
		document.getElementById("infoMonstre").style.opacity = "0";
}

// -------------- Affiche Menu du joueur -----------------------
var affiche = false ; 
function menujoueur1(){
	if (affiche == true){
		document.getElementById("menujoueur").style.opacity = "0";	// bouton juste invisible toujour cliquable
		affiche = false ;
	}
	else {
		document.getElementById("menujoueur").style.opacity = "1";
		affiche = true ;
	}
}

// -------------- désactivation des boutons  -----------------------



//-------------- fonction bouton -----------------------

function clicjoueur1(){
menujoueur1()	
}

function clicattaque() {
  modif()
  menujoueur1()   
 }
 
 function clicdefence() {
  menujoueur1()   
 }
 
 function clicspecial() {
  modifmanajoueur()
  menujoueur1()   
 }

  
  //document.body.Innethtml = "" ;
  // attaque aléatoire : crée un tableau d'id des perso qui correspond a joueur1234 



*/

