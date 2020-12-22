var boostdommage = -0 
var malediction = -0 


var Perso = ['pvperso1', 'pvperso2', 'pvperso3', 'pvperso4'];



/*--------------- Menu perso ------------------*/
 function affichemenu(menuperso){
	 if(document.getElementById(menuperso).style.display == "none"){
		document.getElementById(menuperso).style.display = "inline-block";
	}	 
	 else{
		 document.getElementById(menuperso).style.display = "none";
	}	 
 }
 
 function desaffiche_menu_perso(perso){
	document.getElementById(perso).style.display= "none";
	document.getElementById(perso).style.display= "none";
	document.getElementById(perso).style.display= "none";
	document.getElementById(perso).style.display= "none";
}

function desative_choix(choix,perso){

	if(choix == "boutonAttaque"){
		if (perso == "menuperso1"){
			document.getElementById('boutonattperso1').disabled=true;
			document.getElementById('boutondefenseperso1').disabled=false;
			if(document.getElementById('manaperso1').value >=25){
				document.getElementById('boutonspecialperso1').disabled=false;
			}
			else{
				document.getElementById('boutonspecialperso1').disabled=true;
			}
		}
		if (perso == "menuperso2"){
			document.getElementById('boutonattperso2').disabled=true;
			document.getElementById('boutondefenseperso2').disabled=false;
			if(document.getElementById('manaperso1').value >=25){
				document.getElementById('boutonspecialperso1').disabled=false;
			}
			else{
				document.getElementById('boutonspecialperso1').disabled=true;
			}
		}
		if (perso == "menuperso3"){
			document.getElementById('boutonattperso3').disabled=true;
			document.getElementById('boutondefenseperso3').disabled=false;
			if(document.getElementById('manaperso1').value >=25){
				document.getElementById('boutonspecialperso1').disabled=false;
			}
			else{
				document.getElementById('boutonspecialperso1').disabled=true;
			}
		}
		if (perso == "menuperso4"){
			document.getElementById('boutonattperso4').disabled=true;
			document.getElementById('boutondefenseperso4').disabled=false;
			if(document.getElementById('manaperso1').value >=25){
				document.getElementById('boutonspecialperso1').disabled=false;
			}
			else{
				document.getElementById('boutonspecialperso1').disabled=true;
			}
		}	
	}
	if(choix == "boutonDefense"){
		if (perso == "menuperso1"){
			document.getElementById('boutonattperso1').disabled=false;
			document.getElementById('boutondefenseperso1').disabled=true;
			if(document.getElementById('manaperso1').value >=25){
				document.getElementById('boutonspecialperso1').disabled=false;
			}
			else{
				document.getElementById('boutonspecialperso1').disabled=true;
			}
		}
		if (perso == "menuperso2"){
			document.getElementById('boutonattperso2').disabled=false;
			document.getElementById('boutondefenseperso2').disabled=true;
			if(document.getElementById('manaperso1').value >=25){
				document.getElementById('boutonspecialperso1').disabled=false;
			}
			else{
				document.getElementById('boutonspecialperso1').disabled=true;
			}
		}
		if (perso == "menuperso3"){
			document.getElementById('boutonattperso3').disabled=false;
			document.getElementById('boutondefenseperso3').disabled=true;
			if(document.getElementById('manaperso1').value >=25){
				document.getElementById('boutonspecialperso1').disabled=false;
			}
			else{
				document.getElementById('boutonspecialperso1').disabled=true;
			}
		}
		if (perso == "menuperso4"){
			document.getElementById('boutonattperso4').disabled=false;
			document.getElementById('boutondefenseperso4').disabled=true;
			if(document.getElementById('manaperso1').value >=25){
				document.getElementById('boutonspecialperso1').disabled=false;
			}
			else{
				document.getElementById('boutonspecialperso1').disabled=true;
			}
		}	
	}
	if(choix == "boutonSpecial"){
		if (perso == "menuperso1"){
			document.getElementById('boutonattperso1').disabled=false;
			document.getElementById('boutondefenseperso1').disabled=false;
			if(document.getElementById('manaperso1').value >=25){
				document.getElementById('boutonspecialperso1').disabled=false;
			}
			else{
				document.getElementById('boutonspecialperso1').disabled=true;
			}
		}
		if (perso == "menuperso2"){
			document.getElementById('boutonattperso2').disabled=false;
			document.getElementById('boutondefenseperso2').disabled=false;
			if(document.getElementById('manaperso1').value >=25){
				document.getElementById('boutonspecialperso1').disabled=false;
			}
			else{
				document.getElementById('boutonspecialperso1').disabled=true;
			}
		}
		if (perso == "menuperso3"){
			document.getElementById('boutonattperso3').disabled=false;
			document.getElementById('boutondefenseperso3').disabled=false;
			if(document.getElementById('manaperso1').value >=25){
				document.getElementById('boutonspecialperso1').disabled=false;
			}
			else{
				document.getElementById('boutonspecialperso1').disabled=true;
			}
		}
		if (perso == "menuperso4"){
			document.getElementById('boutonattperso4').disabled=false;
			document.getElementById('boutondefenseperso4').disabled=false;
			if(document.getElementById('manaperso1').value >=25){
				document.getElementById('boutonspecialperso1').disabled=false;
			}
			else{
				document.getElementById('boutonspecialperso1').disabled=true;
			}
		}	
	}	 
}


