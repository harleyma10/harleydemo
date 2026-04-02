# E-commerce Dashboard Setup

## Overview
This README provides a guide on setting up the E-commerce Dashboard and getting started with development.

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (version >= 12)
- npm (Node package manager)
- MongoDB (for database)

## Setup Instructions
1. **Clone the Repository**  
   Run the following command to clone the repository:
   ```bash
   git clone https://github.com/harleyma10/harleydemo.git
   cd harleydemo
   ```

2. **Install Dependencies**  
   Navigate to the project directory and install the required dependencies:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**  
   Create a `.env` file in the root of your project and include the following:
   ```dotenv
   DATABASE_URL=mongodb://localhost:27017/ecommerce
   PORT=3000
   ```

4. **Run the Application**  
   Start the server using:
   ```bash
   npm start
   ```
   The application will be accessible at `http://localhost:3000`.

## Getting Started
- Navigate to the application in your browser.
- Use the default credentials to log in:
  - Email: user@example.com
  - Password: password

## Contributing
If you would like to contribute to this project, please fork the repo and submit a pull request.

## License
This project is licensed under the MIT License.