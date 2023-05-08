create table users (
    id SERIAL PRIMARY KEY,
    lastname VARCHAR(25) NOT NULL,
    firstname VARCHAR(25) NOT NULL,
    email VARCHAR(25) NOT NULL,
    password_digest VARCHAR NOT NULL
);