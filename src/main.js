const porce = document.getElementById('porcentageTextSpan');

function calcYear(){
    const date = new Date();

    const yearComplee = 365;
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const dayPassed = (((month * 30) - (30 - day)) / 365) * 100;
    porce.innerText = dayPassed.toFixed() + "%"

    const porcentageDiv = document.getElementById('containerPorcentage')
    porcentageDiv.style.width = `${dayPassed}%`;

    /*

    porcentagem =  30 - data atual + (dias que ja se passaram = meses * 30)


    */

}
calcYear()