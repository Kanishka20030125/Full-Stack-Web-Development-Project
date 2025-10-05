# Full Stack Employee Management System

A modern full-stack application for managing employees and departments, built with cutting-edge technologies and best practices.

## Project Overview

This project is a comprehensive employee management system that demonstrates the implementation of a microservices architecture using different technologies for different services.

### Architecture

The application is built using a microservices architecture with:
- Two backend services (Employee API and Department API)
- Two frontend applications (Angular and React)
- Separate databases for each service

## Technology Stack

### Backend Services

#### Employee API (.NET)
- **.NET 9.0**
- **Entity Framework Core** for database operations
- **SQL Server** as the database
- **Swagger/OpenAPI** for API documentation
- Features:
  - CRUD operations for employees
  - RESTful API design
  - Swagger UI integration
  - Entity Framework migrations
  - CORS support

#### Department API (Spring Boot)
- **Java 17**
- **Spring Boot 3.5.6**
- **Spring Data JPA**
- **MySQL** as the database
- **SpringDoc OpenAPI** for API documentation
- Features:
  - CRUD operations for departments
  - RESTful API design
  - Swagger UI integration
  - JPA repositories
  - CORS configuration

### Frontend Applications

#### Angular UI
- **Angular 20.3.0**
- **Angular Material 20.2.7**
- Features:
  - Material Design components
  - Reactive Forms
  - HTTP client integration
  - Routing & Navigation
  - Component-based architecture

#### React UI
- **React with Vite**
- **Material-UI (MUI)**
- Features:
  - Modern React with Hooks
  - Material Design components
  - React Router for navigation
  - Component-based architecture
  - ESLint configuration

## Project Structure

```
Full Stack Project/
├── backend/
│   ├── DepartmentAPI/            # Spring Boot service
│   │   ├── src/
│   │   │   ├── main/
│   │   │   │   ├── java/
│   │   │   │   └── resources/
│   │   │   └── test/
│   │   └── pom.xml
│   └── Employee.API/             # .NET service
│       ├── Controllers/
│       ├── Models/
│       ├── Data/
│       └── Program.cs
├── frontend/
│   ├── angular-ui/              # Angular application
│   │   ├── src/
│   │   │   ├── app/
│   │   │   ├── assets/
│   │   │   └── styles/
│   │   └── angular.json
│   └── react-ui/               # React application
│       ├── src/
│       │   ├── components/
│       │   ├── services/
│       │   └── main.jsx
│       └── package.json
└── database_scripts/           # Database initialization scripts
```

## Features

- **Employee Management**
  - Add new employees
  - View employee list
  - Update employee details
  - Delete employees
  - Employee search

- **Department Management**
  - Create departments
  - View department list
  - Update department details
  - Delete departments
  - Department search

- **API Documentation**
  - Swagger UI for both APIs
  - Detailed endpoint documentation
  - Request/Response examples

## API Endpoints

### Employee API
- GET /api/employees - List all employees
- GET /api/employees/{id} - Get employee by ID
- POST /api/employees - Create new employee
- PUT /api/employees/{id} - Update employee
- DELETE /api/employees/{id} - Delete employee

### Department API
- GET /api/departments - List all departments
- GET /api/departments/{id} - Get department by ID
- POST /api/departments - Create new department
- PUT /api/departments/{id} - Update department
- DELETE /api/departments/{id} - Delete department

## Setup and Installation

### Prerequisites
- .NET 9.0 SDK
- JDK 17
- Node.js (latest LTS version)
- MySQL Server
- SQL Server
- npm/yarn

### Backend Setup

1. **Department API (Spring Boot)**
   ```bash
cd backend/DepartmentAPI
   mvnw spring-boot:run
```
   Access Swagger UI: http://localhost:8082/swagger-ui/index.html

2. **Employee API (.NET)**
   ```bash
cd backend/Employee.API
   dotnet run
```
   Access Swagger UI: http://localhost:5263/swagger/index.html

### Frontend Setup

1. **Angular UI**
   ```bash
cd frontend/angular-ui
   npm install
   npm start
```
   Access application: http://localhost:4200

2. **React UI**
   ```bash
cd frontend/react-ui
   npm install
   npm run dev
```
   Access application: http://localhost:5173

## Development

- Both frontend applications are configured with hot-reload
- Backend services include development tools like Swagger
- Database migrations are handled automatically
- CORS is configured for local development

## Security

