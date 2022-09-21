export function beastFilter (cr, beasts) {
    const filteredBeasts = []
    for (let i = 0; i < beasts.length; i++) {
        const beast = beasts[i];
        if (beast.challenge_rating === cr) {
            filteredBeasts.push(beast)
        }     
    }
    return(filteredBeasts)
   }