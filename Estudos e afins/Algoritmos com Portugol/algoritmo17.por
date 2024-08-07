programa {

  funcao inicio() {

   inteiro v1,v2,v3,v4,v5, calculo

   escreva("insira o primeiro valor a ser somado: ")
   leia(v1)
   escreva("insira o segundo valor a ser somado: ")
   leia(v2)
   escreva("insira o terceiro valor a ser somado: ")
   leia(v3)
   escreva("insira o quarto valor a ser somado: ")
   leia(v4)
   escreva("insira o quinto valor a ser somado: ")
   leia(v5)
   
   calculo = v1 + v2 + v3 + v4 + v5

   escolha (calculo){
    caso calculo:
    escreva("resultado igual a: ", calculo,"\n")
    pare 

    caso calculo:
    escreva("resultado igual a: ", calculo,"\n")
    pare

    caso calculo:
    escreva("resultado igual a: ", calculo,"\n")
    pare

    caso calculo:
    escreva("resultado igual a: ", calculo,"\n")
    pare

    caso calculo:
    escreva("resultado igual a: ", calculo,"\n")
    pare

    caso contrario: 
      escreva("erro ")
      pare
   }

   se (calculo < 200) {
    escreva("você perdeu --> ", calculo)
   } senao se (calculo > 200){
    escreva("você venceu --> ", calculo)
   } senao se (calculo < 900 ){
    escreva("você perdeu --> ", calculo)
   } senao {
    escreva("erro.")
   }
  }

}
