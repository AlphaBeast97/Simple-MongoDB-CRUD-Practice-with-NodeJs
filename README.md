# Simple MongoDB CRUD Practice with Node.js & Express 🚀

This project is a simple practice application demonstrating CRUD (Create, Read, Update, Delete) operations using Node.js, Express, and MongoDB.

## 📋 API Endpoints

Below are the API endpoints for performing CRUD operations on the `products` resource.

---

### 1. Create a New Product 📝

Adds a new product to the database.

- **Method:** `POST`
- **Endpoint:** `/api/products`
- **Request Body:**
  ```json
  {
    "name": "[productName]",
    "price": "[productPrice]",
    "quantity": "[productQuantity]"
  }
  ```
- **Success Response (201 Created):**
  ```json
  {
    "_id": "[productId]",
    "name": "[productName]",
    "price": "[productPrice]",
    "quantity": "[productQuantity]",
    "createdAt": "[timeOfCreation]",
    "updatedAt": "[timeOfUpdate]"
  }
  ```

### 2. Get All Products 📚

Retrieves a list of all products.

- **Method:** `GET`
- **Endpoint:** `/api/products`
- **Success Response (200 OK):** An array of product objects.

### 3. Get a Single Product 📄

Retrieves a specific product by its unique ID.

- **Method:** `GET`
- **Endpoint:** `/api/products/:id`
- **Success Response (200 OK):** A single product object.

### 4. Update a Product 🔄

Updates an existing product by its ID. You can use `PUT` for a full update or `PATCH` for a partial update.

- **Method:** `PATCH` or `PUT`
- **Endpoint:** `/api/products/:id`
- **Request Body (Example):**
  ```json
  {
    "name": "Sweat Shirt"
  }
  ```
- **Success Response (200 OK):** The updated product object.

### 5. Delete a Product 🗑️

Deletes a product from the database by its ID.

- **Method:** `DELETE`
- **Endpoint:** `/api/products/:id`
- **Success Response (200 OK):**
  ```json
  {
    "message": "Product deleted successfully"
  }
  ```
