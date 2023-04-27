# PerfectWriting

## Setup the Front-end

Go to the root of the project

Run `npm install` in your terminal to install the required packages

### Compiles and hot-reloads for development

`npm run serve`

### Compiles and minifies for production

`npm run build`

### Lints and fixes files

`npm run lint`

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Setup the API

Go to the [api](api) folder

1. Run `npm install` in your terminal to install the required packages.
2. Fill in the [docker-compose.yml.example](api/docker-compose.yml.example), [.env.example](api/.env.example) and [database.json.example](api/database.json.example) files by replacing the placeholders with the appropriate values in each file. Rename the three files by deleting the `.example` extension for each of them.
3. Run `docker-compose build` and then `docker-compose up` in your terminal to launch the project container.
**Note**: These commands require administrator privileges.
4. In **another terminal**, run `docker exec -ti name-of-your-container psql -U name-of-your-user name-of-your-db` to get into psql.
**Note**: Run `docker ps -a` with administrator privileges to see the name of the running container.
5. In **another terminal**, run `db-migrate up` to apply migrations on your database.

### Run the API

`npm run watch`

**Note**: The project assumes you have [Docker](https://www.docker.com/) installed on your system.If you encounter any issues during the setup or running of the project, refer to the error message and google it .