- CORS policies are properly configured
- Database passwords are externalized
- Environment-specific configurations
ull Stack Employee Management System

A modern full-stack application for managing employees and departments, built with cutting-edge technologies and best practices.

## Project Overview

This project is a comprehensive employee management system that demonstrates the implementation of a microservices architecture using different technologies for different services.

### Architecture

The application is built using a microservices architecture with:
- Two backend services (Employee API and Department API)
- Two frontend applications (Angular and React)
- Separate databases for each service

## Technology Stack

### Backend Services

#### Employee API (.NET)
- **.NET 9.0**
- **Entity Framework Core** for database operations
- **SQL Server** as the database
- **Swagger/OpenAPI** for API documentation
- Features:
  - CRUD operations for employees
  - RESTful API design
  - Swagger UI integration
  - Entity Framework migrations
  - CORS support

#### Department API (Spring Boot)
- **Java 17**
- **Spring Boot 3.5.6**
- **Spring Data JPA**
- **MySQL** as the database
- **SpringDoc OpenAPI** for API documentation
- Features:
  - CRUD operations for departments
  - RESTful API design
  - Swagger UI integration
  - JPA repositories
  - CORS configuration

### Frontend Applications

#### Angular UI
- **Angular 20.3.0**
- **Angular Material 20.2.7**
- Features:
  - Material Design components
  - Reactive Forms
  - HTTP client integration
  - Routing & Navigation
  - Component-based architecture

#### React UI
- **React with Vite**
- **Material-UI (MUI)**
- Features:
  - Modern React with Hooks
  - Material Design components
  - React Router for navigation
  - Component-based architecture
  - ESLint configuration

## Project Structure

```
Full Stack Project/
├── backend/
│   ├── DepartmentAPI/            # Spring Boot service
│   │   ├── src/
│   │   │   ├── main/
│   │   │   │   ├── java/
│   │   │   │   └── resources/
│   │   │   └── test/
│   │   └── pom.xml
│   └── Employee.API/             # .NET service
│       ├── Controllers/
│       ├── Models/
│       ├── Data/
│       └── Program.cs
├── frontend/
│   ├── angular-ui/              # Angular application
│   │   ├── src/
│   │   │   ├── app/
│   │   │   ├── assets/
│   │   │   └── styles/
│   │   └── angular.json
│   └── react-ui/               # React application
│       ├── src/
│       │   ├── components/
│       │   ├── services/
│       │   └── main.jsx
│       └── package.json
└── database_scripts/           # Database initialization scripts
```

## Features

- **Employee Management**
  - Add new employees
  - View employee list
  - Update employee details
  - Delete employees
  - Employee search

- **Department Management**
  - Create departments
  - View department list
  - Update department details
  - Delete departments
  - Department search

- **API Documentation**
  - Swagger UI for both APIs
  - Detailed endpoint documentation
  - Request/Response examples

## API Endpoints

### Employee API
- GET /api/employees - List all employees
- GET /api/employees/{id} - Get employee by ID
- POST /api/employees - Create new employee
- PUT /api/employees/{id} - Update employee
- DELETE /api/employees/{id} - Delete employee

### Department API
- GET /api/departments - List all departments
- GET /api/departments/{id} - Get department by ID
- POST /api/departments - Create new department
- PUT /api/departments/{id} - Update department
- DELETE /api/departments/{id} - Delete department

## Setup and Installation

### Prerequisites
- .NET 9.0 SDK
- JDK 17
- Node.js (latest LTS version)
- MySQL Server
- SQL Server
- npm/yarn

### Backend Setup

1. **Department API (Spring Boot)**
   ```bash
   cd backend/DepartmentAPI
   mvnw spring-boot:run
   ```
   Access Swagger UI: http://localhost:8082/swagger-ui/index.html

2. **Employee API (.NET)**
   ```bash
   cd backend/Employee.API
   dotnet run
   ```
   Access Swagger UI: http://localhost:5263/swagger/index.html

### Frontend Setup

1. **Angular UI**
   ```bash
   cd frontend/angular-ui
   npm install
   npm start
   ```
   Access application: http://localhost:4200

2. **React UI**
   ```bash
   cd frontend/react-ui
   npm install
   npm run dev
   ```
   Access application: http://localhost:5173

## Development

- Both frontend applications are configured with hot-reload
- Backend services include development tools like Swagger
- Database migrations are handled automatically
- CORS is configured for local development

## Security

- CORS policies are properly configured
- Database passwords are externalized
- Environment-specific configurations
