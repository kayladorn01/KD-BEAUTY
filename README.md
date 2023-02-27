# MERN Online Store - KD BEAUTY

## Description

KD BEAUTY is an online beauty store used to help customers shop for the latest products. This project is a MERN full stack web application. React.js and Node.js was used to create the frontend, Express.js was used to create the backend and MongoDB was used to store our data. Both the user/customer and administrator have access to the site once they log in using their respective details where they will authenticated using JWT. The administrator can create, edit and delete product items. The admin can also see all clients. The customer has to be logged in to add items to their cart.

## Table of Contents

<details open="open">
<ol>
<li><a href="#description">Description</a></li>
<li><a href="#table-of-contents">Table of Contents</a></li>
<li><a href="#installation">Installation</a></li>
<li><a href="#usage">Usage</a></li>
<li><a href="#api-keys">API Keys</a></li>
<li><a href="#system-architecture">System Architecture</a></li>
<li><a href="#system-requirements-specification">System Requirements Specification</a></li>
<li><a href="#notice">Notice</a></li>
</ol>
</details>

## Installation

### Project:

- First, create a folder that will store all the files for this project.

- You can now navigate to the Project's directory by opening up your terminal or command prompt and typing "cd/". For example:

```
cd Capstone-project
```

### Backend:

- For the Backend of this project, build your Express app and install all node modules by typing in:

```
npm install --save
```

- After the installation is done, you can run the the backend application by typing in:

```
npm run dev
```

- Open http://localhost:8080 to run the server in the browser.

#### Note: Security

- For the backend of this project, the Helmet middleware was used to secure this application.

### Frontend:

- For the Frontend of this project, build your React app and install all node modules by typing in:

```
npm install --save
```

- After the installation is done, you can run the the frontend application by typing in:

```
npm start
```

## Usage

### Admin

To access the admin panel, use the following login details:

```
Email: admin@example.com
Password: admin1234
```

- Once logged in, the administrator can navigate to the "DASHBOARD" page where he/she can delete a product by clicking on the "DELETE" button.


- To edit a product, click on the "EDIT" button. Next, update the details of the product by modifying the information and then click on the "UPDATE PRODUCT" button.


- To create a product, navigate to the "CREATE PRODUCT" page. Next, fill in the respective information of the new product and also add an image by clicking on the "upload image" text.
  


### End-User/Customer

To access the user/customer panel you must first register with your details, for example:

```
Name: customer01
Email: customer01@gmail.com
Password: 12345678 (your password must be atleast 6 characters long)
```

- Once logged in, the customer wil be able to see latest products , as well as any new adverts such as promotions , deals and discounts and if he/she scrolls down they will be able to see categories of their desired products. He/she can add items to their cart by clicking on the "ADD TO CART" button.


- The customer can view all the products they have added to their cart by clicking on the cart icon. He/she can increase or decrease the number of items they wish to purchase as well as view the total price of the item. Also, the customer can remove a product from their cart by clicking on the red X displayed on the right corner of each product.


## API Keys

- The following API keys were used in this project to access the data:

(database that stores all user info)
1. MONGO_USERNAME=""
2. MONGO_PW=""

(upload images through cloudinary widget)
3. CLOUD_NAME=""
4. CLOUD_API_KEY=""
5. CLOUD_API_SECRET=""

(payment)
6. STRIPE_SECRET=''

- For privacy concerns, add this .env file to the .gitignore file to avoid pushing it to gitHub.

## System Architecture:

### Web Stack:

The MERN stack is the web stack that I chosen to use to design my online store web application. The 3-tier Architecture of the MERN Stack containing the client, server and database will be incorporated to build this project. The client tier will be built using React.js (Create React App). The server tier will be built using Express.js and Node.js. Lastly, the database tier will be built using MongoDB in order to store all our data.

