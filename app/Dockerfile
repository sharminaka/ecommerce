# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js app for production
RUN npm run build

# Expose the port your Next.js app will run on (default is 3000)
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
