# Dockerfile for frontend

# Use the official Node.js 20 image as the base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json from the frontend directory to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the applicationc
RUN npm run build

# Expose the port the app runs on

EXPOSE 3000
# Command to run the application
CMD ["npm", "start"]