// Car dataset
let cars = [
    {
        'picture': 'assets/pictures/lc500grey.png',
        'manufacturer': 'Lexus',
        'model': 'LC 500',
        'year': 2024, 
        'top-speed': 168,
        'engine': {
            'displacement': 5.0, 
            'horsepower': 471, 
            'max-torque': 398,
            'type': 'gasoline V8'
        }
    },
    {
        'picture': 'assets/pictures/porsche911gt3rs.png',
        'manufacturer': 'Porsche',
        'model': '911 GT3 RS',
        'year': 2024,
        'top-speed': 184,
        'engine': {
            'displacement': 4.0,
            'horsepower': 518,
            'max-torque': 324,
            'type': 'gasoline flat-six'
            
        }
    },
    {
        'picture': 'assets/pictures/audir8yellow.png',
        'manufacturer': 'Audi',
        'model': 'R8',
        'year': 2024,
        'top-speed': 201,
        'engine': {
            'displacement': 5.2,
            'horsepower': 532,
            'max-torque': 398,
            'type': 'gasoline V10'
        }
    },
    {
        'picture': 'assets/pictures/benz.png',
        'manufacturer': 'Mercedes-Benz',
        'model': 'AMG GT R',
        'year': 2020,
        'top-speed': 198,
        'engine': {
            'displacement': 4.0,
            'horsepower': 577,
            'max-torque': 516,
            'type': 'gasoline V8'
        }
    },
    {
        'picture': 'assets/pictures/corvettewhite.png',
        'manufacturer': 'Chevrolet',
        'model': 'Corvette Z06',
        'year': 2024,
        'top-speed': 202,
        'engine': {
            'displacement': 5.5,
            'horsepower': 670,
            'max-torque': 881,
            'type': 'gasoline V8'
        }
    },
    {
        'picture': 'assets/pictures/ferrari.png',
        'manufacturer': 'Ferrari',
        'model': '812 Superfast',
        'year': 2024,
        'top-speed': 211,
        'engine': {
            'displacement': 6.5,
            'horsepower': 789,
            'max-torque': 718,
            'type': 'gasoline V12'
        
        }
    },
    {
        'picture': 'assets/pictures/nissangray.png',
        'manufacturer': 'Nissan',
        'model': 'GT-R',
        'year': 2024,
        'top-speed': 205,
        'engine': {
            'displacement': 3.8,
            'horsepower': 600,
            'max-torque': 652,
            'type': 'gasoline V6'
        }
    },
    {
        'picture': 'assets/pictures/supra.png',
        'manufacturer': 'Toyota',
        'model': 'Supra',
        'year': 2024,
        'top-speed': 155,
        'engine': {
            'displacement': 3.0,
            'horsepower': 382,
            'max-torque': 499,
            'type': 'gasoline inline-6'
        }
    }

];

// Code logic 
function createCard(car) {
    let card = document.createElement('div');
    card.className = 'card';

    let deleteIcon = document.createElement('img');
    deleteIcon.src = 'assets/pictures/minus-solid.svg';
    deleteIcon.className = 'delete-icon';
    deleteIcon.onclick = function() {
        card.remove();
        if (currentIndex < cars.length) {
            let newCard = createCard(cars[currentIndex++]);
            container.appendChild(newCard);
        }
    };

    // Front side
    let cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    cardFront.style.backgroundImage = 'url(' + car.picture + ')';
    let title = document.createElement('div');
    title.className = 'title';
    title.textContent = car.manufacturer + ' ' + car.model;
    cardFront.appendChild(title);

    // Back side
    let cardBack = document.createElement('div');   
    cardBack.className = 'card-back';
    cardBack.style.backgroundImage = 'url(' + car.picture + ')';
    cardBack.style.backgroundSize = 'contain';
    cardBack.style.backgroundPosition = 'top';
    cardBack.style.backgroundRepeat = 'no-repeat';

    let info = document.createElement('p');
    info.textContent = 'The ' + car.manufacturer + ' ' + car.model + ' is a ' 
    + car.year + ' model with a ' + car.engine.displacement + 'L ' 
    + car.engine.type + ' engine that produces ' + car.engine.horsepower 
    + ' horsepower and ' + car.engine['max-torque'] 
    + ' Nm of torque. It can reach a top speed of ' + car['top-speed'] + ' mph.';
    cardBack.appendChild(info);
    cardBack.appendChild(deleteIcon);

    // Add front and back to card
    card.appendChild(cardFront);
    card.appendChild(cardBack);

    return card;
}

// Create a car object
function createCar(manufacturer, model, year, topSpeed, engineDisplacement, engineHorsepower, engineMaxTorque, engineType, picture) {
    let car = {
        'picture': picture,
        'manufacturer': manufacturer,
        'model': model,
        'year': year,
        'top-speed': topSpeed,
        'engine': {
            'displacement': engineDisplacement,
            'horsepower': engineHorsepower,
            'max-torque': engineMaxTorque,
            'type': engineType
        }
    };
    cars.push(car);
    return car;
}

// Select the div to append the cards
let container = document.querySelector('.card-container');
if (container) {
    for (currentIndex = 0; currentIndex < 3; currentIndex++) {
        let card = createCard(cars[currentIndex]);
        container.appendChild(card);
    }
}

// Create a listing for the cars list
function createListing(car) {
    let listItem = document.createElement('li');
    listItem.textContent = car.manufacturer + ' ' + car.model;
    return listItem;
}

// Select the div to append the list
let container2 = document.querySelector('.list-container');

for (let i = 0; i < cars.length; i++) {
    let listItem = createListing(cars[i]);
    container2.appendChild(listItem);
}

// Add a car to the list
let listing = document.getElementById('add-car');

// When user clicks button, all inputs are sent to the createCar function which creates a new car to be added to the list
if (listing) {
    document.getElementById('add-car').addEventListener('click', function() {
        let picture = document.getElementById('picture').value;
        let manufacturer = document.getElementById('manufacturer').value;
        let model = document.getElementById('model').value;
        let year = document.getElementById('year').value;
        let topSpeed = document.getElementById('top-speed').value;
        let engineDisplacement = document.getElementById('engine-displacement').value;
        let engineHorsepower = document.getElementById('hp').value;
        let engineMaxTorque = document.getElementById('torque').value;
        let engineType = document.getElementById('engine-type').value;
    
        let newCar = createCar(manufacturer, model, year, topSpeed, engineDisplacement, engineHorsepower, engineMaxTorque, engineType, picture);
        let newItem = createListing(newCar);
        container2.appendChild(newItem);
        console.log('Car added!');
    });
}