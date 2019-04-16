const chai = require('chai');
const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);
const connection = require('../db/connection');

describe('', () => {
  after(() => connection.destroy());

  describe('/restaurant /:restaurant_id', () => {
    it('should add a new restaurant', () =>
      request
        .post('/api/restaurants')
        .send({
          name: 'Printworks',
          description: 'Great place to eat',
          rating: 1,
          photo_url: 'something@.com',
          address: 'm40 Lincoln street',
          link_to_360: 'something360.com'
        })
        .expect(201)
        .then(res => {
          expect(res.body.restaurant).to.contain.keys('restaurant_id', 'name');
        }));
    it('should add a new restaurant and add rating default to 0 ', () =>
      request
        .post('/api/restaurants')
        .send({
          name: 'something else',
          description: 'Great place to eat',
          photo_url: 'something@.com',
          address: 'm40 Lincoln street',
          link_to_360: 'something360.com'
        })
        .expect(201)
        .then(res => {
          expect(res.body.restaurant).to.contain.keys(
            'restaurant_id',
            'name',
            'description',
            'rating'
          );
        }));
    it('should return restaurant by id', () =>
      request
        .get('/api/restaurant/2')
        .expect(200)
        .then(res => {
          expect(res.body.restaurant).to.be.a('object');
        }));
    it('should return an array of restaurants', () =>
      request
        .get('/api/restaurants')
        .expect(200)
        .then(res => {
          expect(res.body.restaurants).lengthOf(2);
        }));
  });
});
