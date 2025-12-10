# LandingPage | FalconMotors | Backend

Backend para la landing page de Falcon Motors

## Tecnologías Utilizadas

* **Express.JS** Para peticiones y rutas
* **Express-validator** Middlewares, Sanitazion y validaciones
* **Mongoose** Orm para interaccion con la base de datos


## Configuración e Instalación (Onboarding)

Sigue estos pasos para que la aplicación corra en tu máquina local:

### 1. Requisitos

* Node.js (v18.x o superior)
* npm o Yarn

### 2. Puesta en Marcha

2.  **Instalar Dependencias:**
    ```bash
    npm install
    # o
    yarn install
    ```
3.  **Variables de Entorno:**
    Crea el archivo `.env` o renombra `.env.template` a `.env` en la raíz del proyecto. **Es crucial** para la app.

    #### Sustituir variables de entorno
        ```
        PORT=your_prefered_port
        MONGODB_CNN_STR=your_mongodb_connection_string_here

        GOOGLE EMAIL SERVICES VARIABLES:
        GOOGLE_CLIENT_ID=your_GOOGLE_CLIENT_ID
        GOOGLE_CLIENT_SECRET=your_GOOGLE_CLIENT_SECRET
        GOOGLE_REDIRECT_URI=your_GOOGLE_REDIRECT_URI
        GOOGLE_REFRESH_TOKEN=your_GOOGLE_REFRESH_TOKEN
        MAIL_SENDER=your_MAIL_SENDER
        ```

### 3. Ejecución

Ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
```

Muy buena práctica, Rodolfo 👌. Lo que necesitas es **documentar en tu README del backend** que, después de levantar el servidor con `npm run dev`, el desarrollador debe ejecutar el endpoint de *seed* para poblar la base de datos inicial.  

Aquí te muestro cómo podrías dejarlo claro en tu documentación:

---

### 📦 Seed de la Base de Datos

Después de iniciar el servidor con:

```bash
npm run dev
```

es necesario **ejecutar el seed** para poblar la base de datos con los vehículos iniciales.  

#### 🔑 Endpoint de Seed

```http
GET http://localhost:PUERTO/api/vehicles/seed
```

- **Método:** `GET`  
- **Descripción:** Inserta datos de prueba (vehículos y sus atributos) en la base de datos.  
- **Parámetros:** Ninguno.  
- **Respuesta esperada:** Un objeto JSON `{"msg":"SEED EXECUTED"}`.


#### 🛠️ Ejemplo de uso en navegador

Simplemente abre en tu navegador:

```
http://localhost:3000/api/vehicles/seed
```

Perfecto Rodolfo 🙌, te armo la sección de **Rutas de la API** sin usar `curl`, solo con ejemplos claros de cómo probarlas directamente desde el navegador o con herramientas como Postman/Insomnia. Así queda más práctico para tu README:

---

## 📡 Rutas de la API

### 🚀 Vehicles
- **GET** `/api/vehicles/seed`  
  Inserta datos iniciales de prueba en la base de datos (seed).  
  👉 Usar después de levantar el servidor con `npm run dev`.  
  Ejemplo:  
  ```
  http://localhost:3000/api/vehicles/seed
  ```

- **GET** `/api/vehicles`  
  Obtiene todos los vehículos disponibles.  
  Ejemplo:  
  ```
  http://localhost:3000/api/vehicles
  ```

- **GET** `/api/vehicles/:id`  
  Obtiene un vehículo específico por su ID.  
  Ejemplo:  
  ```
  http://localhost:3000/api/vehicles/123
  ```

- **POST** `/api/vehicles/secretPost`  
  Crea un nuevo vehículo (ruta protegida/oculta para administración).  
  Ejemplo de body JSON:  
  ```json
  {
    "brand": "JMC",
    "vehicleModel": "Grand Avenue",
    "year": 2025
  }
  ```

---

### 💬 Comments
- **GET** `/api/comments`  
  Obtiene todos los comentarios registrados.  
  ```
  http://localhost:3000/api/comments
  ```

- **POST** `/api/comments`  
  Crea un nuevo comentario.  
  - **Campos requeridos:**  
    - `name` → Nombre del usuario (string, obligatorio).  
    - `text` → Texto del comentario (string, obligatorio).  
    - `stars` → Calificación (entero entre 1 y 5).  
  Ejemplo de body JSON:  
  ```json
  {
    "name": "Rodolfo",
    "text": "Excelente servicio",
    "stars": 5
  }
  ```

- **DELETE** `/api/comments/:id`  
  Elimina un comentario por su ID.  
  Ejemplo:  
  ```
  http://localhost:3000/api/comments/123
  ```

---

### 📧 Email
- **POST** `/api/email/send`  
  Envía un correo electrónico desde el formulario de contacto.  
  - **Campos requeridos:** (dependen de tu controlador, típicamente `to`, `subject`, `message`).  
  Ejemplo de body JSON:  
  ```json
  {
    "to": "info@falconmotors.com",
    "subject": "Consulta",
    "message": "Quiero más información"
  }
  ```

---

### Notas
- El puerto por defecto es `3000`, pero puede variar según tu configuración.  
- El endpoint `/api/vehicles/seed` **solo debe usarse en desarrollo** para inicializar datos.  
- Las rutas de creación (`secretPost`, `comments POST`, `email/send`) requieren enviar datos en formato JSON desde Postman, Insomnia o cualquier cliente HTTP.  
