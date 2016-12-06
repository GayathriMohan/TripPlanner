import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {Trip} from './app.interface';
import {AppData} from './appdata';

@Component({
    selector: 'accordion',
    template: require('./appaccordion.html'),
})

export class AppAccordion {
  trip = new Trip('Tvm','Ekm',1);
  submitted = false;
  remove = false;
  onSubmit() { this.submitted = true; }
  active = true;
  onRemove() {this.remove = true; }
  // onAdd() {
  //   this.trip = new Trip('','');
  //   this.active = false;
  //   setTimeout(()=> this.active=true, 0);
  // }
}
