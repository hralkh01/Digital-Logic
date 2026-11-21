function generateTruthTable(){

    const gate =
        document.getElementById("gateSelect").value;

    let html =
    `
    <table>
        <tr>
            <th>A</th>
            <th>B</th>
            <th>${gate}</th>
        </tr>
    `;

    for(let a = 0; a <= 1; a++){

        for(let b = 0; b <= 1; b++){

            let result;

            if(gate==="AND")
                result = a && b ? 1 : 0;

            else if(gate==="OR")
                result = a || b ? 1 : 0;

            else if(gate==="XOR")
                result = a !== b ? 1 : 0;

            else if(gate==="NAND")
                result = !(a && b) ? 1 : 0;

            else if(gate==="NOR")
                result = !(a || b) ? 1 : 0;

            else if(gate==="XNOR")
                result = a === b ? 1 : 0;

            html += `
            <tr>
                <td>${a}</td>
                <td>${b}</td>
                <td>${result}</td>
            </tr>
            `;
        }
    }

    html += "</table>";

    document.getElementById("truthTable").innerHTML =
        html;
}