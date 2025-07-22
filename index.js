function main(){
    let wins = 339;
    let losses = 363;

    let victoryBalance = wins - losses;
    let ranking = getRankedTier(victoryBalance);

    console.log(`O Herói tem o saldo de ${victoryBalance} vitórias e está no nível ${ranking}`);
}

function getRankedTier(winBalance){
    let tiers = [
        {maxVictories: 10, tierName: "Ferro"},
        {maxVictories: 20, tierName: "Bronze"},
        {maxVictories: 50, tierName: "Prata"},
        {maxVictories: 80, tierName: "Ouro"},
        {maxVictories: 90, tierName: "Diamante"},
        {maxVictories: 100, tierName: "Lendário"},
        {maxVictories: Infinity, tierName: "Imortal"}
    ]

    for (let i = 0; i < tiers.length; i++){
        if (winBalance <= tiers[i].maxVictories){
            return tiers[i].tierName;
        }
    }
}

main();