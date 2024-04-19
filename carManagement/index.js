class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;

    }


}




class CarList {
    constructor() {
        this.carList = []
    }


    addCar(car) {
        this.carList.push(car)
    }
    displayCar() {

        let carList = document.getElementById("carList");

        this.carList.forEach((car, index) => {
            let li = document.createElement("li");
            li.classList = "list"
            li.innerHTML = `
                <h1>${index + 1}</h1>
                <p> ${car.model}</p>
                <p>${car.make}</p>
                <p>${car.year}</p>           
            
            `

            carList.appendChild(li);
        })
    }


}


let addCarForm = document.getElementById("addCarForm");
addCarForm.addEventListener("submit", (e) => {
    let model = document.getElementById("model").value;
    let year = document.getElementById("year").value;
    let make = document.getElementById("make").value;

    e.preventDefault();


    let car = new Car(model, year, make)
    let carlist = new CarList()
    carlist.addCar(car);
    carlist.displayCar()

    document.getElementById("model").value = "";
    document.getElementById("year").value = "";
    document.getElementById("make").value = "";


})