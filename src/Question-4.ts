import { Car } from "./Question-1"
import { Observable2 } from "./Question-3"
import { map } from "rxjs"

interface Scrap {
    brand: string, 
    yearofRelease: number
}

const Observable3 = Observable2.pipe(
    map((car:Car)=>(
        {brand: car.brand, yearofRelease: car.yearofRelease}
    ))
)

Observable3.subscribe((scrap:Scrap)=>console.log(scrap));