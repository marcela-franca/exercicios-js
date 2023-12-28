//Escreva uma função que retorne o cubo de um número fornecido pelo usuário
const num = 5;
const cubo = 3;


    for (var i = 0; i < cubo; i++) { 
         var valor = num * num;
         valor = valor * num;
    }
        console.log(valor);


//Escreva uma função em JavaScript que realize a conversão de uma temperatura fornecida em graus Fahrenheit (F) para Celsius (C)
        
    const temperatura = function(fahrenheit, celsius){
        celsius = ( fahrenheit - 32 );
        celsius = celsius * 0,5556;
        return celsius  
    };
        console.log(temperatura(Fahrenheit = 32));
        
//Escreva uma função que retorne a área de um triângulo, a partir dos valores de base e altura fornecidos.

    const areaTriangulo = function(base, altura){
        area = (base * altura)/ 2;
        return area

    };
        console.log(areaTriangulo(base = 8, altura = 2));
    
// Escreva uma função que encontre a área e o perímetro de um círculo, de acordo com o raio fornecido.  

    const areaCirculo = function(raio, diametro){
        
        area2 = 3.14 * (raio * raio);
        circulo = (diametro * 3.14) * raio;
        return  {circulo,
            area2};

    };
        console.log(areaCirculo(raio = 6, diametro = 5));




// Escreva uma função que verifica se um número fornecido pelo usuário em um prompt é primo ou não.

    const numeroPrimo = function(num3){
        if((num3 > 1) && (num3 % 1 === 0) && (num3 % num3 === 0)){
            return num3
        }

    };
        console.log(numeroPrimo(num3 = 7));

//Escreva uma função que calcule e retorne o fatorial de um número inteiro fornecido pelo usuário. 
const numeroFat = function(i){
    if(i === 0){
    return "Inválido"
        }else{
        for( var i = 5; i >= 0; i--){
        resposta = i * ( i - 1);
        resposta += resposta * i;
        return resposta
        }
        }
};
console.log(numeroFat(i = 5))


//Escreva uma função em JavaScript que conte quantas vezes um caractere aparece em uma string. Tanto o caractere quanto a string devem ser fornecidos pelo usuário.
const numeroCarac = function(string1, caracter){
    var qtd = 0;
    for( var n = 0; n < string1.length; n++){
        if ( string1.charAt(n) == caracter){
            qtd++;   
        }
    }
    return qtd;
};
console.log(numeroCarac( string1="amora", caracter= "a"));


// Escreva uma função que permita contar o número de vogais contidas em uma string fornecida pelo usuário. Por exemplo, o usuário informa a string “Beterraba”, e a função retorna o número 4 (há 4 vogais nessa palavra).
    const numVogal = function(string){
    var contador = 0;
    for(var i = 0; i < string.length; i++){
        if(string.charAt(i)=="a"||string.charAt(i)=="e"||string.charAt(i)=="i"||string.charAt(i)=="o"||string.charAt(i)=="u"){
            contador++;
            }
        }   
        return contador;  
    }
console.log(numVogal(string = "vermelho"))

// Escreva uma função que mostre na tela um número fornecido pelo usuário, porém invertido. Por exemplo, o usuário fornece o número 875 e a função mostra na tela o número 578.

const inverteNumero = function(nInverte){
    for (var n = nInverte.length - 1; n >= 0; n--){
        var reverso = reverso + nInverte[n];     
    }
    return reverso;
};
console.log(inverteNumero(nInverte= "875"));


//Escreva uma função que informe o retorno de um investimento (montante) com base nos valores do capital inicial, tempo em meses e taxa de juros mensal, fornecidos pelo usuário.
//Use a fórmula: M = C * (1+i)t
//Onde:

//C = Capital inicial investido
//i = Taxa de juros, em percentual
//t = Tempo do investimento, em meses

const investimento = function(capital, taxa, tempo){
    
    var montante = capital * Math.pow((1 + (taxa/100)),tempo);
    var resposta = montante.toFixed(2);
    return  resposta;
};
console.log(investimento( capital = "1000", taxa = "10", tempo = "2"))

