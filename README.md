# API da Clínica Veterinária

---

## - Descrição
Este desafio teve como objetivo criar uma API que armazenasse informações sobre tutores e pets de uma clínica veterinária, utilizando o framework Express, a ORM Sequelize e integrando o Sqlite com Node.js.

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
"swagger-ui-express": "^5.0.0"
```

#### Framekors:
```bash
"express": "^4.19.2"
```

---

## - Instalação
Em sua máquina local, crie um diretório e insira o seguinte comando:
```bash
git clone https://github.com/0helison/VetClinic.git .
```
Após clonar o repositório, execute:
```bash
npm install
```

---

## - Configuração do Banco de Dados e Porta
Crie um arquivo `.env` na raiz do projeto e preencha o arquivo `.env` conforme o exemplo em `.env.example`:
```bash
DB_DIALECT=sqlite
DB_STORAGE=./src/config/apiDB.sqlite
DB_HOST=localhost
DB_DATABASE=apiDB
DB_USER=''
DB_PASSWORD=''
PORT=3000
```
- DB_DIALECT=sqlite →  nome  do banco de dados utilizado;
- DB_STORAGE=./src/config/apiDB.sqlite → exemplo de caminho que você define pra criar o banco;
- DB_HOST=localhost → host utilizado;
- DB_DATABASE=apiDB → nome do banco de dados que será criado;
- DB_USER='' → nome do usuário (para sqlite geralmente é um campo vazio);
- DB_PASSWORD='' → senha do usuário (para sqlite geralmente é um campo vazio);
- PORT=3000 → porta que sua aplicação irá utilizar;

---

## - Uso
Em sua máquina local, crie um diretório e insira o seguinte comando:
```bash
node .\src\app.js
```
Acesse a API através da URL base:
```bash
http://localhost:3000/vetclinic
```

---

# Entidade - Tutor

##  - Exemplo de Requisição POST para Cadastrar um Tutor
- **POST /tutor**
  ```
  http://localhost:3000/vetclinic/tutor
  ```
  - **Exemplo de JSON**:
    ```json
    {
        "name": "Antonio Carlos",
        "phone": "83910605001",
        "email": "ant@paidepet.com",
        "date_of_birth": "2006-12-01 15:15",
        "zip_code": "18750000"
    }
    ```
  - **Respostas Possíveis**:
    - **201 Created**: Tutor criado com sucesso.
    - **422 Unprocessable Entity**: Erros de validação no corpo da solicitação.
    - **500 Internal Server Error**: Ocorreu um erro ao criar o tutor.

## - Exemplo de Requisição GET para Obter Todos os Tutores
- **GET /tutors**
  ```
  http://localhost:3000/vetclinic/tutors
  ```
  - **Exemplo de JSON de Resposta**:
    ```json
    [
      {
        "id": 1,
        "name": "Antonio Marlos",
        "phone": "85960005001",
        "email": "antmarlos@tiodepet.com",
        "date_of_birth": "1972-05-13 14:22",
        "zip_code": "40750000",
        "pets": [
                {
                    "id": 1,
                    "name": "Fuleco",
                    "species": "tatu",
                    "carry": "p",
                    "weight": 2,
                    "date_of_birth": "2024-01-10 19:24",
                    "tutor_id": 1
                }
            ]
        }
    ]
    ```
  - **Respostas Possíveis**:
    - **200 OK**: Tutores obtidos com sucesso.
    - **500 Internal Server Error**: Ocorreu um erro ao obter os tutores.

## - Exemplo de Requisição PUT para Atualizar um Tutor
- **PUT /tutor/:id**
  ```
  http://localhost:3000/vetclinic/tutor/:id
  ```
  - **Exemplo de JSON**:
    ```json
    {
        "name": "Antonio Marlos",
        "phone": "85960005001",
        "email": "antmarlos@tiodepet.com",
        "date_of_birth": "1972-05-13 14:22",
        "zip_code": "40750000"
    }
    ```
  - **Respostas Possíveis**:
    - **200 OK**: Tutor atualizado com sucesso.
    - **404 Not Found**: Tutor não encontrado.
    - **422 Unprocessable Entity**: Erros de validação no corpo da solicitação.
    - **500 Internal Server Error**: Ocorreu um erro ao atualizar o tutor.

##  -Exemplo de Requisição DELETE para Remover um Tutor
- **DELETE /tutor/:id**
  ```
  http://localhost:3000/vetclinic/tutor/:id
  ```
  - **Respostas Possíveis**:
    - **200 OK**: Tutor removido com sucesso.
    - **404 Not Found**: Tutor não encontrado.
    - **500 Internal Server Error**: Ocorreu um erro ao remover o tutor.

---

## Entidade Pet

### - Exemplo de Requisição POST para Cadastrar um Pet
- **POST /pet/:tutorId**
  ```
  http://localhost:3000/vetclinic/pet/:tutorId
  ```
  - **Exemplo de JSON**:
    ```json
    {
        "name": "Caramelo",
        "species": "dog",
        "carry": "p",
        "weight": 7,
        "date_of_birth": "2021-03-01 20:59"
    }    
    ```
  - **Respostas Possíveis**:
    - **201 Created**: Pet criado com sucesso.
    - **422 Unprocessable Entity**: Erros de validação no corpo da solicitação.
    - **500 Internal Server Error**: Ocorreu um erro ao criar o pet.

### - Exemplo de Requisição PUT para Atualizar um Pet
- **PUT /pet/:petId/tutor/:tutorId**
  ```
  http://localhost:3000/vetclinic/pet/:petId/tutor/:tutorId
  ```
  - **Exemplo de JSON**:
    ```json
    {
        "name": "Pingo",
        "species": "dog",
        "carry": "p",
        "weight": 6,
        "date_of_birth": "2024-01-10 19:24"
    } 
    ```
  - **Respostas Possíveis**:
    - **200 OK**: Pet atualizado com sucesso.
    - **404 Not Found**: Pet não encontrado.
    - **422 Unprocessable Entity**: Erros de validação no corpo da solicitação.
    - **500 Internal Server Error**: Ocorreu um erro ao atualizar o Pet.

###  - Exemplo de Requisição DELETE para Remover um Pet
- **DELETE /pet/:petId/tutor/:tutorId**
  ```
  http://localhost:3000/vetclinic/pet/:petId/tutor/:tutorId
  ```
  - **Respostas Possíveis**:
    - **200 OK**: Pet removido com sucesso.
    - **404 Not Found**: Pet não encontrado.
    - **500 Internal Server Error**: Ocorreu um erro ao remover o pet.