function ajoutdefence(perso){			//choix=boutonDefense //perso = menuperso1-2-3-4
	if (perso == "menuperso1"){
		
		var val = 10;
		var pv = document.getElementById('bouclierperso1') ;
		if((pv.value+val)<=pv.max){
			pv.value += val ;
		}
		else if((pv.value+val)>=pv.max){
			 pv.value = pv.max ;
		}
		var pv = document.getElementById('bouclierperso1');
		var prc = document.getElementById('labelbouclierperso1');
		prc.innerHTML = pv.value;						
		
	}
	if (perso == "menuperso2"){
		
		var val = 10;
		var pv = document.getElementById('bouclierperso2') ;
		if((pv.value+val)<=pv.max){
			pv.value += val ;
		}
		else if((pv.value+val)>=pv.max){
			 pv.value = pv.max ;
		}
		var pv = document.getElementById('bouclierperso2');
		var prc = document.getElementById('labelbouclierperso2');
		prc.innerHTML = pv.value;						
		
	}
	if (perso == "menuperso3"){
		
		var val = 10;
		var pv = document.getElementById('bouclierperso3') ;
		if((pv.value+val)<=pv.max){
			pv.value += val ;
		}
		else if((pv.value+val)>=pv.max){
			 pv.value = pv.max ;
		}
		var pv = document.getElementById('bouclierperso3');
		var prc = document.getElementById('labelbouclierperso3');
		prc.innerHTML = pv.value;						
		
	}
	if (perso == "menuperso4"){
		
		var val = 10;
		var pv = document.getElementById('bouclierperso4') ;
		if((pv.value+val)<=pv.max){
			pv.value += val ;
		}
		else if((pv.value+val)>=pv.max){
			 pv.value = pv.max ;
		}
		var pv = document.getElementById('bouclierperso4');
		var prc = document.getElementById('labelbouclierperso4');
		prc.innerHTML = pv.value;						
		
	}
}

function desactive_bouton_Perso(perso){
	if (perso == "menuperso1"){
		document.getElementById('boutonPerso1').disabled=true;
	}
	if (perso == "menuperso2"){
		document.getElementById('boutonPerso2').disabled=true;
	}
	if (perso == "menuperso3"){
		document.getElementById('boutonPerso3').disabled=true;
	}
	if (perso == "menuperso4"){
		document.getElementById('boutonPerso4').disabled=true;
	}

}


function active_bouton_Perso(){
	document.getElementById('boutonPerso1').disabled=false;
	document.getElementById('boutonPerso2').disabled=false;
	document.getElementById('boutonPerso3').disabled=false;
	document.getElementById('boutonPerso4').disabled=false;
}

