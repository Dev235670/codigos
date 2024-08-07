//Elabore um algoritmo que tendo como entrada o preço e código de origem de um produto, Cálcule e mostre na tela o valor do desconto concedido. Os códigos são os seguintes:
//1 ? região norte com desconto de 5%,
//2 ? região sul com desconto de 15%,
//3 ? região sudeste com desconto de 7%,
//4 ? região nordeste com desconto de 12% e
//5 ? região centro-oeste com desconto de 20%.
//Caso não seja informado nenhum código válido informar na tela que o produto é importado.

programa {
 funcao inicio () {
   inteiro  num, calculo_desconto
   escreva("-------------------------------------------\n")
   escreva("---------- Mercado Windows ----------------\n")
   escreva("-------------------------------------------\n\n")
   escreva("Olá, Seja bem vindo !, o que vai ser hoje?\n\n")
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
   escreva("=- 1 - Windows Defender Premium Security [10$]           -=\n")
   escreva("=- 2 - Windows 10 [200$]                                 -=\n")
   escreva("=- 3 - Windows 12 [400$]                                 -=\n")
   escreva("=- 4 - Ferramenta de Atualização de drivers [900$]       -=\n")
   escreva("=- 5 - Ferramenta de Remoção Rootkit [234890$]           -=\n")
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n\n")
   leia(num)
   escolha (num) {
    caso 1 :
     escreva("===============================================================\n")
     escreva("=  Você Selecionou Windows Defender Premium Security          =\n")
     escreva("=  Colocando no carrinho....                                  =\n") 
     escreva("===============================================================\n\n")
    pare
    caso 2 :
     escreva("=============================================\n")
     escreva("=  Você Selecionou Windows 10               =\n")
     escreva("=  Colocando no carrinho....                =\n") 
     escreva("=============================================\n\n")
    pare
    caso 3 :
     escreva("==========================================\n")
     escreva("=  Você Selecionou Windows 12            =\n")
     escreva("=  Colocando no carrinho....             =\n") 
     escreva("==========================================\n\n")
    pare 
    caso 4 :
     escreva("=====================================================================\n")
     escreva("=  Você Selecionou Ferramenta de Atualização de drivers             =\n")
     escreva("=  Colocando no carrinho....                                        =\n") 
     escreva("=====================================================================\n\n")
    pare 
    caso 5 :
     escreva("====================================================\n")
     escreva("=  Você Selecionou Ferramenta de Remoção Rootkit   =\n")
     escreva("=  Colocando no carrinho....                       =\n") 
     escreva("====================================================\n\n")
    pare 
    caso contrario :
     escreva("===========================================================\n")
     escreva("=  Você apenas pode escolher entre os 5 números exibidos  =\n")
     escreva("===========================================================\n\n")
    }
   escreva("======================================================================\n")
   escreva("= Procesando dados....                                               =\n")
   escreva("= Escolha um Número para Indicar sua localidade :                    =\n")
   escreva("======================================================================\n\n")
   leia(num)
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
   escreva("=- 1 - Região Norte                            -=\n")
   escreva("=- 2 - Região Sul                              -=\n")
   escreva("=- 3 - Região Sudeste                          -=\n")
   escreva("=- 4 - Região Nordeste                         -=\n")
   escreva("=- 5 - Região Centro-Oeste                     -=\n")
   escreva("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n\n")
   escolha (num) {
    caso 1 :
     calculo_desconto = 10 * (5/100)
     escreva("==========================================\n")
     escreva("= Você Selecionou Região Norte           =\n")
     escreva("= Aplicando Desconto....                 =\n") 
     escreva("= Aqui Está: , calculo_desconto,R$       =\n")
     escreva("==========================================\n\n")
    pare
    caso 2 :
    calculo_desconto = 200 * (15/100)
     escreva("=========================================\n")
     escreva("= Você Selecionou Região Sul            =\n")
     escreva("= Aplicando Desconto....                =\n") 
     escreva("= Aqui Está: , calculo_desconto,R$      =\n")
     escreva("=========================================\n\n")
    pare
    caso 3 :
    calculo_desconto = 400 * (7/100)
     escreva("=========================================\n")
     escreva("= Você Selecionou Região Sudeste        =\n")
     escreva("= Aplicando Desconto....                =\n") 
     escreva("= Aqui Está: , calculo_desconto,R$      =\n")
     escreva("=========================================\n\n")
    pare 
    caso 4 :
    calculo_desconto = 900 * (12/100)
     escreva("========================================\n")
     escreva("= Você Selecionou Região Nordeste      =\n")
     escreva("= Aplicando Desconto....               =\n") 
     escreva("= Aqui Está: , calculo_desconto,R$     =\n")
     escreva("========================================\n\n")
    pare 
    caso 5 :
    calculo_desconto = 234890 * (20/100)
     escreva("==========================================\n")
     escreva("= Você Selecionou Região Centro-Oeste    =\n")
     escreva("= Aplicando Desconto....                 =\n") 
     escreva("= Aqui Está: , calculo_desconto,R$       =\n")
     escreva("==========================================\n\n")
    pare 
    caso contrario :
     escreva("==========================================================\n")
     escreva("= O Produto encontrado é importado.                      =\n")
     escreva("==========================================================\n\n")
    }
 }
}