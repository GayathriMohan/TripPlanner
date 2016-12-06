import {bootstrap} from 'angular2/platform/browser';
import {Component,Input,Output} from 'angular2/core';
import {AppAccordion} from './appaccordion';

@Component({
	selector:'app',
	template:'<accordion></accordion>',
	directives:[AppAccordion]
})

export class AppData{ 
}
