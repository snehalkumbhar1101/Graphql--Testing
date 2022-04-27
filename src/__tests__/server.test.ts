
import { createApolloServer } from '../server';

import request from 'supertest';


const queryData = {
  query: `query sayHello($name: String) {
    hello(name: $name)
  }`,
  variables: { name: 'world' },
};

describe('e2e demo', () => {
  let server, url;

  
  beforeAll(async () => {
    
    ({ server, url } = await createApolloServer({ port: 0 }));
  });

  
    await server?.close();
  });

  it('says hello', async () => {
  
    const response = await request().post('/').send(queryData);
    expect(response.errors).toBeUndefined();
    expect(response.body.data?.hello).toBe('Hello world!');
  });
};

function beforeAll(arg0: () => Promise<void>) {
    throw new Error('Function not implemented.');
}

function expect(errors: any) {
    throw new Error('Function not implemented.');
}
 