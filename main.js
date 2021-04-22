 //declare les variable des boutons 
 var pierre = document.getElementById('pierre')
 var feuille = document.getElementById('feuille')
 var ciseaux = document.getElementById('ciseaux')
 //declare les variable des images
 var Pimg = document.getElementById('Pimg')
 var Rimg = document.getElementById('Rimg')
 //declare les variable des scores 
 var PscoreSpan = document.getElementById('Pscore')
 var RscoreSpan = document.getElementById('Rscore')
 //declare les variable des resultats scores 
 var pScore = 0
 var rScore = 0
 //déclarer le tableau d'élément [0,1,2]
 var images_option = ['pierre', 'feuille', 'ciseaux']
 //j'ai donné le parametre à Pchoice de (i) puis concatener les images 'images/' + la var du tableur + png
 //variable du Joueur (P = player)
 var Pchoice = (i) =>{
     Pimg.src = 'images/' + images_option[i] + '.png'
     Pimg.value = images_option[i]
     compareHands()
 }
 //variable du Robot (R = Robot)
 var Rchoice = (i) =>{
     Rimg.src = 'images/' + images_option[i] + '.png'
     Rimg.value = images_option[i]
 }
//math.floor =  arrondir le math.random qui est normalement à virgule
 pierre.addEventListener('click', ()=>{
     Rchoice(Math.floor(Math.random() * 3))
     Pchoice(0)
 })
 feuille.addEventListener('click', ()=>{
     Rchoice(Math.floor(Math.random() * 3))
     Pchoice(1)
 })
 ciseaux.addEventListener('click', ()=>{
     Rchoice(Math.floor(Math.random() * 3))
     Pchoice(2)
 })
 //FOnction pour comparer les mains Joueur vs Robot
 var compareHands = () => {
     if(Pimg.value == 'pierre'){
         if(Rimg.value == 'feuille'){
             rScore += 1
         }
         else if (Rimg.value == 'ciseaux'){
             pScore += 1
         }
         else if (Rimg.value == 'pierre'){
             
         }
     }
     else if(Pimg.value == 'ciseaux'){
         if(Rimg.value == 'pierre'){
             rScore += 1
         }
         else if (Rimg.value == 'feuille'){
             pScore += 1
         }
         else if (Rimg.value == 'ciseaux'){
             
         }
     }
     if(Pimg.value == 'feuille'){
         if(Rimg.value == 'ciseaux'){
             rScore += 1
         }
         else if (Rimg.value == 'pierre'){
             pScore += 1
         }
         else if (Rimg.value == 'feuille'){
             
         }
     }
     PscoreSpan.textContent = pScore
     RscoreSpan.textContent = rScore
 }