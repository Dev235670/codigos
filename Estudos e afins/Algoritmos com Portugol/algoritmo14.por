//Uma lancheria está com alguns problemas para atender aos pedidos dos clientes. Não vai ser possível atender pedidos que tenham algumas combinações do cardápio, são elas:
//a) O lanche bauru não poderá ser acompanhado da bebida guaraná.
//b) Se o cliente pedir X galinha, não poderá pedir água.
//c) Quando o cliente pedir Pizza, somente poderá beber vinho ou água.
//Dessa forma, elabore um algoritmo que leia o lanche e a bebida e verifique se o pedido poderá ser ou não atendido.

programa {
 funcao inicio () {
 inteiro num,qt,cod,calculo
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
   escreva("=======================================================\n")
   escreva("=============== LANCHONETE SYSTEM 32 ==================\n")
   escreva("=======================================================\n")
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
   escreva("-=-= Item =-=-= Código -=- Preço =-=-=-=-=-==-=-=-=-=-=\n")
   escreva("=1= Bauru      |  101   |   1,20 |  LANCHONETE   | $ -=\n")
   escreva("=2= X Galinha  |  102   |   2,30 |    SYSTEM     | $ -=\n")
   escreva("=3= Pizza      |  103   |   4,00 |      32       | $ -=\n")
   escreva("=4= Guaraná    |  104   |   3,00 |  ==========   | $ -=\n")
   escreva("=5= Vinho      |  105   |   9,50 |  =********=   | $ -=\n")
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")
   escreva("para fazer seu pedido, escolha um número de 1 a 5:     \n")
   leia(num)      
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")
   escolha (num) {

   caso 1:
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n") 
   escreva("você selecionou Bauru.\n")
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
   escreva("insira a quantidade que deseja: ")
   leia(qt)
   escreva("insira o código do item: ")
   leia(cod)
   calculo = qt + 1.20
   escreva("processando informações... \n")
   escreva("total a pagar: ",calculo,"R$\n")
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
   pare

   caso 2: 
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
   escreva("você selecionou X Galinha.\n")
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
   escreva("insira a quantidade que deseja: ")
   leia(qt)
   escreva("insira o código do item: ")
   leia(cod)
   calculo = qt + 2.30
   escreva("processando informações... \n")
   escreva("total a pagar: ",calculo,"R$\n")
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
   pare

   caso 3:
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
   escreva("você selecionou X Pizza.\n")
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
   escreva("insira a quantidade que deseja: ")
   leia(qt)
   escreva("insira o código do item: ")
   leia(cod)
   calculo = qt + 4.20
   escreva("processando informações... \n")
   escreva("total a pagar: ",calculo,"R$\n")
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
   pare

   caso 4: 
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
   escreva("você selecionou Guaraná.\n")
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
   escreva("insira a quantidade que deseja: ")
   leia(qt)
   escreva("insira o código do item: ")
   leia(cod)
   calculo = qt + 3.00
   escreva("processando informações... \n")
   escreva("total a pagar: ",calculo,"R$\n")
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
   pare

   caso 5: 
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
   escreva("você selecionou Vinho.\n")
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
   escreva("insira a quantidade que deseja: ")
   leia(qt)
   escreva("insira o código do item: ")
   leia(cod)
   calculo = qt + 9.50
   escreva("processando informações... \n")
   escreva("total a pagar: ",calculo,"R$\n")
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
   pare

   caso contrario:
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
   escreva("o item desejado não foi disponibilizado no sistema ou não existe\n")
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
   pare 

   escolha (cod) {
     caso 101:
     escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n") 
     escreva("validando código para entrega do produto.... \n")
     escreva("tudo certo ! \n")
     escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
     pare

     caso 102:
     escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
     escreva("validando código para entrega do produto.... \n")
     escreva("tudo certo ! \n")
     escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
     pare

     caso 103:
     escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
     escreva("validando código para entrega do produto.... \n")
     escreva("tudo certo ! \n")
     escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
     pare

     caso 104:
     escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
     escreva("validando código para entrega do produto.... \n")
     escreva("tudo certo ! \n")
     escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
     pare

     caso 105:
     escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
     escreva("validando código para entrega do produto.... \n")
     escreva("tudo certo ! \n")
     escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
     pare
     
     caso contrario:
     escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
     escreva("validando código para entrega do produto.... \n")
     escreva("erro.")
     escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
     pare
   }
  }
 }
}