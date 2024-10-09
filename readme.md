# Infra Test

## Description
In this project, we build a simple Express.js server that provides a set of API endpoints for testing purposes. The server is designed to be used with Docker and can be easily deployed to a production environment via CircleCI.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Docker](#docker)
- [Testing](#testing)

## Prerequisites
List any prerequisites here. For example:
- Node.js (v20 or later)
- Docker
- pnpm
- CircleCI

## Installation

For test, first clone the repository:
```shell
git clone git@github.com:Ivanshamir/infra-test.git
```
And then install dependencies:
```shell
pnpm install    
```
Update necessary and push to the remote repository. This will trigger the CI/CD pipeline in CircleCI. And will build and push the Docker image to Docker Hub.

## Usage
To run locally:
```shell
docker run -d -p 8000:5000 ivanshamir/infra-test:latest infra
```
Now you can access the API endpoints at http://localhost:8000/test

## API Endpoints

- `GET /test`: Returns the current timestamp.
- `GET /dateonly`: Returns the current date in YYYY-MM-DD format.
- `POST /dateonly`: Accepts a timestamp and returns the formatted date and time.
- `GET /from-env`: Returns the value of the APP_ENV environment variable.

## Docker

To pull the latest image from Docker Hub:
```shell
docker pull ivanshamir/infra-test:latest
```
Then run the container:
```shell
docker run -d -p 8000:5000 ivanshamir/infra-test:latest
```
## Testing

Run tests using:
```shell
pnpm test
```
For coverage report:
```shell
pnpm test:coverage
```
test