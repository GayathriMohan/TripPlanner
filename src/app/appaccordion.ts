import {Component} from 'angular2/core';
import {AppData} from './appdata';

@Component({
    selector: 'accordion',
    template: require('./appaccordion.html'),
    directives:[AppData]
})

export class AppAccordion {
}