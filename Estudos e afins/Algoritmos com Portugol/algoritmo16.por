programa {
  funcao inicio() {
    inteiro x, c, cm, n1,n2,n3
    caracter a1, status_a
    escreva("   ==========================\n")
    escreva("   ===== School System ======\n")
    escreva("   ==========================\n\n\n\n\n")
    escreva("== Quantos Alunos A Serem Analisados? == \n")
    leia(x)
    para (x = 0; x <= 2; x++) {
    escreva("=========================================\n")
    escreva("informe o primeiro aluno a ser analisado: \n")
    escreva("=========================================\n")
    leia(a1)
    escreva("=========================================\n")
    escreva("informe a primeira nota: \n")
    escreva("=========================================\n")
    leia(n1)
    escreva("=========================================\n")
    escreva("informe a segunda nota: \n")
    escreva("=========================================\n")
    leia(n2)
    escreva("=========================================\n")
    escreva("informe a terceira nota: \n")
    leia(n3)
    escreva("=========================================\n\n\n")
    cm = n1 + n2 + n3 / 10
    } 
    escreva("   ==========================\n")
    escreva("   ===== School System ======\n")
    escreva("   ==========================\n\n\n")
    escreva("=================================\n")
    escreva("=== Nome === Média === Status ===\n")
    escreva("=== "  ,a1,  " === "  ,cm,  " === ", status_a, " === ","\n")
    escreva("=================================\n")
  }
}
