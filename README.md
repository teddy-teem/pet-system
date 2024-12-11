# Pet System
A hands on example of VPC using docker & NGNIX & node servers

## To run & test this system follow the following steps. 
1. need to have install docker, nodejs
2. clone the repo.
3. go inside the ```animal-domain/human-service/src``` & install dependency ```npm install```
4. then back to the prev dir ```animal-domain/human-service``` & build docker image with the name ```human-service``` e.g ```docker build -t human-service .```
5. go inside the ```animal-domain/meow-service/src``` & install dependency ```npm install```
6. then back to the prev dir ```animal-domain/meow-service``` & build docker image with the name ```meow-service``` e.g ```docker build -t meow-service .```
7. after that command ```docker compose up```.
8. Do the 3-7 for plant-domain too.
8. now test APIs using postman or any other tools. 