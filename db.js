const { Pool } = require("pg");
const dotenv = require("dotenv");
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
          id INT NOT NULL PRIMARY KEY,
          role_name VARCHAR(128) NOT NULL,
          UNIQUE(role_name)
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

const createusersTables = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
    users(
        user_name VARCHAR(128) NOT NULL PRIMARY KEY,
        phone BIGINT NOT NULL,
        fname VARCHAR(128) NOT NULL,
        lname  VARCHAR(128) NOT NULL,
        email VARCHAR(128) NOT NULL,
        password VARCHAR(128) NOT NULL,
        created_date TIMESTAMP,
        lastlogin_date TIMESTAMP,
        UNIQUE(phone)
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

const createinstructorsTables = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
    instructors(
        user_name VARCHAR(128) NOT NULL PRIMARY KEY,
        phone BIGINT NOT NULL,
        fname VARCHAR(128) NOT NULL,
        lname  VARCHAR(128) NOT NULL,
        email VARCHAR(128) NOT NULL,
        password VARCHAR(128) NOT NULL,
        created_date TIMESTAMP,
        lastlogin_date TIMESTAMP,
        UNIQUE(phone)
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

const role_users = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
  role_users(
    id INT NOT NULL, 
    user_name VARCHAR(128) NOT NULL, 
    role_name Varchar(255) NOT NULL,
    PRIMARY KEY (user_name, role_name),
        CONSTRAINT fk_role
               FOREIGN KEY(role_name) 
                 REFERENCES roles(role_name)
                 ON DELETE SET NULL,
           CONSTRAINT fk_user
               FOREIGN KEY(user_name) 
                 REFERENCES users(user_name)   
                 ON DELETE SET NULL
           
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

const dropusersTables = () => {
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
  createusersTables,
  createinstructorsTables,
  dropusersTables,
  role_users,
};

require("make-runnable");

//insert values in the user_roletable
//delete the instructor and sti\uent table
//recreate
//see how user tables gets affects

// INSERT INTO role_users(id, user_name, role_name)
// VALUES(1,'JohnDoe1','admin'),
//       (2,'DavidWright','instructor'),
//       (3,'JaneDoe','student'),
//       (4,'DavidWright2','instructor');

// INSERT INTO roles(user_name, role_name)
// VALUES(1,'admin'),
//       (2,'user'),
//       (3,'instructor'),
//       (4,'student')

// INSERT INTO roles(user_name, role_name)
// VALUES('JohnDoe1','admin'),
//       ('DavidWright','user'),
//       ('DavidWright2','instructor'),
//       ('JaneDoe','student')

// INSERT INTO users(user_name,phone,fname,lname,email,password,created_date,lastlogin_date)
// VALUES('JohnDoe1','768766986984','Jone','Doe','john.doe@bluebird.dev','1234', '2016-06-22 19:10:25-07', '2016-06-22 19:10:25-07'),
//       ('JaneDoe','408111123544','Jone', 'Doe','jane.doe@bluebird.dev','1234','2016-06-22 19:10:25-07','2016-06-22 19:10:25-07'),
//       ('DavidWright','408222123434','David', 'Wright','david.wright@dolphin.dev','1234','2016-06-22 19:10:25-07','2016-06-22 19:10:25-07'),
//       ('DavidWright2','40822212343445','David2', 'Wright3','david.wright3@dolphin.dev','1234r','2016-06-22 19:10:25-07','2016-06-22 19:10:25-07');
