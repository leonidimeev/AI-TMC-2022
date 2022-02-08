# AI-TMC-2022

This is a very simple web application that identify which idol you look like using AI

![alt text](https://drive.google.com/uc?export=view&id=/1vM6p8vw86Nag1SDcE3RaL-eHku-Y8Z_v)

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