class Computer {
    constructor(id, brand, model, price, specs, imageSrc) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.specs = specs;
        this.imageSrc = imageSrc;
    }

    displayDetails() {
        return `
            <div class="computer">
                <h3>${this.brand} ${this.model}</h3>
                <p><b>Price:</b> $${this.price}</p>
                <p><b>Specifications:</b></p>
                <ul>
                    ${this.specs.map(spec => `<li>${spec}</li>`).join('')}
                </ul>
                <img src="${this.imageSrc}" alt="${this.brand} ${this.model}">
            </div>
        `;
    }
}

class ComputerStore {
    constructor() {
        this.computers = [];
    }

    addComputer(computer) {
        this.computers.push(computer);
    }

    displayComputers() {
        const computerListElement = document.getElementById("computer-list");
        this.computers.forEach((computer) => {
            const computerDetails = computer.displayDetails();
            computerListElement.innerHTML += computerDetails;
        });
    }
}

const computerStore = new ComputerStore();
computerStore.addComputer(new Computer(1, 'HP', 'Pavilion', 799, ['8GB RAM', '256GB SSD', 'Intel Core i3'], 'https://via.placeholder.com/150'));
computerStore.addComputer(new Computer(2, 'Dell', 'Inspiron', 899, ['16GB RAM', '512GB SSD', 'Intel Core i7'], 'https://via.placeholder.com/150'));
computerStore.addComputer(new Computer(3, 'Apple', 'MacBook Pro', 1499, ['8GB RAM', '256GB SSD', 'Apple M1 Chip'], 'https://via.placeholder.com/150'));

computerStore.displayComputers();
