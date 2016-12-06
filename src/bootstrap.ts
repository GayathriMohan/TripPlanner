import {bootstrap} from 'angular2/platform/browser';
import {AppData} from './app/appdata';
import {AppAccordion} from './app/appaccordion';

bootstrap(AppData)
	.catch(err=>console.log(err));


bootstrap(AppAccordion)
	.catch(err=>console.log(err));