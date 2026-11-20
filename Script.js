function calculate() {

    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);

    let andGate = a && b ? 1 : 0;
    let orGate = a || b ? 1 : 0;
    let xorGate = a !== b ? 1 : 0;

    document.getElementById("andResult").innerHTML =
        "AND: " + andGate;

    document.getElementById("orResult").innerHTML =
        "OR: " + orGate;

    document.getElementById("xorResult").innerHTML =
        "XOR: " + xorGate;
}
