function calculate() {

    let balance = parseFloat(document.getElementById("balance").value);
    let risk = parseFloat(document.getElementById("risk").value);
    let sl = parseFloat(document.getElementById("sl").value);

    if (isNaN(balance) || isNaN(risk) || isNaN(sl) || balance <= 0 || risk <= 0 || sl <= 0) {
        alert("Please enter valid values.");
        return;
    }

    // Risk Amount
    let riskAmount = balance * (risk / 100);

    // Your rule:
    // 50 pips = $5 move
    // 1 lot loses $500 on a $5 move
    // Formula:
    let lotSize = riskAmount / (sl * 10);

    document.getElementById("riskAmount").innerHTML = "$" + riskAmount.toFixed(2);
    document.getElementById("lotSize").innerHTML = lotSize.toFixed(2);

}
