import {bootstrap} from 'angular2/platform/browser';
import {Component,ViewChild,ViewContainerRef,ComponentRef,DynamicComponentLoader,Injector,Injectable,ComponentResolver,ComponentFactory} from 'angular2/core';
import {TripDetails} from './trip_details';

@Component({
	selector:'search-trip',
	template:require('../components_html/search_trip.html'),
	directives:[TripDetails]
})

export class SearchTrip{ 
	@ViewChild('activeComponent',{read: ViewContainerRef}) activeComponent: ViewContainerRef;
  cmp:ComponentRef;
  constructor(private dcl: DynamicComponentLoader, injector: Injector,private resolver: ComponentResolver) {}
  clicked = false;
  onAdd(){
  	this.clicked=true;
    this.resolver.resolveComponent(SearchTrip).then((factory:ComponentFactory) => {
          this.cmp = this.activeComponent.createComponent(factory);
    });
  }
  onRemove(){
  	this.activeComponent.remove();
  }
}
