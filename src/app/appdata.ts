import {Component} from 'angular2/core';
// import {AppAccordion} from './appaccordion';

@Component({
	selector:'app',
	template:require('./app.html')
})

export class AppData{ 
	// constructor(){
	// 	let trips=[];
	// }
	onClickMe(start,destination,stops){
	  let isClicked=true;
	  let trips=[];
	  trips.push(start,destination,stops);
	  console.log(trips);
	}
}