// import { ArrayService } from "./app-service";

// export class ArrayComponent implements ArrayService {

//     constructor() {}

//     public arrayMultiply(myArray: number[]) : void Array<Number>() {
      
//     }

//     public arraySeparate(myArray: any) : Array<string>{
        
//     }

//     public arraySplit(str:string) : Array<number>{

//     }

//     public arraySort(myArray:any):Array<string>{
      
//     }

//     public arrayReplace(myArray:any):Array<number>{
       
// }

// let myArray: number[] = [34, 45, 60, 23, 13, 25, 70];
// let array = new ArrayComponent();

// console.log(array.arrayMultiply(myArray));
// console.log(array.arraySeparate(myArray));
// console.log(array.arraySort(myArray));
// console.log(array.arrayReplace(myArray));

import {StringManipulationService} from "./app-service";

class ArrayManipulations  implements StringManipulationService{
    arrayFindMultiples(myArray : any) : Array<any>{
        let i :number;
        let resultArray: Array<any> = [];
        for (i = 0; i < myArray.length; i++){
            if ((myArray[i]%5==0) && myArray[i]%10==0 ) {
                resultArray.push(myArray[i]);
             }
        }
        return resultArray;
    }
    arraySeparate(myArray : any) : Array<any>{
        let i :number;
        let resultStringArray: Array<any> = [];
        for (i = 0; i < myArray.length; i++) { 
        if (typeof (myArray[i]) == "string") {
            resultStringArray.push(myArray[i]);
        }
    }
    return resultStringArray;
    }
    arraySplit(myString : string) : Array<String>{
        let i :number;
        let numbersArray: Array<number> = [];
        let resultOddNumbersArray: Array<any> = [];
        for (i = 0; i < myString.length; i++) { 
            if (typeof (myString[i]) == "number") {
                numbersArray.push(parseInt(myString[i]));
            }    
        }
        for (i = 0; i < numbersArray.length; i++) { 
            if (numbersArray[i] % 2 != 0) { 
                resultOddNumbersArray.push(numbersArray[i]);
            }
        }
            return resultOddNumbersArray;
    }
    arraySort(myArray : any) : Array<any>{
        return myArray.sort();
    }
    arrayReplace(myArray : any) : Array<any>{
        let i :number;
        let numbersArray: Array<number> = [];
       
        for (i = 0; i < myArray.length; i++) { 
            if (typeof (myArray[i]) == "number") {
                numbersArray.push(parseInt(myArray[i]));
            }    
        }
        for (i = 0; i < numbersArray.length; i++) { 
            if (numbersArray[i] % 3== 0) { 
                numbersArray[i]=5;
            }
        }
        return numbersArray;
    }
}