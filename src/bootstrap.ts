import {bootstrap} from 'angular2/platform/browser';
import {AppStructure} from './app/partials_ts/app_structure';

bootstrap(AppStructure)
	.catch(err=>console.log(err));