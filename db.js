const { Pool } = require("pg");
const dotenv = require("dotenv");
//https://www.codementor.io/@olawalealadeusi896/building-a-simple-api-with-nodejs-expressjs-postgresql-db-and-jwt-3-mke10c5c5
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on("connect", () => {
  console.log("connected to the db");
});

/**
 * Create Tables
 */
const createRoleTables = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
        roles(
          id UUID PRIMARY KEY,
          role_name VARCHAR(128) NOT NULL,
        )`;

  pool
    .query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

const createUserTables = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
          users(
            id UUID PRIMARY KEY,
            username VARCHAR(128) NOT NULL,
            fname VARCHAR(128) NOT NULL,
            lname  VARCHAR(128) NOT NULL,
            phone INT NOT NULL ,
            email VARCHAR(128) NOT NULL,
            password VARCHAR(128) NOT NULL,
            role VARCHAR(128) NOT NULL,
            created_date TIMESTAMP,
            lastlogin_date TIMESTAMP
          )`;

  pool
    .query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

const createStudentsTables = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
          students(
            stud_id UUID PRIMARY KEY,
            student_name VARCHAR(128) NOT NULL,
            phone INT NOT NULL.
            fname VARCHAR(128) NOT NULL,
            lname  VARCHAR(128) NOT NULL, 
            email VARCHAR(128) NOT NULL,
            password VARCHAR(128) NOT NULL,
            role VARCHAR(128) NOT NULL,
            created_date TIMESTAMP,
            lastlogin_date TIMESTAMP
          )`;

  pool
    .query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

const createInstructorsTables = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
    instructors(
        inst_id UUID PRIMARY KEY,
        inst_name VARCHAR(128) NOT NULL,
        phone INT NOT NULL,
        fname VARCHAR(128) NOT NULL,
        lname  VARCHAR(128) NOT NULL,
        email VARCHAR(128) NOT NULL,
        password VARCHAR(128) NOT NULL,
        role VARCHAR(128) NOT NULL,
        created_date TIMESTAMP,
        lastlogin_date TIMESTAMP
          )`;

  pool
    .query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};
/**
 * Drop Tables
 */
const dropRoleTables = () => {
  const queryText = "DROP TABLE IF EXISTS roles";
  pool
    .query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

const dropUsersTables = () => {
  const queryText = "DROP TABLE IF EXISTS users";
  pool
    .query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

const dropStudentsTables = () => {
  const queryText = "DROP TABLE IF EXISTS students";
  pool
    .query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

const dropInstructorsTables = () => {
  const queryText = "DROP TABLE IF EXISTS instructors";
  pool
    .query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

pool.on("remove", () => {
  console.log("client removed");
  process.exit(0);
});

module.exports = {
  createRoleTables,
  dropRoleTables,
  createUserTables,
  dropUsersTables,
  createInstructorsTables,
  dropInstructorsTables,
  dropStudentsTables,
  createStudentsTables,
};

require("make-runnable");
