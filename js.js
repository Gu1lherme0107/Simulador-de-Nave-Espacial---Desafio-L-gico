let combustivel = 100;
let IntegridadeDaNave = 100;
let IntegridadePropulsores = 100;

let continuar = true;

function Checagem(combustivel, IntegridadeDaNave, IntegridadePropulsores) {
    if (combustivel <= 30 && combustivel > 0) {
        return `⚠️ Alerta: Combustível em nível crítico: ${combustivel}%`;
    } 
    else if (combustivel > 30 && IntegridadeDaNave >= 10 && IntegridadePropulsores >= 10) {
        continuar = true;
        return `✅ Inicializando Nave...\n\n  Combustível: ${combustivel}\n  Integridade da Nave: ${IntegridadeDaNave}\n  Integridade dos Propulsores: ${IntegridadePropulsores}`;
    } 
    else {
        continuar = false;
        return `❌ Nave incapaz de inicializar.`;
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);   
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

alert(Checagem(combustivel, IntegridadeDaNave, IntegridadePropulsores));

while (continuar) {
    let opcao = prompt("1 - Fazer salto\n2 - Ver dados da Nave\n3 - Abastecer\n4 - Sair");

    if (opcao === "1") {
        if (combustivel >= 10 && IntegridadeDaNave >= 10 && IntegridadePropulsores >= 10) {
            combustivel -= 10;
            IntegridadeDaNave -= 10;
            IntegridadePropulsores -= 10;

            alert(`🌀 Saltando...\n\n📊 Pós-salto:\nCombustível: ${combustivel}%\nIntegridade da Nave: ${IntegridadeDaNave}%\nIntegridade dos Propulsores: ${IntegridadePropulsores}%`);
        } else {
            alert("🚫 Condições críticas! Salto cancelado.");
        }

        if (combustivel <= 0 || IntegridadeDaNave < 10 || IntegridadePropulsores < 10) {
            continuar = false;
            alert("☠️ Nave danificada ou sem combustível. Missão encerrada.");
        }

    } else if (opcao === "2") {
        alert(`📊 STATUS DA NAVE:\nCombustível: ${combustivel}%\nIntegridade da Nave: ${IntegridadeDaNave}%\nIntegridade dos Propulsores: ${IntegridadePropulsores}%`);
    } 
    else if (opcao === "3") {
        if(combustivel <=70){
            alert("Combustivel em planeta mais proximo localizado! indo para lá...")
            let ganhoDeCombustivel = getRandomIntInclusive(10, 30);
            combustivel -= 10; // gasto da viagem
            alert(`Gastamos 10% de combustível para encontrarmos ${ganhoDeCombustivel}L`);
            combustivel += ganhoDeCombustivel;
            alert(`Seu nível de combustível atual é: ${combustivel}%`);
        }else{
            alert(`Abastecimento não necessario`)
        }

    } 

    else if (opcao === "4") {
        continuar = false;
        alert("🛑 Missão finalizada manualmente.");
    } 

    else {
        alert("❓ Opção inválida. Tente novamente.");
    }
}
