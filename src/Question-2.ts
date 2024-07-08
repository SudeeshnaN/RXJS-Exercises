import { Observable } from "rxjs";
import getRandomCar, { Car } from "./Question-1";

// Return new car every 1 sec

const Observable1 : Observable<Car> = new Observable((subscriber) => {
    setInterval(() => subscriber.next(getRandomCar()), 1000);
})

Observable1.subscribe(car => console.log(car));

export {Observable1};