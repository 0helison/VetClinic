# Veterinary Clinic API

---

## - Description
This challenge aimed to create an API that stores information about pet owners and pets of a veterinary clinic, using the Express framework, the Sequelize ORM, and integrating SQLite with Node.js.

---

#### Node version:
```bash
20.11.1
```

#### NPM version:
```bash
10.2.4
```

#### Libs:
```bash
"dotenv": "^16.4.5",
"express-validator": "^7.0.1",
"sequelize": "^6.37.3",
"sqlite3": "^5.1.7",
"nodemon": "^3.1.0"
```

#### Framekors:
```bash
"express": "^4.19.2"
```

---

## - Installation
On your local machine, create a directory and insert the following command:
```bash
git clone https://github.com/0helison/VetClinic.git .
```
After cloning the repository, execute:
```bash
npm install
```

---

## - Database and Port Configuration
Create a `.env` file in the project root and fill it as per the example in `.env.example`:
```bash
DB_DIALECT=sqlite
DB_STORAGE=./src/config/vetclinic.sqlite
DB_HOST=localhost
DB_DATABASE=vetclinic
DB_USER=''
DB_PASSWORD=''
PORT=3000
```
- DB_DIALECT= → name of the database used;
- DB_STORAGE= → example of the path you define to create the database;
- DB_HOST= → used host;
- DB_DATABASE= → name of the database to be created;
- DB_USER= → username (for SQLite it's usually an empty field);
- DB_PASSWORD= → user password (for SQLite it's usually an empty field);
- PORT= → port your application will use;

---

## - Usage
On your local machine, create a directory and insert the following command:
```bash
npm run dev
```
Access the API through the base URL:
```bash
http://localhost:3000/vetclinic
```

---

# Entity - Tutor

##  - Example of POST Request to Register a Tutor
- **POST /tutor**
  ```
  http://localhost:3000/vetclinic/tutor
  ```
  - **Example JSON**:
    ```json
    {
        "name": "Antonio Carlos",
        "phone": "83910605001",
        "email": "ant@paidepet.com",
        "date_of_birth": "2006-12-01 15:15",
        "zip_code": "18750000"
    }
    ```
  - **Possible Responses**:
    - **201 Created**: Tutor created successfully.
    - **422 Unprocessable Entity**: Validation errors in the request body.
    - **500 Internal Server Error**: An error occurred while creating the tutor.

## - Example of GET Request to Get All Tutors
- **GET /tutors**
  ```
  http://localhost:3000/vetclinic/tutors
  ```
  - **Example Response JSON**:
    ```json
    [
      {
        "id": 1,
        "name": "Lucas Pedro",
        "phone": "83981605001",
        "email": "lucasp@paidepet.com",
        "date_of_birth": "2006-12-01T17:15:00.000Z",
        "zip_code": "23750000",
        "pets": [
          {
            "id": 1,
            "name": "Perigoso",
            "species": "dog",
            "carry": "p",
            "weight": 7,
            "date_of_birth": "2021-03-01T23:59:00.000Z",
            "tutor_id": 3
          }
        ]
      }
    ]
    ```
  - **Possible Responses**:
    - **200 OK**: Tutors obtained successfully.
    - **500 Internal Server Error**: An error occurred while getting the tutors.

## - Example of PUT Request to Update a Tutor
- **PUT /tutor/:id**
  ```
  http://localhost:3000/vetclinic/tutor/:id
  ```
  - **Example JSON**:
    ```json
    {
        "name": "Antonio Marlos",
        "phone": "85960005001",
        "email": "antmarlos@tiodepet.com",
        "date_of_birth": "1972-05-13 14:22",
        "zip_code": "40750000"
    }
    ```
  - **Possible Responses**:
    - **200 OK**: Tutor updated successfully.
    - **404 Not Found**: Tutor not found.
    - **422 Unprocessable Entity**: Validation errors in the request body.
    - **500 Internal Server Error**: An error occurred while updating the tutor.

##  - Example of DELETE Request to Remove a Tutor
- **DELETE /tutor/:id**
  ```
  http://localhost:3000/vetclinic/tutor/:id
  ```
  - **Possible Responses**:
    - **200 OK**: Tutor removed successfully.
    - **404 Not Found**: Tutor not found.
    - **500 Internal Server Error**: An error occurred while removing the tutor.

---

# Entity Pet

### - Example of POST Request to Register a Pet
- **POST /pet/:tutorId**
  ```
  http://localhost:3000/vetclinic/pet/:tutorId
  ```
  - **Example JSON**:
    ```json
    {
        "name": "Caramelo",
        "species": "dog",
        "carry": "p",
        "weight": 7,
        "date_of_birth": "2021-03-01 20:59"
    }    
    ```
  - **Possible Responses**:
    - **201 Created**: Pet created successfully.
    - **422 Unprocessable Entity**: Validation errors in the request body.
    - **500 Internal Server Error**: An error occurred while creating the pet.

### - Example of PUT Request to Update a Pet
- **PUT /pet/:petId/tutor/:tutorId**
  ```
  http://localhost:3000/vetclinic/pet/:petId/tutor/:tutorId
  ```
  - **Example JSON**:
    ```json
    {
        "name": "Pingo",
        "species": "dog",
        "carry": "p",
        "weight": 6,
        "date_of_birth": "2024-01-10 19:24"
    } 
    ```
  - **Possible Responses**:
    - **200 OK**: Pet updated successfully.
    - **404 Not Found**: Pet not found.
    - **422 Unprocessable Entity**: Validation errors in the request body.
    - **500 Internal Server Error**: An error occurred while updating the pet.

###  - Example of DELETE Request to Remove a Pet
- **DELETE /pet/:petId/tutor/:tutorId**
  ```
  http://localhost:3000/vetclinic/pet/:petId/tutor/:tutorId
  ```
  - **Possible Responses**:
    - **200 OK**: Pet removed successfully.
    - **404 Not Found**: Pet not found.
    - **500 Internal Server Error**: An error occurred while removing the pet.

---
