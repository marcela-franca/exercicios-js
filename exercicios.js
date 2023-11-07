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
        console.log(numeroPrimo(num3 = 5));