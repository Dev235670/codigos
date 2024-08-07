//O cardápio de uma lanchonete é o seguinte:
//     LANCHE        CÓDIGO        VALOR
//Cachorro Quente      101          1,20
//Bauru Simples        102          1,30
//Bauru Com Ovo        103          1,50
//Hambúrger            104          1,20
//Cheeseburger         105          1,30
//Refrigerante         106          1,00
//Escrever um algoritmo que leia o código do item pedido e a quantidade. Calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Caso não seja
//informado algum código da lista, deve-se informar que o código do lanche é inválido.


programa {
 funcao inicio () {
  real num, cod, qt, calculo
  escreva("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")
  escreva("-------------------------------------------------\n")
  escreva("--------------- Cardápio do Silvio --------------\n")
  escreva("-------------------------------------------------\n")
  escreva("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")
  escreva("Escolha um numero de 1 a 6: \n")
  leia(num)
  escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
  escreva("===== Item ======== COD = Valor =================\n") 
  escreva("=1= Cachorro Quente 101 = 1.20  =-=-=-=-=-=-=-=-=\n")
  escreva("=2= Bauru Simples   102 = 1.30  =-=-=-=-=-=-=-=-=\n")
  escreva("=3= Bauru Com Ovo   103 = 1.50  =-=-=-=-=-=-=-=-=\n")
  escreva("=4= Hambúrguer      104 = 1.20  =-=-=-=-=-=-=-=-=\n")
  escreva("=5= Cheeseburguer   105 = 1.30  =-=-=-=-=-=-=-=-=\n")
  escreva("=6= Refrigerante    106 = 1.00  =-=-=-=-=-=-=-=-=\n")
  escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
  escolha (num) {
    caso 1:
     escreva("==============================================\n")
     escreva("você selecionou Cachorro Quente.\n")
     escreva("informe a quantidade: ")
     leia(qt)
     escreva("informe o código do item: ")
     leia(cod)
     calculo = qt + 1.20
     escreva("total a pagar: ", calculo,"R$")
     pare
     caso 2:
     escreva("==============================================\n")
     escreva("você selecionou Bauru Simples.\n")
     escreva("informe a quantidade:  ")
     leia(qt)
     escreva("informe o código do item: ")
     leia(cod)
     calculo = qt + 1.30
     escreva("total a pagar: ", calculo,"R$")
     pare
     caso 3:
     escreva("==============================================\n")
     escreva("você selecionou Bauru Com Ovo.\n")
     escreva("informe a quantidade:  ")
     leia(qt)
     escreva("informe o código do item: ")
     leia(cod)
     calculo = qt + 1.50
     escreva("total a pagar: ", calculo,"R$")
     pare
     caso 4:
     escreva("==============================================\n")
     escreva("você selecionou Hambúrguer.\n")
     escreva("informe a quantidade:  ")
     leia(qt)
     escreva("informe o código do item: ")
     leia(cod)
     calculo = qt + 1.20
     escreva("total a pagar: ", calculo,"R$")
     pare
     caso 5:
     escreva("==============================================\n")
     escreva("você selecionou Cheeseburguer.\n")
     escreva("informe a quantidade:  ")
     leia(qt)
     escreva("informe o código do item: ")
     leia(cod)
     calculo = qt + 1.30
     escreva("total a pagar: ", calculo,"R$")
     pare
     caso 6:
     escreva("==============================================\n")
     escreva("você selecionou Refrigerante.\n")
     escreva("informe a quantidade:  ")
     leia(qt)
     escreva("informe o código do item: ")
     leia(cod)
     calculo = qt + 1.00
     escreva("total a pagar: ", calculo,"R$")
     pare
     caso contrario: 
     escreva("o código do item inserido é inválido ou não existe")
     pare
     escolha (cod) {
        caso 101:
        escreva("código analisado, sem erros")
        pare
        caso 102:
        escreva("código analisado, sem erros")
        pare
        caso 103:
        escreva("código analisado, sem erros")
        pare
        caso 104:
        escreva("código analisado, sem erros")
        pare
        caso 105:
        escreva("código analisado, sem erros")
        pare
        caso 106:
        escreva("código analisado, sem erros")
        pare
        caso contrario :
        escreva("código inexistente.")
        pare
     }
  }
 }
}