# Approach

To complete the objective of this app, an interface was developed with React js, Material UI.

This is a movie app, where we have a login, we can see the movies classified by different categories and a brief description of the movie.

5 endpoints for login, get latest releases, get categories, get movies by category and get data about each movie.

# Movies Frontend

This is the frontend of a movies application that allows see information about different movies. It is developed with React js, Material UI and also Prettier, Eslint and Husky to code formatter.

## Requirements and Configuration

Ensure Node.js is installed.

## Installation and Execution

    1. Clone the repository: git clone <URL>

    2. Install dependencies: npm install

    3. Run the application: npm run dev

## Folder Structure

The project follows an organized structure inspired by the MVC (Model-View-Controller) architecture, enhancing maintainability and clarity. Key components are organized as follows:

    /src: Contains the application's source code.
        /components: Controllers handling business logic.
        /pages: Database model definitions.
        /services: Services encapsulating application logic and shareable between controllers.

## API Reference

#### Login

```http
  GET /user?userId={userId}
```

#### Get categories

```http
  GET /users
```

#### Get movies by category

```http
  POST /user
```

| Parameter   | Type     | Description                  |
| :---------- | :------- | :--------------------------- |
| `firstName` | `string` | **Required**. Full name user |
| `lastName`  | `string` | **Required**. Full name user |
| `phone`     | `number` | **Required**. Phone user     |
| `email`     | `string` | **Required**. Email user     |

#### Get realeses

```http
  PUT /users?userId={userId}
```

| Parameter   | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `userId`    | `number` | **Required**. Id user |
| `firstName` | `string` | Full name user        |
| `lastName`  | `string` | Full name user        |
| `phone`     | `number` | Phone user            |
| `email`     | `string` | Email user            |

#### Delete user

```http
  DELETE /users?userId={userId}
```

| Parameter | Type     | Description           |
| :-------- | :------- | :-------------------- |
| `userId`  | `number` | **Required**. Id user |
