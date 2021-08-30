/* 
Aufgabenstellung


Heute werden wir einen Rechner für das Idealgewicht nach der folgenden Formel programmieren:

• Formel für Menschen mit einem zierlichen und schmalen Körperbau:
[ (Körpergröße in cm - 100) + (Alter/ 10)] x 0,9 x 0,9

• Formel für Menschen mit einem eher breiten Körperbau:
[ (Körpergröße in cm - 100) + (Alter/ 10)] x 0,9 x 1,1
 */

function calculate() {
    let size = Number(document.getElementById("size").value);
    let age = Number(document.getElementById("age").value);
    let bodyBreit = document.getElementById("bodyBreit").checked;
    let formel = ((size - 100) + (age / 10)) * 0.9
    if (bodyBreit) {
        formel = formel * 1.1
    } else {
        formel = formel * 0.9
    }
    document.getElementById("gewicht").innerHTML = `${formel.toFixed(2)} kg`
    console.log(`${formel.toFixed(2)} kg`)

}




