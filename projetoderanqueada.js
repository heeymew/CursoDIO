function calculoDeElo(calculo)
{
  if(calculo < 10)
    {
        elo = "Ferro";
    } 
    else if (calculo >= 11 && calculo <= 20) 
    {
        elo =  "Bronze";
    } 
    else if (calculo >= 21 && calculo <= 50)
    {
        elo = "Prata";
    }
    else if (calculo >= 51 && calculo < 80) 
    {
        elo = "Ouro";  
    }
    else if (calculo >= 81 && calculo < 90)
    {
        elo = "Diamante";
    }
    else if (calculo >= 91 && calculo < 100)
    {
        elo = "Lendário";
    }
    else
    {
        elo = "Imortal";
    }
}

let vitorias = 74;
let derrotas = 18;
let calculo = vitorias - derrotas;

calculoDeElo(calculo);
console.log(elo);