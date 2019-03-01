// class Joke{
//     setup:string;
//     line:string;
//     hide:boolean;
//     constructor(setup:string, line:string, hide:boolean)
//     {
//         this.setup = setup;

//     }
// }
export class Joke{
   
    constructor(public setup:string,public line:string,public category:string,
        public id?:number,public hide?:boolean)
    {    
        this.hide = true; 
    }
    toggle()
    {
        this.hide = !this.hide;
    }
}