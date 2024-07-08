import { from, interval, map } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import axios from 'axios';

const apiUrl = 'https://random-data-api.com/api/v2/users';

///////////////////////////////////////////////////////////////////////////////////////////////////
// mergeMap: processes requests at the same time, returning responses as they arrive
///////////////////////////////////////////////////////////////////////////////////////////////////

const Observable6 = interval(3000).pipe(
    take(5),
    mergeMap(() => from(axios.get(apiUrl))),
    map(response=>response)
);

Observable6.subscribe({
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
