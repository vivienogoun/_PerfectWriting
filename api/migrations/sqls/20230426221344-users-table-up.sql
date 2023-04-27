create table users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(25) NOT NULL,
    lastname VARCHAR(25) NOT NULL,
    age INTEGER,
    username VARCHAR(25) NOT NULL,
    password_digest VARCHAR NOT NULL
);