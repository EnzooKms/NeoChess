#!/bin/sh

# install node package
npm i bcrypt colors compressions cors dotenv express express-session pug helmet multer socket.io mysql2 sequelize sequelize-cli

# clear console
clear

# ssl
mkdir ssl
cd ./ssl
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
cd ../

# run projet
powershell & npm run server