# Proxy Playground - Apache Reverse Proxy PoC

This repository is a Proof of Concept (PoC) for setting up an Apache Reverse Proxy that routes requests based on HTTP methods. The goal is to demonstrate how to configure Apache to:

- Proxy GET requests with query parameters to one backend
- Proxy POST requests to a different backend
- Use mod_proxy and mod_rewrite for flexible routing

## Features

- Dynamic request routing based on HTTP methods

- Reverse proxy setup with ProxyPass and ProxyPassReverse

- Apache configuration using mod_rewrite

- Dockerized environment for easy deployment

## Usage

- Send a GET request (e.g., /search?name=John) → Routed to backend1

- Send a POST request (e.g., /search with JSON body) → Routed to backend2

## Setup

- Clone the repository

- Run docker compose up

- Test requests with cURL or Postman

### Perfect for developers experimenting with reverse proxies and request-based routing!