function affichePerso(randomPerso,randomvtab){
	if(randomPerso== "pvperso1"){
			document.getElementById('boutonPerso1').style.display = "none";
	}
	if(randomPerso == "pvperso2"){
			document.getElementById('boutonPerso2').style.display = "none";
	}	
	if(randomPerso== "pvperso3"){
			document.getElementById('boutonPerso3').style.display = "none";
	}
	if(randomPerso == "pvperso4"){
			document.getElementById('boutonPerso4').style.display = "none";
	}
	
	Perso.splice(randomvtab-1, 1);					//supp l'element du tableau			
 }	
	



/*--------------- Menu Monstre ------------------*/ 

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


function modifpvmonstre(monstre,label,imgmonstre) {
		var val = (Math.round(Math.random() * ((-15)-(-10)+1)-10));
		var pv = document.getElementById(monstre) ;
		if((pv.value+val+boostdommage)<=pv.max && (pv.value+val)>=0){			
			pv.value += val +boostdommage ;
		}
		else if((pv.value+val)<=0){
			 pv.value = 0 ;
			 afficheMonstre(imgmonstre);					/* lance la fonction afficheMonstre*/
		}
		var pv = document.getElementById(monstre);
		var prc = document.getElementById(label);
		prc.innerHTML = pv.value;							/* lance la fonction infoMonstre*/
}

function afficheMonstre(imgmonstre){
	 if(document.getElementById(imgmonstre).style.display == "none"){
		document.getElementById(imgmonstre).style.display = "inline-block";
	}	 
	 else{
		 document.getElementById(imgmonstre).style.display = "none";
	}	 
 }
 
