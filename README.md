# Task Manager API

A full-stack task management application built with Node.js, Express, and MongoDB. This project demonstrates backend development skills including RESTful API design, database modeling, error handling, and middleware implementation.

## Project Focus

**Backend Development Showcase**: This project emphasizes backend architecture and API development. The frontend uses a template for UI purposes, while the entire backend infrastructure was built from scratch to demonstrate server-side development expertise.

## Backend Features

### Core Functionality
- **RESTful API Design**: Complete CRUD operations for task management
- **MongoDB Integration**: Mongoose ODM for data modeling and validation
- **Express.js Architecture**: Clean, modular server structure
- **Error Handling**: Custom error classes and centralized error middleware
- **Input Validation**: Schema-level validation with meaningful error messages
- **Async/Await Pattern**: Modern JavaScript with proper error handling

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/tasks` | Retrieve all tasks |
| POST | `/api/v1/tasks` | Create a new task |
| GET | `/api/v1/tasks/:id` | Get a specific task |
| PATCH | `/api/v1/tasks/:id` | Update a task |
| DELETE | `/api/v1/tasks/:id` | Delete a task |

## Backend Architecture

### Project Structure
```
├── app.js                 # Application entry point
├── controllers/
│   └── tasks.js          # Business logic for task operations
├── db/
│   └── connect.js        # Database connection configuration
├── errors/
│   └── custom-error.js   # Custom error handling classes
├── middleware/
│   ├── async.js          # Async wrapper for error handling
│   ├── error-handler.js  # Global error handling middleware
│   └── not-found.js      # 404 handler
├── models/
│   └── Task.js           # Mongoose schema and model
└── routes/
    └── tasks.js          # Route definitions
```

### Key Backend Components

#### 1. Database Schema (Mongoose)
```javascript
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name cannot be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})
```

#### 2. Custom Error Handling
- **CustomAPIError Class**: Structured error responses
- **Global Error Middleware**: Centralized error processing
- **Async Wrapper**: Eliminates try-catch repetition

#### 3. Controller Pattern
- Separation of concerns between routes and business logic
- Consistent response formatting
- Proper HTTP status codes

#### 4. Middleware Stack
- **Express.json()**: JSON parsing
- **Express.static()**: Static file serving
- **Custom async wrapper**: Error handling automation
- **404 handler**: Graceful handling of undefined routes

## Technologies Used

### Backend Stack
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for MongoDB
- **dotenv**: Environment variable management

### Development Tools
- **Nodemon**: Development server with auto-restart
- **Git**: Version control

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd task-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   MONGO_URI=mongodb://localhost:27017/task-manager
   PORT=5000
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Access the application**
   - Frontend: `http://localhost:5000`
   - API Base URL: `http://localhost:5000/api/v1`

## API Usage Examples

### Create a new task
```bash
curl -X POST http://localhost:5000/api/v1/tasks \
  -H "Content-Type: application/json" \
  -d '{"name": "Complete project documentation"}'
```

### Get all tasks
```bash
curl http://localhost:5000/api/v1/tasks
```

### Update a task
```bash
curl -X PATCH http://localhost:5000/api/v1/tasks/:id \
  -H "Content-Type: application/json" \
  -d '{"name": "Updated task name", "completed": true}'
```

### Delete a task
```bash
curl -X DELETE http://localhost:5000/api/v1/tasks/:id
```

## Backend Development Highlights

### Error Handling Strategy
- **Custom Error Classes**: Structured error responses with appropriate status codes
- **Async Wrapper Middleware**: Eliminates repetitive try-catch blocks
- **Global Error Handler**: Centralized error processing and response formatting

### Database Design
- **Schema Validation**: Input validation at the database level
- **Optimized Queries**: Efficient MongoDB operations
- **Connection Management**: Proper database connection handling

### Code Organization
- **MVC Pattern**: Clear separation of routes, controllers, and models
- **Middleware Architecture**: Modular and reusable middleware components
- **Environment Configuration**: Secure environment variable management

## Frontend Note

The frontend interface uses a pre-built template for demonstration purposes. The focus of this project is on showcasing backend development skills, including API design, database integration, and server-side architecture.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

While this is a portfolio project demonstrating backend skills, contributions and suggestions are welcome for educational purposes.

---

**Note**: This project emphasizes backend development expertise. The frontend serves as a functional interface to interact with the custom-built API and demonstrate the backend capabilities.
