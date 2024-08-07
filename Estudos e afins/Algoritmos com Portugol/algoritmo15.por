programa {
  funcao inicio() {
    real x, cont, soma = 0, qtd
    escreva("quantos números você deseja somar? \n")
    leia(qtd)
    
    limpa()
    para (cont = 1; cont <= qtd; cont ++){
        escreva("informe o ", cont, " primeiro número que deseja somar: \n")
        leia(x)

        soma += x

    }
    escreva("a soma de todos os números digitados é: ",soma)
  }
}
