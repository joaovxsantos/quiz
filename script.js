//coloquei o enunciado como alert para aparecer na tela
alert("Quiz dos personagens do anime Shingeki no Kyojin")

//aqui coloquei um array dentro de uma variável para ficar mais facil utilizar os elementos
var personagem = ["Mikasa", "Levi", "Eren"]

//aqui fiz uma variável para colocar o indice do personagem selecionado para o quiz
var indice = personagem[2] 

//aqui um texto para complementar
var texto = "Seu personagem tem como caracteristicas:\n"


switch(indice){
    case personagem[2]: //aqui puxei o index do personagem q ta dentro da var indice
        alert( texto + "TATAKAE\n" + "Titã de ataque")
        var teste = prompt("Digite o nome do personagem:")
        break
    case personagem[0]: //aqui puxei o index do personagem q ta dentro da var indice
        alert( texto + "Ackerman\nMulher")
        var option = prompt("Digite o nome do personagem: ")
        break
    case personagem[1]: //aqui puxei o index do personagem q ta dentro da var indice
        alert( texto + "Capitão\n" + "Mais forte da humanidade")
        var lad = prompt("Digite o nome do personagem:")
        break
    default:
        alert("ERRO")
}

if(lad=="Levi" || lad=="Levi Ackerman"){
    alert("Parabéns! Você acertou")
}

else if(option=="Mikasa" || option=="Mikasa Ackerman"){
    alert("Parabéns! Você acertou")
}

else if(teste=="Eren" || teste=="Eren Yeager"){
    alert("Parabéns! Você acertou")
}
else{
    alert("Errou, tente novamente.")
}