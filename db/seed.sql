\c final_project;

INSERT INTO restaurants (restaurant_name, restaurant_address)
VALUES ('Pizza Express', '1 Oxford Road'), ('Nandos', '5 Tib Street'), ('Barburrito', '10 Oldham Road');


INSERT INTO users (username, first_name, last_name, restaurant_id)
VALUES ('bob123', 'Bob', 'Smith', null), ('dave123', 'Dave', 'Smith', 2), ('89Laura', 'Laura', 'Turner', null);

INSERT INTO images (image_paths, user_id, restaurant_id)
    VALUES ( ARRAY [ 'https://en.wikipedia.org/wiki/Restaurant#/media/File:Salaamahut.jpg',
 'https://en.wikipedia.org/wiki/Restaurant#/media/File:Salaamahut.jpg', 'https://en.wikipedia.org/wiki/Restaurant#/media/File:Salaamahut.jpg', 'https://en.wikipedia.org/wiki/Restaurant#/media/File:Salaamahut.jpg', 'https://en.wikipedia.org/wiki/Restaurant#/media/File:Salaamahut.jpg', 'https://en.wikipedia.org/wiki/Restaurant#/media/File:Salaamahut.jpg'], 2, 1);


