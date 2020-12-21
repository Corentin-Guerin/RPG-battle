function desactive_bouton_monstre(){
	document.getElementById('boutonMonstre1').disabled=true;
	document.getElementById('boutonMonstre2').disabled=true;
	document.getElementById('boutonMonstre3').disabled=true;
}


function active_bouton_monstre(){
	document.getElementById('boutonMonstre1').disabled=false;
	document.getElementById('boutonMonstre2').disabled=false;
	document.getElementById('boutonMonstre3').disabled=false;
}

function desactive_menu_perso(){
	document.getElementById('menuperso1').style.display= "none";
	document.getElementById('menuperso2').style.display= "none";
	document.getElementById('menuperso3').style.display= "none";
	document.getElementById('menuperso4').style.display= "none";
}


 

/*--------------- Menu perso ------------------*/
 function affichemenu(menuperso){
	 if(document.getElementById(menuperso).style.display == "none"){
		document.getElementById(menuperso).style.display = "inline-block";
	}	 
	 else{
		 document.getElementById(menuperso).style.display = "none";
	}	 
 }
 

/*--------------- Menu Monstre ------------------*/ 
function infopvMonstre(monstre,label) {
		var pv = document.getElementById(monstre);
		var prc = document.getElementById(label);
		prc.innerHTML = pv.value;
	
}

function modifpvmonstre(monstre,label,imgmonstre) {
		var val = (Math.round(Math.random() * (-15)-10));
		var pv = document.getElementById(monstre) ;
		if((pv.value+val)<=pv.max && (pv.value+val)>=0){
			pv.value += val ;
		}
		else if((pv.value+val)<0){
			 pv.value = 0 ;
			 afficheMonstre(imgmonstre);
		}
	infopvMonstre(monstre,label); 							/* lance la fonction infoMonstre*/
}

function afficheMonstre(imgmonstre){
	 if(document.getElementById(imgmonstre).style.display == "none"){
		document.getElementById(imgmonstre).style.display = "inline-block";
	}	 
	 else{
		 document.getElementById(imgmonstre).style.display = "none";
	}	 
 }
/*--------------- Fonction bouton ------------------*/

 function clicperso(menuperso) {	//Bouton d'attaque sur monstre avec en parametre le monstre attaquer
	affichemenu(menuperso)	
 }
 
 function clicattaque(){
	active_bouton_monstre()
	
 }
 
 
 function clicmonstre(monstre,label,imgmonstre) {	//Bouton d'attaque sur monstre avec en parametre le monstre attaquer
	modifpvmonstre(monstre,label,imgmonstre)
	desactive_bouton_monstre()
	desactive_menu_perso()
 }
 
 
 
 
 
 
 /*--------------- Liste info  ------------------*/
 
 
 // clic perso 			> lance la fonction affichemenu(persoclicquer) sur le perso clicquer		>> affiche menu du perso     	///////////////

 // clic menu attaque 	> lance la fonction clicattaque(persoNum) 		>> desactive autre choix 	>> active bouton monstre		
 // clic menu defence	> lance la fonction clicdefence(persoNum) 		>> desactive autre choix	>>Donne un bouclier au perso cliquer
 // clic menu special	>> voir en fonction des joueurs
 
 
 // clic monstre 		> lance la fonction clicmonstre(monstre,label) sur le monstre clicquer		>>Monstre perd de la vie 	>> reactive autre choix menu sauf specail si mana =0 et desactive choix fait		>> masque menu perso		>>descative perso fait 		>> desactive bouton monstre >>check hp monstre
 // clic findetour		> lance la fonction findetour	>>lance attaque des monstre		>>reactive les perso		>>check hp perso
 
 
 
 // clic menu special	j1 		 >> desactive autre choix  >> diminue mana 
 
 
/* document.getElementById('buttonattaqueperso1').disabled=false*/
/*oDomElement.style.visibility= "visible";*/