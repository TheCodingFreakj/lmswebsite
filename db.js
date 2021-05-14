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

const createInstructorsTables = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
    instructors(
        inst_id INT NOT NULL PRIMARY KEY,
        inst_name VARCHAR(128) NOT NULL,
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

const createStudentsTables = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
          students(
            stud_id INT NOT NULL PRIMARY KEY,
            student_name VARCHAR(128) NOT NULL,
            phone BIGINT NOT NULL,
            fname VARCHAR(128) NOT NULL,
            lname  VARCHAR(128) NOT NULL, 
            email VARCHAR(128) NOT NULL,
            password VARCHAR(128) NOT NULL,
            role VARCHAR(128) NOT NULL,
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
            user_id INT NOT NULL, 
            role_id INT NOT NULL,
            PRIMARY KEY (user_id, role_id),
                CONSTRAINT fk_role
                       FOREIGN KEY(role_id) 
                         REFERENCES roles(id)
                         ON DELETE SET NULL,
                   CONSTRAINT fk_user
                       FOREIGN KEY(user_id) 
                         REFERENCES instructors(inst_id)   
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
  createInstructorsTables,
  dropInstructorsTables,
  dropStudentsTables,
  createStudentsTables,
  role_users,
};

require("make-runnable");

//insert values in the user_roletable
//delete the instructor and sti\uent table
//recreate
//see how user tables gets affects
// INSERT INTO instructors(inst_id, inst_name,phone,fname,lname,email,password,created_date,lastlogin_date)
// VALUES(1,'JohnDoe','76876698698','Jone','Doe','john.doe@bluebird.dev','1234', '2016-06-22 19:10:25-07', '2016-06-22 19:10:25-07'),
//       (2,'JaneDoe','4081111235','Jone', 'Doe','jane.doe@bluebird.dev','1234','2016-06-22 19:10:25-07','2016-06-22 19:10:25-07'),
//       (3,'DavidWright','4082221234','David', 'Wright','david.wright@dolphin.dev','1234','2016-06-22 19:10:25-07','2016-06-22 19:10:25-07');
