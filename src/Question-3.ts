import { filter } from "rxjs/operators";
import { Observable1 } from "./Question-2";
import { Car } from "./Question-1";

const Observable2 = Observable1.pipe(filter((car:Car)=> car.color==='black' && car.yearofRelease<2000));

// Observable2.subscribe((car)=>console.log(car));

export {Observable2};