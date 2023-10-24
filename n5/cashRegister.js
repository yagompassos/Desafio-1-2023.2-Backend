const cUnit = [
    ["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], 
    ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], 
    ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]
];

function checkCashRegister(price, cash, cid) {
    let retorno = { status: "", change: [] };
    let changeDue = cash - price;
    let availableCash = cid.reduce((total, [, counter]) => total + counter, 0);

    if (availableCash < changeDue) {
        retorno.status = "INSUFFICIENT_FUNDS";
        return retorno;
    } else if (availableCash === changeDue) {
        retorno.status = "CLOSED";
        retorno.change = cid;
        return retorno;
    } else {
        for (let i = 8; i >= 0; i--) {
            let unitAtual = cUnit[i][1];
            let cidAtual = cid[i][1];
            let counter = 0;

            while (changeDue >= unitAtual && cidAtual > 0) {
                changeDue -= unitAtual;
                changeDue = Math.round(changeDue * 100) / 100;
                cid[i][1] -= unitAtual;
                counter += unitAtual;
                cidAtual -= unitAtual;
            }

            if (counter > 0) {
                retorno.change.push([cUnit[i][0], counter]);
            }
        }

        if (changeDue > 0) {
            retorno.status = "INSUFFICIENT_FUNDS";
            retorno.change = [];
        } else {
            retorno.status = "OPEN";
        }

        return retorno;
    }
}

  
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], 
                            ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], 
                            ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);