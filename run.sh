#!/bin/bash
echo "Stopping existing processes using port 8080..."
fuser -k 8080/tcp   # This kills processes using port 8080

echo "Starting Spring Boot application..."
cd sprintboot-backend
mvn spring-boot:run &
cd ..

echo "Starting React development server..."
cd frontend
npm run serve
cd ..
