import {Component,Pipe,PipeTransform} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {Trip} from './app_form';
import {SearchTrip} from './search_trip';
import {TripDetails} from './trip_details';

@Component({
    selector: 'structure,search-trip',
    template: require('../components_html/app_structure.html'),
    styles: [require('../components_css/app_structure.css').toString()],
    directives:[SearchTrip]
})

export class AppStructure {
	trips : number;
  	looparray :number[];
	value = '';
	submitted = false;
  	finalto : boolean;
  	initialfrom : boolean;
  	active = true;
	totalstops(value: number) { 
		this.trips = value;
		let arr : number[] = [];
		for(let fillelem=1; fillelem <= this.trips; fillelem++){

			if(fillelem == 1){ this.initialfrom = true; }
			else{ this.initialfrom = false; }

			if(fillelem == this.trips){ this.finalto = true; }
			else{ this.finalto = false; }

			arr.push(this.trips);
		}
		this.looparray = arr;
		console.log(this.looparray);
	}
  	trip = new Trip('Tvm','Ekm',1);
  	onSubmit() { 
  		this.submitted = true; 
  	}
}
