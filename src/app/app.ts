import {bootstrap}    from 'angular2/platform/browser';
import {AppStructure} from './partials_ts/app_structure';
import {SearchTrip} from './partials_ts/search_trip';
import {TripDetails} from './partials_ts/trip_details';

bootstrap(AppStructure);
bootstrap(SearchTrip);
bootstrap(TripDetails);