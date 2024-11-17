# Dockerfile for backend

# Use the official Node.js 20 image as the base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json from the root directory to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY backend/ ./

# Expose the port the app runs on
EXPOSE 8000

# Command to run the application
CMD ["node", "server.js"]