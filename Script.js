function calculate() {

    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);

    document.getElementById("andResult").innerHTML =
        "AND: " + ((a && b) ? 1 : 0);

    document.getElementById("orResult").innerHTML =
        "OR: " + ((a || b) ? 1 : 0);

    document.getElementById("xorResult").innerHTML =
        "XOR: " + ((a !== b) ? 1 : 0);

    document.getElementById("notResult").innerHTML =
        "NOT A: " + (a ? 0 : 1);

    document.getElementById("nandResult").innerHTML =
        "NAND: " + (!(a && b) ? 1 : 0);

    document.getElementById("norResult").innerHTML =
        "NOR: " + (!(a || b) ? 1 : 0);

    document.getElementById("xnorResult").innerHTML =
        "XNOR: " + ((a === b) ? 1 : 0);
}
