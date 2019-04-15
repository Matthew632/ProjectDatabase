\c final_project;

CREATE TABLE restaurants (
    restaurant_id SERIAL PRIMARY KEY,
    restaurant_name varchar(255) NOT NULL,
    restaurant_address varchar(255)
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username varchar(255) UNIQUE NOT NULL,
    first_name varchar(255),
    last_name varchar(255),
    restaurant_id INTEGER REFERENCES restaurants(restaurant_id)
);

CREATE TABLE images (
    image_id SERIAL PRIMARY KEY,
    image_path varchar(255),
    restaurant_id INTEGER REFERENCES restaurants(restaurant_id)
);