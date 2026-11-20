function generateTruthTable(){
 
let html = `
<table>
 
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
html;
}