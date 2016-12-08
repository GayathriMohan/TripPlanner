import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {Trip} from './app_form';
import {SearchTrip} from './search_trip';
import {TripDetails} from './trip_details';

@Component({
    selector: 'structure,search-trip',
    template: require('../components_html/app_structure.html'),
    directives:[SearchTrip]
})

export class AppStructure {
	value='';
	totalstops(value: number) { 
		let trips=value;
		let number=Array(3).fill(value);
		console.log(number);
	}
  trip = new Trip('Tvm','Ekm',1);
  submitted = false;
  onSubmit() { this.submitted = true; }
  active = true;
}
