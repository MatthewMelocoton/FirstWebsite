

document.getElementById("abutton").onclick = function(){
    let firstNumber = document.getElementById("atextbox").value;
    let secondNumber = document.getElementById("btextbox").value;
    let result = Number(firstNumber) * Number(secondNumber);
    document.getElementById("clabel").innerHTML = ("Answer: " + result);
}

document.getElementById("bbutton").onclick = function(){
    let BfirstNumber = document.getElementById("ctextbox").value;
    let BsecondNumber = document.getElementById("dtextbox").value;
    let Bresult = Number(BfirstNumber) / Number(BsecondNumber);
    document.getElementById("flabel").innerHTML = ("Answer: " + Bresult);
}

document.getElementById("cbutton").onclick = function(){
    let CfirstNumber = document.getElementById("etextbox").value;
    let CsecondNumber = document.getElementById("ftextbox").value;
    let Cresult = Number(CfirstNumber) + Number(CsecondNumber);
    document.getElementById("ilabel").innerHTML = ("Answer: " + Cresult);
}

document.getElementById("dbutton").onclick = function(){
    let DfirstNumber = document.getElementById("gtextbox").value;
    let DsecondNumber = document.getElementById("htextbox").value;
    let Dresult = Number(DfirstNumber) - Number(DsecondNumber);
    document.getElementById("llabel").innerHTML = ("Answer: " + Dresult);
}

