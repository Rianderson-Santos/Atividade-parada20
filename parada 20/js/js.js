function realizarEleicao() {
  
    var continuarVotacao = true;
    var c1 = 0;
    var c2 = 0;
    var c3 = 0;
    var c4 = 0;
    var c0 = 0;
  
    while (continuarVotacao) {
      var voto = parseInt(prompt("Digite o número do candidato escolhido: \n   \n1: Thalita\
      \n2: João\
      \n3: Pedro\
      \n4: Gabriel\
      \n0: Nulo/Branco "));

  
      switch (voto) {
        case 1:
            c1 += 1
            break;
        case 2:
            c2 += 1
            break;
        case 3:
            c3 += 1
            break;
        case 4:
            c4 += 1
            break;
        case 0:
            c0 += 1
            break;
        default:
          alert("Opção de voto inválida!");
          break;
      }
  
      var opcao = prompt("Deseja votar novamente? (S/N)").toUpperCase();
      continuarVotacao = (opcao === "S");
    }
  
    console.log("\nResultado da eleição:");
    alert(" \n   \n1: Candidato 1: " + c1 + "\
      \n2: Candidato 2: " + c2 + "\
      \n3: Candidato 3: " + c3 + "\
      \n4: Candidato 4: " + c4 + "\
      \n0: Nulo/Branco: " + c0 );
  }
  
  realizarEleicao();
  