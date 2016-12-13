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
	value='';
	totalstops(value: number) { 
		this.trips = value;
		let arr : number[] = [];
		for(let fillelem=0; fillelem < this.trips; fillelem++){
			arr.push(this.trips);
		}
		this.looparray = arr;
		console.log(this.looparray);
	}
  trip = new Trip('Tvm','Ekm',1);
  submitted = false;
  onSubmit() { 
  	this.submitted = true; 
  }
  active = true;
}
