let carArr = [];

class Car {
   
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
} 

function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {

    if(el.checked && carArr.length >= 2){
        alert("Selecione no máximo 2 carros");
        el.checked = false;
        return;
    }
   
    if(el.checked){
        carArr.push(carClass);
    } else {
        const carro = GetCarArrPosition(carArr, carClass);
        carArr.splice(carro,1);
    } 
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    const car1 = carArr[0];
    const car2 = carArr[1];

    //Coloquei para melhorar a exibição do preço.
    const Price = (price) => {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    //Carro 0.
    document.getElementById("compare_image_0").innerHTML = `<img src="${car1.image}" width="150">`;
    document.getElementById("compare_modelo_0").innerHTML = car1.nome;
    document.getElementById("compare_alturacacamba_0").innerHTML = car1.alturaCacamba;
    document.getElementById("compare_alturaveiculo_0").innerHTML = car1.alturaVeiculo;
    document.getElementById("compare_alturasolo_0").innerHTML = car1.alturaSolo;
    document.getElementById("compare_capacidadecarga_0").innerHTML = car1.capacidadeCarga;
    document.getElementById("compare_motor_0").innerHTML = car1.motor;
    document.getElementById("compare_potencia_0").innerHTML = car1.potencia;
    document.getElementById("compare_volumecacamba_0").innerHTML = car1.volumeCacamba;
    document.getElementById("compare_roda_0").innerHTML = car1.roda;
    document.getElementById("compare_preco_0").innerHTML = Price(car1.preco);

    //Carro 1.
    document.getElementById("compare_image_1").innerHTML = `<img src="${car2.image}" width="150">`;
    document.getElementById("compare_modelo_1").innerHTML = car2.nome;
    document.getElementById("compare_alturacacamba_1").innerHTML = car2.alturaCacamba;
    document.getElementById("compare_alturaveiculo_1").innerHTML = car2.alturaVeiculo;
    document.getElementById("compare_alturasolo_1").innerHTML = car2.alturaSolo;
    document.getElementById("compare_capacidadecarga_1").innerHTML = car2.capacidadeCarga;
    document.getElementById("compare_motor_1").innerHTML = car2.motor;
    document.getElementById("compare_potencia_1").innerHTML = car2.potencia;
    document.getElementById("compare_volumecacamba_1").innerHTML = car2.volumeCacamba;
    document.getElementById("compare_roda_1").innerHTML = car2.roda;
    document.getElementById("compare_preco_1").innerHTML = Price(car2.preco);
}
