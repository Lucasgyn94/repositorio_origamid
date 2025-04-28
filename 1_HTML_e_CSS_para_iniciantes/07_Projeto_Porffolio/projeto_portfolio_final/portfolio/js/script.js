document.addEventListener('DOMContentLoaded', (event) => {
    // Seleciona o elemento h1 dentro da seção de introdução
    const cabecalhoDinamico = document.querySelector('.introducao h1');

    // *** NOVA ABORDAGEM: Definir as linhas a serem digitadas diretamente no código ***
    // Substitua estas strings pelas linhas exatas que você deseja que apareçam no seu título.
    const linesToType = [
        "Desenvolvedor",
        "Front End,",
        "Back End &", // Ajuste aqui se precisar de '&' ou 'e'
        "UX/UI Designer"
    ];
    // *** FIM DA NOVA ABORDAGEM ***


    // Limpa completamente o conteúdo inicial do h1
    cabecalhoDinamico.innerHTML = '';

    // Variáveis para controlar a digitação
    let indexLinhaAtual = 0; // Índice da linha atual sendo digitada (usando o array linesToType)
    let indexCaractereAtual = 0; // Índice do caractere atual na linha
    const velocidadeDigitacao = 70; // Velocidade de digitação em milissegundos por caractere
    const atrasoNovaLinha = 500; // Atraso em milissegundos antes de iniciar a digitação de uma nova linha

    // Cria um elemento span para representar o cursor piscante
    const cursorSpan = document.createElement('span');
    cursorSpan.classList.add('typing-cursor'); // Adiciona a classe CSS para estilização do cursor

    // Função principal que realiza o efeito de digitação
    function efeitoDigitacao() {
        // Verifica se ainda há linhas para digitar (no array linesToType)
        if (indexLinhaAtual < linesToType.length) {
            const currentLine = linesToType[indexLinhaAtual]; // Pega a linha atual do array

            // Verifica se ainda há caracteres para digitar na linha atual
            if (indexCaractereAtual < currentLine.length) {
                // Adiciona o próximo caractere
                // Remove o cursor temporariamente antes de adicionar o char, para evitar duplicá-lo no innerHTML
                 if (cabecalhoDinamico.contains(cursorSpan)) {
                     cabecalhoDinamico.removeChild(cursorSpan);
                 }
                cabecalhoDinamico.innerHTML += currentLine.charAt(indexCaractereAtual);
                // Readiciona o cursor ao final do texto digitado
                cabecalhoDinamico.appendChild(cursorSpan);
                indexCaractereAtual++; // Avança para o próximo caractere

                // Chama a função 'type' novamente após um pequeno atraso (velocidade de digitação)
                setTimeout(efeitoDigitacao, velocidadeDigitacao);
            } else {
                // Chegou ao final da linha atual
                // Verifica se não é a última linha do array
                if (indexLinhaAtual < linesToType.length - 1) {
                    // Se não for a última linha, adiciona uma quebra de linha real e prepara para a próxima
                    if (cabecalhoDinamico.contains(cursorSpan)) {
                       cabecalhoDinamico.removeChild(cursorSpan); // Remove cursor antes de adicionar o BR
                    }

                    // Criar e adicionar o elemento <br> real ***
                    const brElement = document.createElement('br');
                    cabecalhoDinamico.appendChild(brElement); // Adiciona o elemento <br> real

                    // Adiciona o cursor novamente após a quebra de linha para o atraso
                    cabecalhoDinamico.appendChild(cursorSpan);


                    indexLinhaAtual++; // Passa para a próxima linha no array
                    indexCaractereAtual = 0; // Reinicia o índice de caractere para a nova linha

                    // Espera pelo atraso maior (atraso entre linhas) antes de chamar type novamente
                    setTimeout(efeitoDigitacao, atrasoNovaLinha);
                } else {
                    // Chegou ao final da última linha do array. Garante que o cursor permaneça visível.
                    if (!cabecalhoDinamico.contains(cursorSpan)) {
                         cabecalhoDinamico.appendChild(cursorSpan);
                    }
                }
            }
        }
        // Se todas as linhas do array foram digitadas, a função termina
    }

    // Adiciona o cursor inicial antes de começar a digitar
    cabecalhoDinamico.appendChild(cursorSpan);
    // Inicia o efeito de digitação
    efeitoDigitacao();
});