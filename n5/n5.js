function checkCashRegister(price, cash, cid) {
  const valorMoedas = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  };

  let trocoDevido = Math.round((cash - price) * 100);
  let totalCaixa = 0;
  
  for (let i = 0; i < cid.length; i++) {
    totalCaixa += Math.round(cid[i][1] * 100);
  }

  if (totalCaixa < trocoDevido) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (totalCaixa === trocoDevido) {
    return { status: "CLOSED", change: cid };
  }

  let trocoArray = [];
  let cidInvertido = [...cid].reverse();

  for (let i = 0; i < cidInvertido.length; i++) {
    let nomeMoeda = cidInvertido[i][0];
    let valorDisponivel = Math.round(cidInvertido[i][1] * 100);
    let valorDaMoeda = valorMoedas[nomeMoeda];
    let valorUsado = 0;

    while (trocoDevido >= valorDaMoeda && valorDisponivel > 0) {
      trocoDevido -= valorDaMoeda;
      valorDisponivel -= valorDaMoeda;
      valorUsado += valorDaMoeda;
    }

    if (valorUsado > 0) {
      trocoArray.push([nomeMoeda, valorUsado / 100]);
    }
  }

  if (trocoDevido > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: trocoArray };
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
