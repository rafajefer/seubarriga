## Baixa a imagem do node com versão alpine (versão mais simplificada e leve)
# FROM node:10.12.0-alpine
FROM node:10.12.0

## Define o local onde o app vai ficar no disco do container
## Pode ser o diretório que você quiser
WORKDIR /usr/seubarriga

## Copia tudo que começa com package e termina com .json para dentro da pasta /usr/app
COPY package*.json ./

## Executa npm install para adicionar as dependências e criar a pasta node_modules
RUN npm install

# Install tools & libraries
RUN apt-get update
RUN apt-get -y install vim curl


# RUN apt-get -y update --fix-missing
# RUN apt-get upgrade -y

## Copia tudo que está no diretório onde o arquivo Dockerfile está 
## para dentro da pasta /usr/seubarriga do container
## Vamos ignorar a node_modules por isso criaremos um .dockerignore
COPY . .

## Container ficará ouvindo os acessos na porta 3000
# EXPOSE 3000

## Não se repete no Dockerfile
## Executa o comando npm start para iniciar o script que que está no package.json
# CMD ["npm", "start"]

## Para testar rode no terminal: 
## docker build -t rafajefer/dockernode .  
## docker run - 3000:3000 -d rafajefer/dockernode
## docker run it rafajefer/dockernode /bin/bash

# Executa o bash via compose caso o container foi iniciado pelo compose
## docker-compose exec app bash 