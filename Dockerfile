# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy only package files first to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application
COPY . .

# Build the app (optional: for React/Frontend)
RUN npm run build

# Expose port (React default is 3000)
EXPOSE 3000

# Start the app (change to your actual start command if different)
CMD ["npm", "start"]
