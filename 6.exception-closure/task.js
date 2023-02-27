function parseCount(argument){
    if((!Number.parseFloat(argument))){
        throw new Error('Невалидное значение');
    }
    return Number.parseFloat(argument);
}

function validateCount(argument){
    try{
        parseCount(argument);
    } catch(error) {
            return error;    
    }
}

class Triangle{
    constructor(sideA,sideB,sideC){
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    

    if((this.sideA + this.sideB < this.sideC) || 
    (this.sideA + this.sideC < this.sideB) ||
    (this.sideC + this.sideB < this.sideA)){
        throw new Error('Треугольник с такими сторонами не существует');
    }
}

get perimeter() {return (this.sideA + this.sideB + this.sideC)
}
get area() {let sqare = (Math.sqrt((this.perimeter/2)*
                        ((this.perimeter/2)-this.sideA)*
                        ((this.perimeter/2)-this.sideB)*
                        ((this.perimeter/2)-this.sideC)))
return +sqare.toFixed(3);
}
}

function getTriangle(sideA,sideB,sideC){
try {
  let triangle = new Triangle(sideA,sideB,sideC)
  return triangle;
} catch(error){
    let newObj = {
    get perimeter() {
        return 'Ошибка! Треугольник не существует'
    },
    get area() {
        return 'Ошибка! Треугольник не существует'
    }
}
return newObj;
}
}