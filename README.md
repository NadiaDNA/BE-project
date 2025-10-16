# 🧩 Backend-Mongoose
> A simple Node.js + Express REST API for managing **Users**, **Courses**, and **Enrollments** using **MongoDB (Mongoose)**.

---

### 🏠 [Live Demo](https://be-project-nine.vercel.app/)

---

## 🧱 Tech Stack

- **Node.js** — runtime environment  
- **Express.js** — backend framework  
- **MongoDB Atlas** — cloud NoSQL database  
- **Mongoose** — ODM for MongoDB  
- **JWT (jsonwebtoken)** — authentication  
- **Bcrypt.js** — password hashing  
- **Vercel** — deployment platform  

---

## 📦 Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/backend-mongoose.git
   cd backend-mongoose
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## ⚙️ Environment Configuration

Create a `.env` file in the root folder:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

---

## 🚀 Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Run development server using **nodemon** |
| `npm run start` | Run production server |
| `npm run test` | Execute tests (if available) |

---

## 🧠 Project Structure

```
📁 backend-mongoose
├── app.js
├── config/
│   └── db.js
├── controllers/
│   ├── auth.controller.js
│   ├── user.controller.js
│   ├── course.controller.js
│   └── enrollment.controller.js
├── middleware/
│   └── auth.js
├── models/
│   ├── user.model.js
│   ├── course.model.js
│   └── enrollment.model.js
├── routes/
│   ├── auth.router.js
│   ├── user.router.js
│   ├── course.router.js
│   ├── enrollment.router.js
│   └── index.js
├── .env
├── package.json
├── vercel.json
└── README.md
```

---

## 🔐 Authentication

**File:** `middleware/auth.js`

- `verifyToken` → Validates JWT from headers  
- `verifyAdmin` → Simple admin role validation (`email === admin@example.com`)

---

## ⚙️ Controllers Overview

| Controller | Functions |
|-------------|------------|
| **auth.controller.js** | `login`, `register` |
| **user.controller.js** | `getAllUser`, `getUserById`, `createUser`, `updateUser`, `deleteUser` |
| **course.controller.js** | CRUD for courses |
| **enrollment.controller.js** | CRUD for enrollments + `clearEnrollments()` |

---

## 🛣️ Routes Overview

| Base Route | Description |
|-------------|--------------|
| `/auth` | Authentication (login/register) |
| `/users` | CRUD for users |
| `/courses` | CRUD for courses *(JWT required)* |
| `/enrollments` | Manage course enrollments *(JWT required)* |

---

## 📡 API Endpoints Summary

### 🔑 Auth

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login and get JWT token |

### 👤 Users

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/users` | Get all users |
| GET | `/users/:id` | Get user by ID |
| POST | `/users` | Create new user |
| PUT | `/users/:id` | Update user |
| DELETE | `/users/:id` | Delete user |

### 📘 Courses *(JWT Required)*

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/courses` | Get all courses |
| GET | `/courses/:id` | Get course by ID |
| POST | `/courses` | Create new course |
| PUT | `/courses/:id` | Update course |
| DELETE | `/courses/:id` | Delete course |

### 🎓 Enrollments *(JWT Required)*

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/enrollments` | Get all enrollments |
| POST | `/enrollments` | Create new enrollment |
| DELETE | `/enrollments/:id` | Delete enrollment |
| DELETE | `/enrollments/clear` | Delete all enrollments |

---

## 🧪 Example Requests (Bruno)

> 🧰 Import these examples into **Bruno** (https://www.usebruno.com/) to test the API.

### 🟢 Register User

**POST** → `/auth/register`

**Body (JSON):**
```json
{
  "name": "Nadia",
  "email": "nadia@example.com",
  "password": "secret123"
}
```

---

### 🔵 Login

**POST** → `/auth/login`

**Body (JSON):**
```json
{
  "email": "nadia@example.com",
  "password": "secret123"
}
```

**Response Example:**
```json
{
  "message": "Login successful",
  "token": "your.jwt.token.here"
}
```

---

### 🟣 Get All Courses

**GET** → `/courses`

**Headers:**
```
Authorization: Bearer {{token}}
```

**Response:**
```json
[
  {
    "_id": "67114dff1e0c7f56a8a41cc3",
    "title": "Intro to Chemistry",
    "description": "Basic chemistry course",
    "instructor": "Dr. Nadin",
    "__v": 0
  }
]
```

---

### 🔴 Clear All Enrollments

**DELETE** → `/enrollments/clear`

**Headers:**
```
Authorization: Bearer {{token}}
```

**Response:**
```json
{ "message": "All enrollments deleted successfully" }
```

---

## 🧼 Tips

- Use **Bruno** environment variables to manage base URL & token:
  ```
  BASE_URL = http://localhost:3000
  TOKEN = your_jwt_token
  ```
  Then you can call endpoints like:
  ```
  {{BASE_URL}}/courses
  ```

- Don’t forget to update `.env` with your **MongoDB URI** before running.

---

