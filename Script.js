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

    document.getElementById("notResult").innerHTML =
    "NOT A: " + (a ? 0 : 1);

document.getElementById("nandResult").innerHTML =
    "NAND: " + (!(a && b) ? 1 : 0);

document.getElementById("norResult").innerHTML =
    "NOR: " + (!(a || b) ? 1 : 0);

document.getElementById("xnorResult").innerHTML =
    "XNOR: " + (a === b ? 1 : 0);
}
function generateTruthTable() {

    let output =
    `
    <table border="1">
        <tr>
            <th>A</th>
            <th>B</th>
            <th>AND</th>
        </tr>

        <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>

        <tr>
            <td>0</td>
            <td>1</td>
            <td>0</td>
        </tr>

        <tr>
            <td>1</td>
            <td>0</td>
            <td>0</td>
        </tr>

        <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>

    </table>
    `;

    document.getElementById("truthTable").innerHTML =
        output;
}
