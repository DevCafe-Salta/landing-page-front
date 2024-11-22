# Docker

This file contains a brief description of how to create a container with the content of this web page.

## Test a build in a Nginx container


```bash
npx vite build      # build the web code to deploy -> this create a "dist" folder
docker run -it --rm -d -p 8080:80 --name web-salta -v "$(pwd)/dist:/usr/share/nginx/html" nginx:stable-alpine
```

## Docker container to deploy

```Dockerfile
FROM nginx:stable-alpine
COPY ./dist /usr/share/nginx/html
```

Commands to build the container image

```bash
docker build . -t dev-cafe-front:0.1
docker run -it --rm -d -p 8080:80 --name web-salta dev-cafe-front:0.1
```

