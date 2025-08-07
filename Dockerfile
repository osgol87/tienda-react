# Etapa 1: Construir la aplicación de React
# Usar una versión LTS específica para mayor reproducibilidad
FROM node:22.18.0-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias y instalarlas.
# Esto aprovecha el cache de capas de Docker.
COPY package*.json ./
COPY .env ./

RUN npm install

# Copiar el resto del código fuente de la aplicación
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Etapa 2: Servir la aplicación con Nginx
# Usar una versión específica para mayor reproducibilidad
FROM nginx:1.28.0-alpine-slim

# Copiar los archivos estáticos construidos en la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto en el que Nginx escuchará
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]