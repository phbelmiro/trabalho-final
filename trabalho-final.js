
const reservas = [];

function criarReserva() {

        reservas.push(sala= {
        nome : prompt("Qual e seu nome?"),
        data : prompt("Qual e a data desejada?"),
        horario : prompt("Qual e o horario?"),
        sala : (prompt("Qual e a sala?")),
        finalidadeDaReunião : prompt("qual e a finalidade da reunião")})
        exibirMenu()
    
  // Implementar criação de reserva
}

function visualizarReservas() {
    
    for(let i of reservas){
        console.log(i)
    }

    exibirMenu()
  // Implementar visualização de reservas
}

function editarReserva() {
    
    exibirMenu()
  // Implementar edição de reserva
}

function deletarReserva() {
    
    exibirMenu()
  // Implementar exclusão de reserva
}

function exibirMenu() {
  console.log("Menu:");
  console.log("1. Criar Reserva");
  console.log("2. Visualizar Reservas");
  console.log("3. Editar Reserva");
  console.log("4. Deletar Reserva");
  console.log("5. Sair");

  const opcao = prompt("Digite o número da opção desejada:");

  switch (opcao) {
    case "1":
        criarReserva()
        
      // Chamar função de criar reserva
      break;
    case "2":
        console.log(visualizarReservas())

      // Chamar função de visualizar reservas
      break;
    case "3":
        editarReserva()
        
      // Chamar função de editar reserva
      break;
    case "4":
        deletarReserva()
        
      // Chamar função de deletar reserva
      break;
    case "5":
      console.log("Saindo do programa. Até logo!");
      return;
    default:
      console.log("Opção inválida. Tente novamente.");
      exibirMenu()
  }

  
}

exibirMenu();
