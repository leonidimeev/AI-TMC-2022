# AI-TMC-2022

This is a very simple web application that identify which idol you look like using AI

![image](https://user-images.githubusercontent.com/45921749/152905626-2fb6883a-825f-49e8-9e77-342cd3887933.png)

## Build

    git clone https://github.com/leonidimeev/AI-TMC-2022.git
    cd web-app
    rebar3 clojerl compile

To start the REPL just run:

    rebar3 clojerl repl
    ===> Verifying dependencies...
    ===> Compiling web-app
    Clojure 0.0.0-988.b107f25
    clje.user=>

Now we can start the `web-app` application:

    clje.user=> (application/ensure_all_started :web-app)
    #erl[:ok #erl(:ranch :cowlib :cowboy :web-app)]
    clje.user=>

You should see when browsing to
`http://localhost:8080`.

## Backend

### Run local

#### Install dependencies

    pip install -r requirements.txt

#### Run server

    uvicorn app.main:app --reload

#### Run test

    pytest app/test.py
    
### Run with docker

#### Run server
    
    docker-compose up -d --build
    
#### Run test

    docker-compose exec app pytest test/test.py
    
### API documentation (provided by Swagger UI)

    http://127.0.0.1:8000/docs
    
### Run server

    docker-compose exec db psql --username=fastapi --dbname=fastapi_dev
