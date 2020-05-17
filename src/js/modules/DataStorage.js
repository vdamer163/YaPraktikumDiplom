export default class DataStorage {
    constructor() {

    }
    setItem(dataValue,keyValue){

        localStorage.setItem(`${keyValue}`,JSON.stringify(dataValue))
    };
    getItem(keyValue){
       return JSON.parse(localStorage.getItem(`${keyValue}`))
    }
}