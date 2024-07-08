import { from, interval, map } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import axios from 'axios';

const apiUrl = 'https://random-data-api.com/api/v2/users';

///////////////////////////////////////////////////////////////////////////////////////////////////
// concatMap: processes request one by one, waiting for each to complete before starting the next
///////////////////////////////////////////////////////////////////////////////////////////////////

const Observable5 = interval(3000).pipe(
    concatMap(() => from(axios.get(apiUrl))),
    map(response=>response)
);

Observable5.subscribe({
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
