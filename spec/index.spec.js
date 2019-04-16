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
          name: 'kfc',
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
    it('it should add new user to a database', () => {
      request
        .post('/api/users')
        .send({
          user_name: 'name',
          first_name: 'first',
          last_name: 'last',
          restaurant_name: 'Printworks'
        })
        .expect(201)
        .then(res => {
          expect(res.body.user).to.contain.keys(
            'user_id',
            'user_name',
            'last_name',
            'restaurant_name'
          );
        });
    });
    it('should return  array of users', () =>
      request
        .get('/api/users')
        .expect(200)
        .then(res => {
          expect(res.body.users).lengthOf(1);
        }));
    it('it should add new user to a database', () => {
      request
        .post('/api/users')
        .send({
          user_name: 'ss',
          first_name: 'ss',
          last_name: 'ss',
          restaurant_name: 'kfc'
        })
        .expect(201)
        .then(res => {
          expect(res.body.user).to.contain.keys(
            'user_id',
            'user_name',
            'last_name',
            'restaurant_name'
          );
        });
    });
    it('should get user by id', () => {
      request
        .get('/api/user/1')
        .expect(200)
        .then(res => {
          //console.log(res.body.user);
        });
    });
  });
});
