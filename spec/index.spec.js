const chai = require('chai');
const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);
const connection = require('../db/connection');

describe('', () => {
  after(() => connection.destroy());

  describe('/restaurant /:restaurant_id', () => {
    it('should return an array of 6 images', () =>
      request
        .get('/api/restaurant/1')
        .expect(200)
        .then(res => {
          expect(res.body.restaurant.image_path).to.be.a('string');
        }));
    it('should return an array of restaurants', () =>
      request
        .get('/api/restaurants')
        .expect(200)
        .then(res => {
          expect(res.body.restaurants).lengthOf(3);
        }));
    it('should post new image url to existing restaurant', () =>
      request
        .post('/api/restaurant/2')
        .send({ image_path: 'google.com' })
        .expect(201)
        .then(res => {
          expect(res.body.image).to.be.a('object');
        }));
    it('should add a new restaurant', () =>
      request
        .post('/api/restaurants')
        .send({
          restaurant_name: 'Printworks',
          restaurant_address: 'M24 fox street '
        })
        .expect(201)
        .then(res => {
          expect(res.body.restaurant).to.contain.keys(
            'restaurant_id',
            'restaurant_address'
          );
        }));
  });
});
