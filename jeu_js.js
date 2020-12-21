

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
 
 
 // clic perso 			> lance la fonction affichemenu sur le perso clicquer		>> affiche menu perso     	

 // clic menu attaque 	> lance la fonction clicattaque 	 > desactive autre choix 	>> active bouton monstre
 // clic menu defence	> desactive autre choix
 // clic menu special	> desactive autre choix
 
 
 // clic monstre 		> lance la fonction clicmonstre sur le monstre clicquer		>> reactive autre choix menu et desactive choix fait		>> masque menu perso		>>descative perso fait 		>> desactive bouton monstre >>check hp monstre
 // clic findetour		>lance attaque des monstre		>>reactive les perso
 
 