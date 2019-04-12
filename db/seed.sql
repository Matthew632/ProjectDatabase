\c final_project;

INSERT INTO restaurants (restaurant_name, restaurant_address)
VALUES ('Pizza Express', '1 Oxford Road'), ('Nandos', '5 Tib Street'), ('Barburrito', '10 Oldham Road');


INSERT INTO users (username, first_name, last_name, restaurant_id)
VALUES ('bob123', 'Bob', 'Smith', null), ('dave123', 'Dave', 'Smith', 2), ('89Laura', 'Laura', 'Turner', null);

INSERT INTO images (image_path, user_id, restaurant_id)
VALUES ('https://en.wikipedia.org/wiki/Restaurant#/media/File:6x8_80dpi_-_Piment_rouge_-_view_of_cellar_fm_mezz_stairs_to_Peel.JPG', 2, 1), ('Nandos', '5 Tib Street'), ('https://en.wikipedia.org/wiki/Restaurant#/media/File:Salaamahut.jpg', 2, 3);


