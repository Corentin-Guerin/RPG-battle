var boostdommage = -0 
var tourboost = 0
var malediction = 0 
var tourmalediction =0



var Perso = ['pvperso1', 'pvperso2', 'pvperso3', 'pvperso4'];



/*--------------- Menu perso ------------------*/
function checkhpperso(){
	if (document.getElementById('boutonPerso1').style.display == "none" &&
		document.getElementById('boutonPerso2').style.display == "none" &&
		document.getElementById('boutonPerso3').style.display == "none" &&
		document.getElementById('boutonPerso4').style.display == "none"){
			
		document.getElementById('interfaceperdu').style.display = "flex"
	
	}
}

 function affichemenu(menuperso){
	 if(document.getElementById(menuperso).style.display == "inline-block"){
		document.getElementById(menuperso).style.display =  "none";
	}	 
	 else{
		 document.getElementById(menuperso).style.display = "inline-block";
	}	 
 }
 
 
  function desaffichemenu(){
	 document.getElementById('menuperso1').style.display= "none";
	 document.getElementById('menuperso2').style.display= "none";
	 document.getElementById('menuperso3').style.display= "none";
	 document.getElementById('menuperso4').style.display= "none";
 }
 
 
 
 function desaffiche_menu_perso(perso){
	document.getElementById(perso).style.display= "none";
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
	
	Perso.splice(randomvtab, 1);					//supp l'element du tableau			
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
			if(document.getElementById('manaperso2').value >=25){
				document.getElementById('boutonspecialperso2').disabled=false;
			}
			else{
				document.getElementById('boutonspecialperso2').disabled=true;
			}
		}
		if (perso == "menuperso3"){
			document.getElementById('boutonattperso3').disabled=true;
			document.getElementById('boutondefenseperso3').disabled=false;
			if(document.getElementById('manaperso3').value >=25){
				document.getElementById('boutonspecialperso3').disabled=false;
			}
			else{
				document.getElementById('boutonspecialperso3').disabled=true;
			}
		}
		if (perso == "menuperso4"){
			document.getElementById('boutonattperso4').disabled=true;
			document.getElementById('boutondefenseperso4').disabled=false;
			if(document.getElementById('manaperso4').value >25){
				document.getElementById('boutonspecialperso4').disabled=false;
			}
			else{
				document.getElementById('boutonspecialperso4').disabled=true;
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
			if(document.getElementById('manaperso2').value >=25){
				document.getElementById('boutonspecialperso2').disabled=false;
			}
			else{
				document.getElementById('boutonspecialperso2').disabled=true;
			}
		}
		if (perso == "menuperso3"){
			document.getElementById('boutonattperso3').disabled=false;
			document.getElementById('boutondefenseperso3').disabled=true;
			if(document.getElementById('manaperso3').value >=25){
				document.getElementById('boutonspecialperso3').disabled=false;
			}
			else{
				document.getElementById('boutonspecialperso3').disabled=true;
			}
		}
		if (perso == "menuperso4"){
			document.getElementById('boutonattperso4').disabled=false;
			document.getElementById('boutondefenseperso4').disabled=true;
			if(document.getElementById('manaperso4').value >=25){
				document.getElementById('boutonspecialperso4').disabled=false;
			}
			else{
				document.getElementById('boutonspecialperso4').disabled=true;
			}
		}	
	}
	if(choix == "boutonSpecial"){
		if (perso == "menuperso1"){
			document.getElementById('boutonattperso1').disabled=false;
			document.getElementById('boutondefenseperso1').disabled=false;
			if(document.getElementById('manaperso1').value >=25){
				document.getElementById('boutonspecialperso1').disabled=true;
			}
			else{
				document.getElementById('boutonspecialperso1').disabled=true;
			}
		}
		if (perso == "menuperso2"){
			document.getElementById('boutonattperso2').disabled=false;
			document.getElementById('boutondefenseperso2').disabled=false;
			if(document.getElementById('manaperso2').value >=25){
				document.getElementById('boutonspecialperso2').disabled=true;
			}
			else{
				document.getElementById('boutonspecialperso2').disabled=true;
			}
		}
		if (perso == "menuperso3"){
			document.getElementById('boutonattperso3').disabled=false;
			document.getElementById('boutondefenseperso3').disabled=false;
			if(document.getElementById('manaperso3').value >=25){
				document.getElementById('boutonspecialperso3').disabled=true;
			}
			else{
				document.getElementById('boutonspecialperso3').disabled=true;
			}
		}
		if (perso == "menuperso4"){
			document.getElementById('boutonattperso4').disabled=false;
			document.getElementById('boutondefenseperso4').disabled=false;
			if(document.getElementById('manaperso4').value >=25){
				document.getElementById('boutonspecialperso4').disabled=true;
			}
			else{
				document.getElementById('boutonspecialperso4').disabled=true;
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



function coutmana(perso){				//menuperso4
	var val = 25;
	if (perso == "menuperso1"){
		
		var mana = document.getElementById('manaperso1') ;
		if(mana.value+val>0 && mana.value>=25){
			mana.value -= val ;
		}
		else if((mana.value+val)<=0|| mana.value<25){
			 mana.value = 0 ;
			 document.getElementById('boutonspecialperso1').disabled=false;
		}
		var mana= document.getElementById('manaperso1');
		var prc = document.getElementById('labelmanaperso1');
		prc.innerHTML = mana.value;						
	}
	if (perso == "menuperso2"){
		
		var mana = document.getElementById('manaperso2') ;
		if(mana.value+val>0 && mana.value>=25){
			mana.value -= val ;
		}
		else if((mana.value+val)<=0|| mana.value<25){
			 mana.value = 0 ;
			 document.getElementById('boutonspecialperso2').disabled=false;
		}
		var mana= document.getElementById('manaperso2');
		var prc = document.getElementById('labelmanaperso2');
		prc.innerHTML = mana.value;						
	}
	if (perso == "menuperso3"){
		
		var mana = document.getElementById('manaperso3') ;
		if(mana.value+val>0 && mana.value>=25){
			mana.value -= val ;
		}
		else if((mana.value+val)<=0|| mana.value<25){
			 mana.value = 0 ;
			 document.getElementById('boutonspecialperso3').disabled=false;
		}
		var mana= document.getElementById('manaperso3');
		var prc = document.getElementById('labelmanaperso3');
		prc.innerHTML = mana.value;						
	}
	if (perso == "menuperso4"){
		
		var mana = document.getElementById('manaperso4') ;
		if(mana.value+val>0 && mana.value>=25){
			mana.value -= val ;
		}
		else if((mana.value+val)<=0|| mana.value<25){
			 mana.value = 0 ;
			 document.getElementById('boutonspecialperso4').disabled=false;
		}
		var mana= document.getElementById('manaperso4');
		var prc = document.getElementById('labelmanaperso4');
		prc.innerHTML = mana.value;						
	}
}


function checkspecial(){
	if(tourmalediction>0){
		tourmalediction -= 1;
	}
	if(tourmalediction==0){
		malediction = 0 ;
	}
	if(tourboost>=0){
		tourboost -= 1;
	}
	if(tourboost ==0) {
		boostdommage = 0 ;
	}
	
}

function attaquespe(perso){
	if(perso == "menuperso1") {					//Perso1 = Heal 	
		//heal() ;
		attboost()	;	
	}
	if(perso == "menuperso2") {					//Perso2 = malediction	
		maudit();
	}
	if(perso == "menuperso3") {					//Perso3 = Heal 	
		heal() ;
	}
	if(perso == "menuperso4") {					//Perso4 = Heal 	
		heal() ;	
		//poison()
	}
}
function maudit(){
	malediction = 7 ;
	tourmalediction = 2	;					//2 tours 
}
function attboost(){
	boostdommage = -10 ;
	tourboost  = 1;
}





function heal(){
	var val = 30;																//var detien la plus grand add +30 val pv var2
	var valhpperso =  document.getElementById('pvperso1')
	if(valhpperso.value > document.getElementById('pvperso2').value){
			valhpperso =  document.getElementById('pvperso2')
	}
	if(valhpperso.value > document.getElementById('pvperso3').value){
			valhpperso =  document.getElementById('pvperso3')
	}
	if(valhpperso.value > document.getElementById('pvperso4').value){
			valhpperso =  document.getElementById('pvperso4')
	}

	if((valhpperso.value+val)<=valhpperso.max){
		valhpperso.value += val ;
	}
	else if((valhpperso.value+val)>=valhpperso.max){
		 valhpperso.value = valhpperso.max ;
	}
	if(valhpperso == document.getElementById('pvperso1')){
		var prc = document.getElementById('labelpvperso1');
		prc.innerHTML = valhpperso.value;
	}
	if(valhpperso == document.getElementById('pvperso2')){
		var prc = document.getElementById('labelpvperso2');
		prc.innerHTML = valhpperso.value;
	}
	if(valhpperso == document.getElementById('pvperso3')){
		var prc = document.getElementById('labelpvperso3');
		prc.innerHTML = valhpperso.value;
	}
	if(valhpperso == document.getElementById('pvperso4')){
		var prc = document.getElementById('labelpvperso4');
		prc.innerHTML = valhpperso.value;
	}
}

/*--------------- Menu Monstre ------------------*/ 

function checkhpmonstre(){

	if (document.getElementById('monstre1').style.display == "none" &&
		document.getElementById('monstre2').style.display == "none" &&
		document.getElementById('monstre3').style.display == "none" ){
			
		document.getElementById('interfacegagne').style.display = "flex"
		
	}
}

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
		if((pv.value+val+boostdommage)<=pv.max && (pv.value+val)>0){			
			pv.value += val +boostdommage ;
		}
		else if((pv.value+val)<=0){
			 pv.value = 0 ;
			 afficheMonstre(imgmonstre);					/* lance la fonction afficheMonstre*/
		}
		var pv = document.getElementById(monstre);
		var prc = document.getElementById(label);
		prc.innerHTML = pv.value;							
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

		var randomvtab = Math.floor(Math.random() * Perso.length);			
		var randomPerso = Perso[randomvtab];								
		
		var val = (Math.round(Math.random() * ((-20)-(-15)+1)-15));
	
	
		if(randomPerso == "pvperso1"){
			var shield = document.getElementById('bouclierperso1') ;
			if((shield.value+val+malediction)>=0){			//malédiction		
				shield.value+= val+malediction ;
				
				var prcbouclierj1 = document.getElementById('labelbouclierperso1');
				prcbouclierj1.innerHTML = shield.value;		
			}
			else if((shield.value+val+malediction)<=0){
				var degassup = shield.value+val+malediction
				shield.value = 0 ;	
				var prcbouclierj1 = document.getElementById('labelbouclierperso1');
				prcbouclierj1.innerHTML = shield.value;			
	
				var pvj1= document.getElementById('pvperso1');
				var prcpvj1 = document.getElementById('labelpvperso1');
				
				pvj1.value += degassup ;
				prcpvj1.innerHTML = pvj1.value;
				if((pvj1.value)<=0){
					pvj1.value = 0 ;
					affichePerso(randomPerso,randomvtab);					/* lance la fonction affichePerso*/
				}
				var pvj1= document.getElementById('pvperso1');
				var prcj1 = document.getElementById('labelpvperso1');
				prcj1.innerHTML = pvj1.value;
			}
		}
		if(randomPerso == "pvperso2"){
			var shield = document.getElementById('bouclierperso2') ;
			if((shield.value+val+malediction)>=0){			//malédiction		
				shield.value+= val+malediction ;
				
				
				var prcbouclierj2 = document.getElementById('labelbouclierperso2');
				prcbouclierj2.innerHTML = shield.value;		
			}
			else if((shield.value+val+malediction)<=0){
				var degassup = shield.value+val+malediction
				shield.value = 0 ;	
				var prcbouclierj2 = document.getElementById('labelbouclierperso2');
				prcbouclierj2.innerHTML = shield.value;			
	
				var pvj2= document.getElementById('pvperso2');
				var prcpvj2 = document.getElementById('labelpvperso2');
				
				pvj2.value += degassup ;
				prcpvj2.innerHTML = pvj2.value;
				if((pvj2.value)<=0){
					pvj2.value = 0 ;
					affichePerso(randomPerso,randomvtab);					/* lance la fonction affichePerso*/
				}
				var pvj2= document.getElementById('pvperso2');
				var prcj2 = document.getElementById('labelpvperso2');
				prcj2.innerHTML = pvj2.value;
			}
		}
		if(randomPerso == "pvperso3"){
			var shield = document.getElementById('bouclierperso3') ;
			if((shield.value+val+malediction)>=0){			//malédiction		
				shield.value+= val+malediction ;
				
				
				var prcbouclierj3 = document.getElementById('labelbouclierperso3');
				prcbouclierj3.innerHTML = shield.value;		
			}
			else if((shield.value+val+malediction)<=0){
				var degassup = shield.value+val+malediction
				shield.value = 0 ;	
				var prcbouclierj3 = document.getElementById('labelbouclierperso3');
				prcbouclierj3.innerHTML = shield.value;			
	
				var pvj3= document.getElementById('pvperso3');
				var prcpvj3 = document.getElementById('labelpvperso3');
				
				pvj3.value += degassup ;
				prcpvj3.innerHTML = pvj3.value;
				if((pvj3.value)<=0){
					pvj3.value = 0 ;
					affichePerso(randomPerso,randomvtab);					/* lance la fonction affichePerso*/
				}
				var pvj3= document.getElementById('pvperso3');
				var prcj3 = document.getElementById('labelpvperso3');
				prcj3.innerHTML = pvj3.value;
			}
		}
		if(randomPerso == "pvperso4"){
			var shield = document.getElementById('bouclierperso4') ;
			if((shield.value+val+malediction)>=0){			//malédiction		
				shield.value+= val+malediction ;
				
				
				var prcbouclierj4 = document.getElementById('labelbouclierperso4');
				prcbouclierj4.innerHTML = shield.value;		
			}
			else if((shield.value+val+malediction)<=0){
				var degassup = shield.value+val+malediction
				shield.value = 0 ;	
				var prcbouclierj4 = document.getElementById('labelbouclierperso4');
				prcbouclierj4.innerHTML = shield.value;			
	
				var pvj4= document.getElementById('pvperso4');
				var prcpvj4 = document.getElementById('labelpvperso4');
				
				pvj4.value += degassup ;
				prcpvj4.innerHTML = pvj4.value;
				if((pvj4.value)<=0){
					pvj4.value = 0 ;
					affichePerso(randomPerso,randomvtab);					/* lance la fonction affichePerso*/
				}
				var pvj4= document.getElementById('pvperso4');
				var prcj4 = document.getElementById('labelpvperso4');
				prcj4.innerHTML = pvj4.value;
			}
		}
	}	
	if (document.getElementById('monstre2').style.display != "none"){

		var randomvtab = Math.floor(Math.random() * Perso.length);			
		var randomPerso = Perso[randomvtab];								
		
		var val = (Math.round(Math.random() * ((-25)-(-17)+1)-17));
	
	
		if(randomPerso == "pvperso1"){
			var shield = document.getElementById('bouclierperso1') ;
			if((shield.value+val+malediction)>=0){			//malédiction		
				shield.value+= val+malediction ;
				
				var prcbouclierj1 = document.getElementById('labelbouclierperso1');
				prcbouclierj1.innerHTML = shield.value;		
			}
			else if((shield.value+val+malediction)<=0){
				var degassup = shield.value+val+malediction
				shield.value = 0 ;	
				var prcbouclierj1 = document.getElementById('labelbouclierperso1');
				prcbouclierj1.innerHTML = shield.value;			
	
				var pvj1= document.getElementById('pvperso1');
				var prcpvj1 = document.getElementById('labelpvperso1');
				
				pvj1.value += degassup ;
				prcpvj1.innerHTML = pvj1.value;
				if((pvj1.value)<=0){
					pvj1.value = 0 ;
					affichePerso(randomPerso,randomvtab);					/* lance la fonction affichePerso*/
				}
				var pvj1= document.getElementById('pvperso1');
				var prcj1 = document.getElementById('labelpvperso1');
				prcj1.innerHTML = pvj1.value;
			}
		}
		if(randomPerso == "pvperso2"){
			var shield = document.getElementById('bouclierperso2') ;
			if((shield.value+val+malediction)>=0){			//malédiction		
				shield.value+= val+malediction ;
				
				
				var prcbouclierj2 = document.getElementById('labelbouclierperso2');
				prcbouclierj2.innerHTML = shield.value;		
			}
			else if((shield.value+val+malediction)<=0){
				var degassup = shield.value+val+malediction
				shield.value = 0 ;	
				var prcbouclierj2 = document.getElementById('labelbouclierperso2');
				prcbouclierj2.innerHTML = shield.value;			
	
				var pvj2= document.getElementById('pvperso2');
				var prcpvj2 = document.getElementById('labelpvperso2');
				
				pvj2.value += degassup ;
				prcpvj2.innerHTML = pvj2.value;
				if((pvj2.value)<=0){
					pvj2.value = 0 ;
					affichePerso(randomPerso,randomvtab);					/* lance la fonction affichePerso*/
				}
				var pvj2= document.getElementById('pvperso2');
				var prcj2 = document.getElementById('labelpvperso2');
				prcj2.innerHTML = pvj2.value;
			}
		}
		if(randomPerso == "pvperso3"){
			var shield = document.getElementById('bouclierperso3') ;
			if((shield.value+val+malediction)>=0){			//malédiction		
				shield.value+= val+malediction ;
				
				
				var prcbouclierj3 = document.getElementById('labelbouclierperso3');
				prcbouclierj3.innerHTML = shield.value;		
			}
			else if((shield.value+val+malediction)<=0){
				var degassup = shield.value+val+malediction
				shield.value = 0 ;	
				var prcbouclierj3 = document.getElementById('labelbouclierperso3');
				prcbouclierj3.innerHTML = shield.value;			
	
				var pvj3= document.getElementById('pvperso3');
				var prcpvj3 = document.getElementById('labelpvperso3');
				
				pvj3.value += degassup ;
				prcpvj3.innerHTML = pvj3.value;
				if((pvj3.value)<=0){
					pvj3.value = 0 ;
					affichePerso(randomPerso,randomvtab);					/* lance la fonction affichePerso*/
				}
				var pvj3= document.getElementById('pvperso3');
				var prcj3 = document.getElementById('labelpvperso3');
				prcj3.innerHTML = pvj3.value;
			}
		}
		if(randomPerso == "pvperso4"){
			var shield = document.getElementById('bouclierperso4') ;
			if((shield.value+val+malediction)>=0){			//malédiction		
				shield.value+= val+malediction ;
				
				
				var prcbouclierj4 = document.getElementById('labelbouclierperso4');
				prcbouclierj4.innerHTML = shield.value;		
			}
			else if((shield.value+val+malediction)<=0){
				var degassup = shield.value+val+malediction
				shield.value = 0 ;	
				var prcbouclierj4 = document.getElementById('labelbouclierperso4');
				prcbouclierj4.innerHTML = shield.value;			
	
				var pvj4= document.getElementById('pvperso4');
				var prcpvj4 = document.getElementById('labelpvperso4');
				
				pvj4.value += degassup ;
				prcpvj4.innerHTML = pvj4.value;
				if((pvj4.value)<=0){
					pvj4.value = 0 ;
					affichePerso(randomPerso,randomvtab);					/* lance la fonction affichePerso*/
				}
				var pvj4= document.getElementById('pvperso4');
				var prcj4 = document.getElementById('labelpvperso4');
				prcj4.innerHTML = pvj4.value;
			}
		}
	}
	if (document.getElementById('monstre3').style.display != "none"){

		var randomvtab = Math.floor(Math.random() * Perso.length);			
		var randomPerso = Perso[randomvtab];								
		
		var val = (Math.round(Math.random() * ((-20)-(-15)+1)-15));
	
	
		if(randomPerso == "pvperso1"){
			var shield = document.getElementById('bouclierperso1') ;
			if((shield.value+val+malediction)>=0){			//malédiction		
				shield.value+= val+malediction ;
				
				var prcbouclierj1 = document.getElementById('labelbouclierperso1');
				prcbouclierj1.innerHTML = shield.value;		
			}
			else if((shield.value+val+malediction)<=0){
				var degassup = shield.value+val+malediction
				shield.value = 0 ;	
				var prcbouclierj1 = document.getElementById('labelbouclierperso1');
				prcbouclierj1.innerHTML = shield.value;			
	
				var pvj1= document.getElementById('pvperso1');
				var prcpvj1 = document.getElementById('labelpvperso1');
				
				pvj1.value += degassup ;
				prcpvj1.innerHTML = pvj1.value;
				if((pvj1.value)<=0){
					pvj1.value = 0 ;
					affichePerso(randomPerso,randomvtab);					/* lance la fonction affichePerso*/
				}
				var pvj1= document.getElementById('pvperso1');
				var prcj1 = document.getElementById('labelpvperso1');
				prcj1.innerHTML = pvj1.value;
			}
		}
		if(randomPerso == "pvperso2"){
			var shield = document.getElementById('bouclierperso2') ;
			if((shield.value+val+malediction)>=0){			//malédiction		
				shield.value+= val+malediction ;
				
				
				var prcbouclierj2 = document.getElementById('labelbouclierperso2');
				prcbouclierj2.innerHTML = shield.value;		
			}
			else if((shield.value+val+malediction)<=0){
				var degassup = shield.value+val+malediction
				shield.value = 0 ;	
				var prcbouclierj2 = document.getElementById('labelbouclierperso2');
				prcbouclierj2.innerHTML = shield.value;			
	
				var pvj2= document.getElementById('pvperso2');
				var prcpvj2 = document.getElementById('labelpvperso2');
				
				pvj2.value += degassup ;
				prcpvj2.innerHTML = pvj2.value;
				if((pvj2.value)<=0){
					pvj2.value = 0 ;
					affichePerso(randomPerso,randomvtab);					/* lance la fonction affichePerso*/
				}
				var pvj2= document.getElementById('pvperso2');
				var prcj2 = document.getElementById('labelpvperso2');
				prcj2.innerHTML = pvj2.value;
			}
		}
		if(randomPerso == "pvperso3"){
			var shield = document.getElementById('bouclierperso3') ;
			if((shield.value+val+malediction)>=0){			//malédiction		
				shield.value+= val+malediction ;
				
				
				var prcbouclierj3 = document.getElementById('labelbouclierperso3');
				prcbouclierj3.innerHTML = shield.value;		
			}
			else if((shield.value+val+malediction)<=0){
				var degassup = shield.value+val+malediction
				shield.value = 0 ;	
				var prcbouclierj3 = document.getElementById('labelbouclierperso3');
				prcbouclierj3.innerHTML = shield.value;			
	
				var pvj3= document.getElementById('pvperso3');
				var prcpvj3 = document.getElementById('labelpvperso3');
				
				pvj3.value += degassup ;
				prcpvj3.innerHTML = pvj3.value;
				if((pvj3.value)<=0){
					pvj3.value = 0 ;
					affichePerso(randomPerso,randomvtab);					/* lance la fonction affichePerso*/
				}
				var pvj3= document.getElementById('pvperso3');
				var prcj3 = document.getElementById('labelpvperso3');
				prcj3.innerHTML = pvj3.value;
			}
		}
		if(randomPerso == "pvperso4"){
			var shield = document.getElementById('bouclierperso4') ;
			if((shield.value+val+malediction)>=0){			//malédiction		
				shield.value+= val+malediction ;
				
				
				var prcbouclierj4 = document.getElementById('labelbouclierperso4');
				prcbouclierj4.innerHTML = shield.value;		
			}
			else if((shield.value+val+malediction)<=0){
				var degassup = shield.value+val+malediction
				shield.value = 0 ;	
				var prcbouclierj4 = document.getElementById('labelbouclierperso4');
				prcbouclierj4.innerHTML = shield.value;			
	
				var pvj4= document.getElementById('pvperso4');
				var prcpvj4 = document.getElementById('labelpvperso4');
				
				pvj4.value += degassup ;
				prcpvj4.innerHTML = pvj4.value;
				if((pvj4.value)<=0){
					pvj4.value = 0 ;
					affichePerso(randomPerso,randomvtab);					/* lance la fonction affichePerso*/
				}
				var pvj4= document.getElementById('pvperso4');
				var prcj4 = document.getElementById('labelpvperso4');
				prcj4.innerHTML = pvj4.value;
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
	coutmana(perso);
	attaquespe(perso);
			

	desative_choix(choix,perso);
	desactive_bouton_Perso(perso);
	desaffiche_menu_perso(perso);
 }
 
 function clicmonstre(monstre,label,imgmonstre) {	//Bouton d'attaque sur monstre avec en parametre le monstre attaquer
	modifpvmonstre(monstre,label,imgmonstre);
	desactive_bouton_monstre();
	checkhpmonstre() ;

 }
 
 function findetour(){
	desaffichemenu();
	active_bouton_Perso();
	attaquemonstre();
	
	checkspecial();				// 		check nb tour boost/malédiction
	checkhpmonstre() ; 
	checkhpperso() ;
	
}





 
 
 
 