import {faker} from '@faker-js/faker';

export interface Car {
    name: string;
    model: string;
    yearofRelease: number;
    brand: string;
    color: string;
}

export default function getRandomCar(): Car {

    let CarObject = {
        name: faker.vehicle.vehicle(),
        model: faker.vehicle.model(),
        yearofRelease: new Date(faker.date.between({ from: '1950-01-01', to: '2022-12-31' })).getFullYear(),
        brand: faker.vehicle.manufacturer(),
        color: faker.vehicle.color(),
    }
    return CarObject
}

// console.log("car Object", getRandomCar())
