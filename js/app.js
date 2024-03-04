// Chiedere numero km e età
const km = prompt('Inserisci il numero di km da percorrere')//string
const years = prompt('Inserire la propria età');//string

// Prezzo biglietto 
let ticketPrice = 0.21 * km;//number


//Sconti 20% e 40% 
const varPriceUnder = ticketPrice * 20 / 100; //number
const varPriceOver = ticketPrice * 40 / 100;//number

//Prezzi scontati 20% 40%
const totalPriceOver = ticketPrice - varPriceOver;
const totalPriceUnder = ticketPrice - varPriceUnder;

//IF 20% sconto per minorenni

if(years <= 18){
    console.log(' Il prezzo del biglietto è di €: ' + ticketPrice.toFixed(2));
    console.log (' Lo sconto applicato è di €: ' +  varPriceUnder.toFixed(2));
    console.log( 'Il prezzo scontato del biglietto è di €:' + totalPriceUnder.toFixed(2));
    
    //IF ELSE 40% sconto over 65


}else if(years >= 65){
    console.log(' Il prezzo del biglietto è di €: ' + ticketPrice.toFixed(2));
    console.log (' Lo sconto applicato è di  €: ' + varPriceOver.toFixed(2));
    console.log( 'Il prezzo scontato del biglietto è di €: ' +  totalPriceOver.toFixed(2));
}

else{
     console.log('Il prezzo del biglietto è di €: ' + ticketPrice.toFixed(2));

}