function attaquemonstre(){
	if (document.getElementById('monstre1').style.display != "none"){

		var randomvtab = Math.floor(Math.random() * Perso.length);			//Pas du tous aleatoire ?
		var randomPerso = Perso[randomvtab];								//si perso mort ne trouve pas de nouveau perso 
		
		var val = (Math.round(Math.random() * ((-20)-(-10)+1)-10));
	
	
		if(randomPerso == "pvperso1"){
			var shield = document.getElementById('bouclierperso1') ;
			if((shield.value+val+malediction)>=0){			//malédiction		
				shield.value += val+malediction ;
				
				var pvj1= document.getElementById('bouclierperso1');
				var prcj1 = document.getElementById('labelbouclierperso1');
				prcj1.innerHTML = pvj1.value;		
			}
			else if((shield.value+val+malediction)<0){

				var pv = document.getElementById('pvperso1') ;
				if((pv.value+val+malediction)<=pv.max && (pv.value+val)>0){			//malédiction		
					pv.value += val+malediction ;				
				}
				else if((pv.value+val+malediction)<=0){
				pv.value = 0 ;
				affichePerso(randomPerso,randomvtab);					/* lance la fonction afficheP*/
				}
				var pvj1= document.getElementById('pvperso1');
				var prcj1 = document.getElementById('labelpvperso1');
				prcj1.innerHTML = pvj1.value;
			}
		}
		if(randomPerso == "pvperso2"){
			var shield = document.getElementById('bouclierperso2') ;
			if((shield.value+val+malediction)>=0){			//malédiction		
				shield.value += val+malediction ;
				
				var pvj1= document.getElementById('bouclierperso2');
				var prcj1 = document.getElementById('labelbouclierperso2');
				prcj1.innerHTML = pvj1.value;		
			}
			else if((shield.value+val+malediction)<0){
				var pv = document.getElementById('pvperso2') ;
				if((pv.value+val+malediction)<=pv.max && (pv.value+val)>0){			//malédiction		
					pv.value += val+malediction ;				
				}
				else if((pv.value+val+malediction)<=0){
				pv.value = 0 ;
				affichePerso(randomPerso,randomvtab);					/* lance la fonction afficheP*/
				}
				var pvj1= document.getElementById('pvperso2');
				var prcj1 = document.getElementById('labelpvperso2');
				prcj1.innerHTML = pvj1.value;
			}
		}
		if(randomPerso == "pvperso3"){
			var shield = document.getElementById('bouclierperso3') ;
			if((shield.value+val+malediction)>=0){			//malédiction		
				shield.value += val+malediction ;
				
				var pvj1= document.getElementById('bouclierperso3');
				var prcj1 = document.getElementById('labelbouclierperso3');
				prcj1.innerHTML = pvj1.value;		
			}
			else if((shield.value+val+malediction)<0){
				var pv = document.getElementById('pvperso3') ;
				if((pv.value+val+malediction)<=pv.max && (pv.value+val)>0){			//malédiction		
					pv.value += val+malediction ;				
				}
				else if((pv.value+val+malediction)<=0){
				pv.value = 0 ;
				affichePerso(randomPerso,randomvtab);					/* lance la fonction afficheP*/
				}
				var pvj1= document.getElementById('pvperso3');
				var prcj1 = document.getElementById('labelpvperso3');
				prcj1.innerHTML = pvj1.value;
			}
		}
		if(randomPerso == "pvperso4"){
			var shield = document.getElementById('bouclierperso4') ;
			if((shield.value+val+malediction)>=0){			//malédiction		
				shield.value += val+malediction ;
				
				var pvj1= document.getElementById('bouclierperso4');
				var prcj1 = document.getElementById('labelbouclierperso4');
				prcj1.innerHTML = pvj1.value;		
			}
			else if((shield.value+val+malediction)<0){
				var pv = document.getElementById('pvperso4') ;
				if((pv.value+val+malediction)<=pv.max && (pv.value+val)>0){			//malédiction		
					pv.value += val+malediction ;				
				}
				else if((pv.value+val+malediction)<=0){
				pv.value = 0 ;
				affichePerso(randomPerso,randomvtab);					/* lance la fonction afficheP*/
				}
				var pvj1= document.getElementById('pvperso4');
				var prcj1 = document.getElementById('labelpvperso4');
				prcj1.innerHTML = pvj1.value;
			}
		}
	}	
}

 
/*--------------- Fonction bouton ------------------*/

 function clicperso(menuperso) {	//Bouton d'attaque sur monstre avec en parametre le monstre attaquer
	affichemenu(menuperso);
	
 }
 
 function clicattaque(choix,perso){				//choix=boutonAttaque //perso = menuperso1-2-3-4
	active_bouton_monstre();
	desative_choix(choix,perso);
	desactive_bouton_Perso(perso)
	desaffiche_menu_perso(perso);
 }
 
 function clicdefense(choix,perso){				//choix=boutonDefense //perso = menuperso1-2-3-4
	ajoutdefence(perso);
	desative_choix(choix,perso);
	desactive_bouton_Perso(perso)
	desaffiche_menu_perso(perso);
 }
 
 function clicSpecial(choix,perso){				//choix=boutonDefense //perso = menuperso1-2-3-4
	
	//coutmana(); 
	//attaquespé();
	desative_choix(choix,perso);
	desactive_bouton_Perso(perso);
	desaffiche_menu_perso(perso);
 }
 
 function clicmonstre(monstre,label,imgmonstre) {	//Bouton d'attaque sur monstre avec en parametre le monstre attaquer
	modifpvmonstre(monstre,label,imgmonstre);
	desactive_bouton_monstre();
 }
 
 function findetour(){
	 active_bouton_Perso();
	 attaquemonstre();

	 //checkspecial 		check nb tour boost/poison   if tpoison = 3 dega monstre  tboostdmg = 1 degadbonus
	 //check hp perso
	 //check hp monstre
}
 
 
 /*

Special perso1 :
	-boost dommage : + 10 dega pdt 1 tour	

Special perso2 :
	-Malédiction : les monstre font -5 de dega pdt 2 tous 	//le tour peut augmenter su ult réutilisé
	
Special perso3 :
	-Heal	: + 25 hp sur joueur les plus low hp

Special perso4 :
	-poison : - 7 dmg sur 2 tour à tous les monstres 		//le tour peut augmenter su ult réutilisé
 



 /*--------------- Liste info  ------------------*/
 
 // clic menu special	> voir en fonction des joueurs		>> desactive autre choix  >> diminue mana  >>descative perso fait
 
 
 // clic monstre 		> lance la fonction clicmonstre(monstre,label) sur le monstre clicquer		>>Monstre perd de la vie >> desactive bouton monstre >>check hp monstre	
 // clic findetour		> lance la fonction findetour	>>lance attaque des monstre		>>reactive les perso		>>check hp perso
 
 
 
 