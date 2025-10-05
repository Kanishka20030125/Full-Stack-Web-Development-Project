 # Employee Management System

A full-stack web application built with ASP.NET Core Web API, Spring Boot, Angular, and React.

## Project Overview

This project implements an Employee Management System with two backend services:
- ASP.NET Core Web API for Employee management with MSSQL
- Spring Boot API for Department management with MySQL

And two frontend implementations:
- Angular UI with Angular Material
- React UI with Material-UI

## Features

- Complete CRUD operations for Employees and Departments
- Responsive design with material design components
- Form validation and error handling
- Cross-origin resource sharing (CORS) enabled
- Swagger API documentation

## Project Structure

```
Full Stack Project/
├── backend/
│   ├── DepartmentAPI/      # Spring Boot API
│   │   ├── src/
│   │   ├── pom.xml
│   │   └── ...
│   └── Employee.API/       # ASP.NET Core API
│       ├── Controllers/
│       ├── Models/
│       ├── Data/
│       └── ...
├── frontend/
│   ├── angular-ui/         # Angular Implementation
│   │   ├── src/
│   │   └── ...
│   └── react-ui/          # React Implementation
│       ├── src/
│       └── ...
└── database_scripts/       # Database initialization scripts
```

## Prerequisites

- .NET 9.0 SDK
- Java JDK 17 or later
- Node.js 18 or later
- MySQL Server
- SQL Server
- Angular CLI
- npm/yarn

## Setup Instructions

### Backend Setup

#### ASP.NET Core API (Employee API)

1. Navigate to the Employee API directory:
```bash
cd backend/Employee.API
```

2. Update the connection string in `appsettings.json`

3. Run database migrations:
```bash
dotnet ef database update
```

4. Start the API:
```bash
dotnet run
```
The API will be available at `http://localhost:5263`

#### Spring Boot API (Department API)

1. Navigate to the Department API directory:
```bash
cd backend/DepartmentAPI
```

2. Update MySQL connection properties in `application.properties`

3. Run the application:
```bash
./mvnw spring-boot:run
```
The API will be available at `http://localhost:8080`

### Frontend Setup

#### Angular UI

1. Navigate to Angular project:
```bash
cd frontend/angular-ui
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```
The application will be available at `http://localhost:4200`

#### React UI

1. Navigate to React project:
```bash
cd frontend/react-ui
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

## Database Setup

### MSSQL (Employee Database)

1. Ensure SQL Server is running
2. Run migrations as mentioned in ASP.NET Core setup
3. Alternatively, execute scripts from `database_scripts/mssql/`

### MySQL (Department Database)

1. Ensure MySQL Server is running
2. Create a new database named 'department_db'
3. The tables will be automatically created by Hibernate
4. Alternatively, execute scripts from `database_scripts/mysql/`

## API Documentation

- Employee API (ASP.NET Core): Navigate to `/swagger` endpoint
- Department API (Spring Boot): Navigate to `/swagger-ui.html` endpoint

## Testing

### Backend Testing

#### ASP.NET Core API
```bash
cd backend/Employee.API
dotnet test
```

#### Spring Boot API
```bash
cd backend/DepartmentAPI
./mvnw test
```

### Frontend Testing

#### Angular
```bash
cd frontend/angular-ui
ng test
```

#### React
```bash
cd frontend/react-ui
npm test
```

## Built With

- ASP.NET Core 9.0
- Spring Boot 3.2
- Entity Framework Core
- Spring Data JPA
- Angular 17
- React 18
- Material UI
- Angular Material
- MSSQL
- MySQL

## Future Enhancements

- JWT Authentication implementation
- Docker containerization
- CI/CD pipeline setup
- Cloud deployment configuration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
