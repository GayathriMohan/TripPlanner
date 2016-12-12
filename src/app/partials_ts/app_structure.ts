import {Component,Pipe,PipeTransform} from 'angular2/core';
// import { BrowserModule } from '@angular2/platform-browser';
import {NgForm}    from 'angular2/common';
import {Trip} from './app_form';
import {SearchTrip} from './search_trip';
import {TripDetails} from './trip_details';

// @Pipe({
//   name: 'fill'
// })

@Component({
    selector: 'structure,search-trip',
    template: require('../components_html/app_structure.html'),
    styles: [require('../components_css/app_structure.css').toString()],
    directives:[SearchTrip],
    // pipes: [ FillPipe ]
})

// export class FillPipe implements PipeTransform{
// 	transform(value) {
//     return (new Array(value)).fill(1);
//   }
// }

export class AppStructure {
	arr = Array;
  	num:number = 3;
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
