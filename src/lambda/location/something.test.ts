import * as request from 'supertest';
// import { main } from './hello';

describe('hello', () => {
  it('should do something', () => {
    // request('http://localhost:3000/dev/hello').post().send({ name: 'Frederic' });
    console.log(request);
    expect('something').toEqual('something');
  });
});