I have used the MERN stack to develop my application for the following reasons. Firstly, the MERN stack facilitates the MVC (Model View Controller) architecture that makes the web development process work smoothly by using the four technologies MongoDB, Express.js, React.js, Node.js which are open-source. Secondly, the application will cover the functional requirements as specified for this task of which the MERN stack will fulfill. Thirdly, the application will enable easier testing since the MERN stack comes with testing tools such as Mocha and Chai thereby making it easier to detect errors. Fourthly, JavaScript is the main language used in this MERN full stack application and this makes it easier to integrate with other frameworks both for the frontend and backend of the application. Lastly, the MERN stack is easy to use and overall creates highly efficient code within a short time period.

### Deployment:


### Styling Tools:

I will be using React Bootstrap and CSS stylesheets for styling my web application. CSS stylesheets will be used to add the standard styling to all components. React Bootstrap is an excellent choice for creating the foundation of the UI since it saves time by using default components which requires less code. React Bootstrap is also a great choice for developing a responsive application which can be displayed attractively on many different devices.

## System Requirements Specification

### How the application will work:

KD BEAUTY is an online beauty store used to help customers shop for the latest products. The purpose of this application is to advertise for the latest products in order to give customers an insight about what the store has to offer. Any user can view the web application. However, both the customer and administrator can only access the site once they log in or register using their respective details of which will be authenticated and authorized. The customer has to be logged in to add items to their cart as well as view details of all items. The customer can also view all the products they have added to their cart. He/she can remove an item or increase/decrease the number of items they wish to purchase as well as view the total price of the item/s. The administrator can create, edit and delete product items. I have chosen to use Cloudinary cloud storage service to store the product images of which the URL of these images have been stored within the database.

### Who will use the application and to what benefit?

This online store application has been designed to be used by everyday shoppers who enjoy purchasing makeup , skincare and any other products realted to. The store owner will also make use of this site to manage the products they wish to advertise for and market their business.

This application is beneficial for the following reasons:

- Promotes advertising and marketing for the business.
- Identifies and serves customers by helping them find items based on their personal needs.
- Stores all information on a database to avoid any data from getting lost.
- Protects sensitive information using authentication.

### How to make my website stand out from my competitors?

Compared to other online store applications such as Shopify Pluse, the KD BEAUTY application that I have created will be kept simple, easy to use, fully responsive and free of distracting features so that all users (including admin) can take advantage of it. The maintenance of this application will also be inexpensive since its development is based on using open source libraries.

### Functional and non-functional requirements

### Functional:

• The application shall validate the credentials of any user when he/she registers and logs in.
• The application shall allow customers to add and delete items to/from their cart.
• The application shall allow customers to view details of items.
• The application shall allow the administrator to add/create, edit, view and delete items.
• The application shall offer an attractive and functional user interface.
• The application shall be easily maintainable.
• The application shall be responsive so that it can be viewed on multiple devices.
• The application shall store information on MongoDB.

### Non-Functional:

Usability
• The user interface should be intuitive and easy to use.
• The application should be available via a web interface.
• Users should be able to efficiently find an item in less than 15 seconds.

Reliability
• The system should be reliable and robust.
• The system shall be completely operational at least 90% of the time.

Performance
• The application should be fast and responsive.
• The application’s server should respond to client requests in less than five seconds when accessed by more than 1 user.
• The application should load within 10 seconds.

Security
• The system should securely encrypt data to prevent exposure of user data.
• Users must be logged in to add, view and delete the items in their cart.
• The administrator must be logged in to create, edit and delete new items added to the website.
• Passwords must not be stored within the system or revealed to users but rather be stored as hashes.

### User Stories

1. As an existing user, I want to be able to log into my account and use the application.
2. As a new user, I want to be able to create a new account, so that I can log in and use the application.
3. As a user, I want to be able to search for, sort and filter product items, so that I can easily access the products I am interested in.
4. As a user, I want to access the application securely so that I can be assured that nobody else has access to any of my personal information.
5. As an administrator, I want to be able to view, add, delete or edit product items, so that I can keep the customer updated with the latest products offered by our store.

## Notice:

When any changes to project items are made, the server will restart and update these changes. This is because the Nodeman devDependency is installed and so these notifications will appear in the console or terminal. You can view the changes made to the frontend of the application by opening http://localhost:3000.

Created by: Kayla Dornan :)