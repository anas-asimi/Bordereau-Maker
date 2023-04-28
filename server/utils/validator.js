export const isValid = ({ number, date, sender, receiver, content, quantite }) => {

    console.log(typeof number , number);
    console.log(typeof date , date);
    console.log(typeof sender , sender);
    console.log(typeof receiver , receiver);
    console.log(typeof content , content);
    console.log(typeof quantite , quantite);

    number = parseInt(Number(number))
    quantite = parseInt(Number(quantite))
    date = Date.parse(date)

    // general checking
    if (!(number && date && sender && receiver && content && quantite)) return false
    
    // number checking
    if (Number.isNaN(number) || number < 1) return false
    
    // quantite checking
    if (Number.isNaN(quantite) || quantite < 1) return false
    
    // date checking
    if (Number.isNaN(date)) return false    
    
    return true
}