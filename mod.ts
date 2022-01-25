export class random{
    static randint(min:number,max:number){
        return Math.floor(Math.random() * (min - max)) + min
    }
    static choice(arr:[]){
        var index = Math.floor(Math.random() * arr.length);
        return arr[index]; 
    }
    static generateRandomNumber(numberOfCharacters:number,stringValues:string|undefined) {
        var randomValues = '';
        if(stringValues == undefined){
            stringValues = 'ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyzPQRSTUVWXYZ';  
        }
        var sizeOfCharacter = stringValues.length;  
        for (var i = 0; i < numberOfCharacters; i++) {
           randomValues = randomValues+stringValues.charAt(Math.floor(Math.random() * sizeOfCharacter));
        }
        return randomValues;
    }
}