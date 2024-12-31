# Step 1: Build the application
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the application (필요시 빌드 명령어 사용)
CMD ["yarn", "run", "build"]

# Step 2: Run the application
FROM node:20.15.0

# Set the working directory
WORKDIR /app

# Copy built files from the build stage
COPY --from=build /app .

# Expose ports
EXPOSE 3003

# Environment variables
ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}
ARG PORT
ENV PORT=${PORT}

# Command to run the application
CMD ["yarn", "start"]