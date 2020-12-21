

/*--------------- Menu Monstre ------------------*/
 
function infopvMonstre(monstre,label) {
		var pv = document.getElementById(monstre);
		var prc = document.getElementById(label);
		prc.innerHTML = pv.value;
	
}

function modifpvmonstre(monstre,label) {
		var val = (Math.round(Math.random() * (-15)-10));
		var pv = document.getElementById(monstre) ;
		if((pv.value+val)<=pv.max && (pv.value+val)>=0){
			pv.value += val ;
		}
		else if((pv.value+val)<0){
			 pv.value = 0 ;
		}
	infopvMonstre(monstre,label); 							/* lance la fonction infoMonstre*/
}




/*--------------- Fonction bouton ------------------*/





function clicmonstre(monstre,label) {	//Bouton d'attaque sur monstre avec en parametre le monstre attaquer
	modifpvmonstre(monstre,label)
 }
 
 
 /*--------------- Liste info  ------------------*/
 
 
 // clic perso 			> lance la fonction affichemenu(persoclicquer) sur le perso clicquer		>> affiche menu du perso     	

 // clic menu attaque 	> lance la fonction clicattaque(persoNum) 		>> desactive autre choix 	>> active bouton monstre
 // clic menu defence	> lance la fonction clicdefence(persoNum) 		>> desactive autre choix	>>Donne un bouclier au perso cliquer
 // clic menu special	>> voir en fonction des joueurs
 
 
 // clic monstre 		> lance la fonction clicmonstre(monstre,label) sur le monstre clicquer		>>Monstre perd de la vie 	>> reactive autre choix menu sauf specail si mana =0 et desactive choix fait		>> masque menu perso		>>descative perso fait 		>> desactive bouton monstre >>check hp monstre
 // clic findetour		> lance la fonction findetour	>>lance attaque des monstre		>>reactive les perso		>>check hp perso
 
 
 
 // clic menu special	j1 		 >> desactive autre choix  >> diminue mana 