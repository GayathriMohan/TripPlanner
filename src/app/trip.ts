export class Trips{
	start:string;
	destination:string;
	stops:number;
	display:string;
	
	constructor(start,destination,stops){
		this.start=start;
		this.destination=destination;
		this.stops=stops;
		this.display=this.start+' '+this.destination;
	}
}
console.log(Trips[1]);