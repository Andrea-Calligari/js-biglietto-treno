// Chiedere numero km e età
const km = prompt('Inserisci il numero di km da percorrere')//string
const years = prompt('Mettere la propria età');//string

// Prezzo biglietto 
let ticketPrice = 0.21 * km;//number


const VarPriceUnder = ticketPrice * 20 / 100; //number
const VarPriceOver = ticketPrice * 40 / 100;//number

const TotalPrice = ticketPrice - VarPriceUnder || VarPriceOver;//number
//IF 20% sconto per minorenni


if(years < 18){
    console.log (' Lo sconto applicato è di €: ' + parseFloat(VarPriceUnder).toFixed(2));
    console.log( 'il prezzo finale è di €: ' +  parseFloat(TotalPrice).toFixed(2));
    
    //IF ELSE 40% sconto over 65


}else if(years > 65){

    console.log (' Lo sconto applicato è di  €: ' + parseFloat(VarPriceOver).toFixed(2));
    console.log( 'il prezzo finale è di €: ' +  parseFloat(TotalPrice).toFixed(2));

    
}
else{
    console.log(' il costo del biglietto è €:  ' + '€' + parseFloat(ticketPrice).toFixed(2) );

}






