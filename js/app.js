

function comprar () {
    let tipoIngresso = document.getElementById("tipo-ingresso").value ;
    let qtdIngresso = document.getElementById("qtd").value ;
    let dispPista = parseInt(document.getElementById("qtd-pista").textContent) ;
    let dispSup = parseInt(document.getElementById("qtd-superior").textContent) ;
    let dispInf = parseInt(document.getElementById("qtd-inferior").textContent) ;

    if(qtdIngresso == "") {
        alert("insira uma quantidade") ;       
        return ;
    }
      
    if(tipoIngresso == "pista") {
        if(qtdIngresso > dispPista) {
            alert("Essa quantidade não está disponível") ;
            document.getElementById("qtd").value = "" ;
            return ;
        }
        let qtdRestante = dispPista-qtdIngresso ;
        document.getElementById("qtd-pista").textContent = `${qtdRestante}` ;
        document.getElementById("qtd").value = "" ;        
    }

    if(tipoIngresso == "superior") {
        if(qtdIngresso > dispSup) {
            alert("Essa quantidade não está disponível") ;
            document.getElementById("qtd").value = "" ;
            return ;
        }

        let qtdRestante = dispSup-qtdIngresso ;
        document.getElementById("qtd-superior").textContent = `${qtdRestante}` ;
        document.getElementById("qtd").value = "" ;
    }

    if(tipoIngresso == "inferior") {
        if(qtdIngresso > dispInf) {
            alert("Essa quantidade não está disponível") ;
            document.getElementById("qtd").value = "" ;
            return ;
        }

        let qtdRestante = dispInf-qtdIngresso ;
        document.getElementById("qtd-inferior").textContent = `${qtdRestante}` ;
        document.getElementById("qtd").value = "" ;
    }
}