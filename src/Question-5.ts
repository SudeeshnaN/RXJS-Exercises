import { from, interval, map } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import axios from 'axios';

const apiUrl = 'https://random-data-api.com/api/v2/users';

///////////////////////////////////////////////////////////////////////////////////////////////////
// SwitchMap: only considers the most recent request, ignoring all previous ones
///////////////////////////////////////////////////////////////////////////////////////////////////

const Observable4 = interval(3000).pipe(
  switchMap(() => {
    console.log('Previous emission ended');
    return from(axios.get(apiUrl)).pipe(
      tap(() => console.log('New emission started'))
    );
  }),
  map(response=>response)
);

Observable4.subscribe({
    next(data) {
      console.log('Fetched Data:', data);
    },
    error(error) {
      console.error('Error occurred:', error);
    },
    complete() {
      console.log('Completed');
    }
  });
