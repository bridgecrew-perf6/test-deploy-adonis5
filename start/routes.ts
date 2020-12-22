/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return [
    { hello: 'world', a: 'a', b: 'b', c: 'c', d: 'd', f: 'f', g: 'g', h: 'h', i: 'i', j: 'j' },
    { hello: 'world', a: 'a', b: 'b', c: 'c', d: 'd', f: 'f', g: 'g', h: 'h', i: 'i', j: 'j' },
    { hello: 'world', a: 'a', b: 'b', c: 'c', d: 'd', f: 'f', g: 'g', h: 'h', i: 'i', j: 'j' },
    { hello: 'world', a: 'a', b: 'b', c: 'c', d: 'd', f: 'f', g: 'g', h: 'h', i: 'i', j: 'j' },
    { hello: 'world', a: 'a', b: 'b', c: 'c', d: 'd', f: 'f', g: 'g', h: 'h', i: 'i', j: 'j' },
    { hello: 'world', a: 'a', b: 'b', c: 'c', d: 'd', f: 'f', g: 'g', h: 'h', i: 'i', j: 'j' },
    { hello: 'world', a: 'a', b: 'b', c: 'c', d: 'd', f: 'f', g: 'g', h: 'h', i: 'i', j: 'j' },
    { hello: 'world', a: 'a', b: 'b', c: 'c', d: 'd', f: 'f', g: 'g', h: 'h', i: 'i', j: 'j' },
    { hello: 'world', a: 'a', b: 'b', c: 'c', d: 'd', f: 'f', g: 'g', h: 'h', i: 'i', j: 'j' },
    { hello: 'world', a: 'a', b: 'b', c: 'c', d: 'd', f: 'f', g: 'g', h: 'h', i: 'i', j: 'j' },
    { hello: 'world', a: 'a', b: 'b', c: 'c', d: 'd', f: 'f', g: 'g', h: 'h', i: 'i', j: 'j' },
    { hello: 'world', a: 'a', b: 'b', c: 'c', d: 'd', f: 'f', g: 'g', h: 'h', i: 'i', j: 'j' },
    { hello: 'world', a: 'a', b: 'b', c: 'c', d: 'd', f: 'f', g: 'g', h: 'h', i: 'i', j: 'j' },
    { hello: 'world', a: 'a', b: 'b', c: 'c', d: 'd', f: 'f', g: 'g', h: 'h', i: 'i', j: 'j' },
    { hello: 'world', a: 'a', b: 'b', c: 'c', d: 'd', f: 'f', g: 'g', h: 'h', i: 'i', j: 'j' },
  ]
})

Route.get('/potato', async () => {
  return [{ hello: 'Bruno' }]
})
