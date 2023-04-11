-- checks to see if management_db exists, if not management_db will be created
DROP DATABASE IF EXISTS management_db;
CREATE DATABASE management_db;

-- uses the management_db database
USE management_db;

-- create the department table
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

-- creates the role table
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

-- creates the employee table
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id)
  REFERENCES role(id),
  FOREIGN KEY (manager_id) 
  REFERENCES employee(id)
);