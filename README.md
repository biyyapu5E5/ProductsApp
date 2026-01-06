# 🛒 Product App

## 1. Project Setup

nvm install 22 (installed Node version - v22.21.1)  
nvm use 22  
npm create vite@latest product-app (for creating react app)  
npm install -D tailwindcss postcss autoprefixer (for installing tailwindcss version 4)  
docker build -t product-app .  (for docker build)  
docker run -p 3000:80 product-app (for container run)  

---

## 2. Tech Stack Used

Vite, React, Tailwindcss, javascript, Docker

---

## 3. How Data Fetching Works

I have used fetch() build-in function to get product details and it returns a promise,  
a promise can be resolved using then() or async() function.

---

## 4. How Docker Setup Works

I have used a Dockerfile to define the environment and steps to build and run the application.  
Docker builds this configuration into an image which contains the app and all its dependencies.  
Then this image is run as a container. The container runs the application the same way on every system.  

To run from the uploaded image:  
download Docker app (https://www.docker.com/products/docker-desktop/)  
then run  docker app locally.
Execute below commands: 
docker pull padmini598/product-app  
docker run -p 3000:3000 padmini598/product-app  

---

## 5. How to Run Locally

cd product-app  
npm install  
npm run dev (runs on http://localhost:5173/)  

---

## 6. How Deployment Was Done

The application was deployed using **Netlify**.

There are two ways to deploy a project on Netlify:
- You can log in to Netlify and deploy the project manually, or  
- You can push your code to **GitHub** and connect your repository to Netlify for automatic deployment.

This project was deployed by connecting the GitHub repository to Netlify.

**Live Deployed App:**  
https://padmini598-product-app.netlify.app/

---

## 7. Any Assumptions or Trade-offs Made

As I have seen the product json, only few records are present which does't require pagination, so due which it reduces the network api calls, but other capabalities like searching,
filtering computation is done form UI side, which might create some UI delay as the products increases..
