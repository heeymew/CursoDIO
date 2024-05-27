let nomeDoHeroi = "Mew";
let exp = 6000;

function classificarExp(exp) {
    if(exp < 1000) 
    {
        return "Ferro";
    } 
    else if (exp >= 1001 && exp <= 2000) 
    {
        return "Bronze";
    } 
    else if (exp >= 2001 && exp <= 5000)
    {
        return "Prata";
    }
    else if (exp >= 5001 && 7000) 
    {
        return "Ouro";  
    }
    else if (exp >= 7001 && 8000)
    {
        return "Platina";
    }
    else if (exp >= 8001 && 9000)
    {
        return "Ascendente";
    }
    else if (exp >= 9001 && 10000)
    {
        return "Imortal";
    }
    else
    {
        return "Radiante";
    }
}

console.log(`O nível do herói ${nomeDoHeroi} é ${classificarExp(exp)}.`);