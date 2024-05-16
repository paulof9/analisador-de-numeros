    function botao1(){
        let numerosInput = document.querySelector('input#numeros');
        let numeros = Number(numerosInput.value);
        let form = document.querySelector('select#form');    
        let resultado1 = document.querySelector('div#resposta');
        
        if (isNaN(numeros) || numeros > 100 || numeros < 1) {     
            window.alert("Por favor, digite um número entre 1 e 100!");     

        } else {                                             
            let exists = false;  // variavel para checar se numero já existe

            for (let i = 0; i < form.options.length; i++) {  // de 0 até  numero de options no formulario
                if (Number(form.options[i].text.match(/\d+/)) === numeros) { // extrair numeros somente de (===) numeros

                    exists = true;
                    break;              //se já existe, blz
                }
            }
    
            if (!exists) {  //se NÃO tem numeros repetidos
                let option = document.createElement('option');                   
                option.text = `Valor ${numeros} adicionado!`;                
                form.appendChild(option);           //link
                resultado1.innerHTML = '';    //clear
            } else {  //se tem numeros repetidos = erro
                window.alert("Este número já foi adicionado!");
            }
        }
        numerosInput.focus();
        numerosInput.value = ''; // clear
    }
    
        function botao2() {
            let select = document.querySelector('select#form')    //dados do usuario
            let options = select.options                                  
            let resultado = document.querySelector(`div#resposta`) 
            let addedValues = {}        //armazena valores em chaves, pra depois executar os comandos abaixo
            resultado.innerHTML = '';  //limpar


            let qntd = select.length 
            resultado.innerHTML +=`Existem ${qntd} valores selecionados!` + "<br>" // quantidade seleciondas

            let min = Infinity  //min
            let max = -Infinity  //max
            let soma = 0;  //soma


            for (let i = 0; i < options.length; i++) {
                let value = Number(options[i].text.match(/\d+/)) // Extrair número da opção
                if (!addedValues[value]) {           //os valores que NÃO (!) se repetirem na lista, serão verdadeiros
                    addedValues[value] = true;
                    soma += value    //soma
                    if(value < min) min = value
                    if(value > max) max = value
                    
                }
            }
            resultado.innerHTML += `A soma dos valores é ${soma}!` + "<br>"
            resultado.innerHTML += `O menor valor é ${min}!` + "<br>"
            resultado.innerHTML += `O maior valor é ${max}!` + "<br>"
        }