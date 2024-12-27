# Análisis Funcional - SaltaDev
**Proyecto:** Comunidad SaltaDev
**Fecha:** 07/10/2024  
**Versión:** 3.0 (Actualizada)

**Autores:** SaltaDev Team 

_Functional Analyst: Alexis Mauriz_

_Product Manager: Veronica Torres_

_Disagner: Arturo Grande_

---

## Índice

1. [Introducción](#introducción)
   - [Propósito del Documento](#propósito-del-documento)
   - [Propósito y Alcance](#propósito-y-alcance)
   - [Propósito del Proyecto](#propósito-del-proyecto)
   - [Alcance](#alcance)
2. [Introducción](#introducción)
   - [Objetivo](#objetivo)
   - [Logo](#logo)
   - [Ámbito Definiciones, Siglas y Abreviaturas](#ambito-definiciones-siglas-y-abreviaturas)
   - [Referencias](#referencias)
   - [Visión](#visión)
   - [Global](#global)
   - [Misión](#misión)
   - [Visión](#visión)
   - [Personal Involucrado](#personal-involucrado)
3. [Descripción General](#descripción-general)
   - [Funciones del Producto](#funciones-del-producto)
   - [Características del Usuario](#características-del-usuario)
   - [Limitaciones Generales](#limitaciones-generales)
   - [Supuestos y Dependencias](#supuestos-y-dependencias)
4. [Perspectiva del Producto](#perspectiva-del-producto)
   - [Características del Producto](#características-del-producto)
   - [Limitaciones Generales](#limitaciones-generales)
   - [Supuestos y Dependencias](#supuestos-y-dependencias)
   - [Perspectiva del Producto](#perspectiva-del-producto)
   - [Funcionalidades Clave de Landing Page](#funcionalidades-clave-de-landing-page)
   - [Características del Producto](#características-del-producto)
   - [Limitaciones Generales](#limitaciones-generales)
   - [Supuestos y Dependencias](#spuestos-y-dependencias)
5. [Requisitos](#requisitos)
   - [Requisitos Funcionales](#requisitos-funcionales)
   - [Requisitos No Funcionales](#requisitos-no-funcionales)
   - [Requisitos de Diseño](#requisitos-de-diseño)
   - [Espacio Asignado](#espacio-asignado)
   - [Gestión de Cargas](#gestión-de-cargas)
   - [Seguridad y Redundancia](#seguridad-y-redundancia)
   - [Respaldo de Datos](#respaldo-de-datos)
   - [Seguridad del Sistema](#seguridad-del-sistema)
   - [Auspicio y Gestión](#auspicio-y-gestión)
   - [Atributos de Calidad](#atributos-de-calidad)
6. [Especificaciones del Proceso](#especificaciones-del-proceso)
   - [Especificaciones del Proceso de Gestión de Contenidos](#especificaciones-del-proceso-de-gestión-de-contenidos)
   - [Especificaciones del Proceso de Gestión de Eventos](#especificaciones-del-proceso-de-gestión-de-eventos)
7. [Especificaciones del Control](#especificaciones-del-control)
   - [Especificaciones del Control de Contenidos](#especificaciones-del-control-de-contenidos)
   - [Especificaciones del Control de Eventos](#especificaciones-del-control-de-eventos)
6. [Especificaciones de Datos](#especificaciones-de-datos)
7. [Especificaciones de Validación](#especificaciones-de-validación)
8. [Especificaciones del Servicio](#especificaciones-del-servicio)
9. [Anexos](#anexos)


---

## Propósito del Documento
El presente documento tiene como objetivo definir los requisitos funcionales y no funcionales de la plataforma **DevCafé Salta**, destinado a centralizar las actividades y recursos de la comunidad de desarrolladores de Salta. Este análisis busca proporcionar una base estructurada para el desarrollo y garantizar la alineación con las necesidades de los usuarios y la comunidad.

---

## Propósito y Alcance

### Propósito del Proyecto
El proyecto **SaltaDev** tiene como objetivo crear un portal para centralizar actividades y recursos de la comunidad de desarrolladores en Salta. El portal servirá como una plataforma para difundir contenido técnico, compartir tutoriales, participar en foros, y organizar eventos y talleres.

### Alcance
- Registro y autenticación de usuarios.
- Creación y visualización de contenido (artículos, mentorías, podcast, etcetera.).
- Gestión y promoción de eventos/talleres, incluyendo inscripciones a mentorias y participaciones en proyectos de la comunidad mediante anuncios en la landing page y redes sociales.
- Responsividad en dispositivos móviles, escritorio con accesibilidad para personas con discapacidades diferentes.
- Roles bien definidos para administración y participación de miembros de la comunidad.

---

## Introducción

### Objetivo
Proveer un espacio colaborativo y accesible donde los desarrolladores puedan compartir conocimientos, encontrar recursos técnicos y participar en actividades formativas.

### logo
El logo de la comunidad de SaltaDev, representa los valores de nuestra comunidad abrazando los colores de la bandera de la provincia de Salta, Argentina manteniendo la identidad de los talentos IT locales, también se agregan los simbolos de "</>" que son Oreradores de Comparación que sirven para comparar el valor de algun/os elementos en un lenguaje de programación como ser Python o un Lenguaje de Marcado de Hiper Texto como ser HTML, lo hacemos nuestros y simboliza los signos de técnologia que usamos en código lo que en conjunto, nos identica en su conjunto como comunidad IT de la Provincia de Salta, Argentina.

![Logo SaltaDev](Logo/Logo_SaltaDev.png)

A continuación, se presenta el logo en colores definidos en banco y negro acompañando al diseño original.

![Logo SaltaDev](Logo/Logo_SaltaDev_en_Colores.png)

Para mayor información del Logo de SaltaDev, se puede acceder al PDF dentro de la carpeta de __Documentos-PDF__ para mayor comprención de diseño del logo de la Comunidad Salta Dev de la Provincia de Salta, Argentina.

### Ámbito 
El sistema estará enfocado en la comunidad tecnológica de Salta, con un alcance inicial limitado a la región y planeando su expansión futura a otros miembros afines a la , ya sea de manera individual, asi como de comunidades en otros lugares.

### Definiciones, Siglas y Abreviaturas
- **MVP**: Producto Mínimo Viable.
- **UI/UX**: Interfaz de Usuario / Experiencia de Usuario.
- **VPS**: Servidor Virtual Privado.

### Referencias
1. Normas de accesibilidad web (WCAG 2.1).
2. Guía oficial de diseño responsivo de Bootstrap.
3. Mejores prácticas en Flask y FastAPI para desarrollo backend.

### Visión Global
#### Misión
Fomentar la colaboración, aprendizaje y networking dentro de la comunidad tecnológica de Salta.
#### Visión
Convertirse en la principal plataforma de referencia para desarrolladores de Salta, promoviendo el desarrollo profesional y la innovación.

---

## Perspectiva del Producto

### Funciones del Producto 
1. **Gestión de Usuarios**: Registro, autenticación, y asignación de roles.
2. **Gestión de Contenidos**: Creación, moderación, y visualización de artículos, podcast, mentorías.
3. **Gestión de Eventos**: Publicación de eventos y talleres, registro de participantes.
4. **Accesibilidad y Diseño**: Garantizar un diseño inclusivo y responsivo.

### Características del Producto
- Plataforma web centralizada.
- Compatibilidad con navegadores modernos.
- Seguridad en la autenticación y manejo de datos.

### Características del Usuario
1. **Usuarios Registrados**: Profesionales, estudiantes y entusiastas tecnológicos.
2. **Administradores**: Encargados de la moderación y gestión del sistema (Administración).
3. **Proyectos Comunitarios**: Se convoca a miembros de la comunidad para dar mantenimiento a la landing page de la comunidad y bots de discord de la comunidad Dev Café Salta.  
4. **Mentores**: Creadores de contenido especializado y líderes de mentorías.
5. **Podcast/Radio Dev Cafe Salta**: Creadores de contenido y speakers.
6. **Asesorias IT**: Personal de Recursos Humanos y Recluters interesados en asesorar y dictar contenidos a la comunidad.
7. **Laboratorio Interno**: Asesorías y creación de proyectos de laboratorio para miembros de la comunidad.
8. **Area Comercial**: Asesorías y creación de proyectos con fines comerciales que ya pasaron la etapa de laboratorio para miembros de la comunidad y se traza la viabilidad comercial de los proyectos.
9. **Feria Traenee**: Se convoca a miembros de la comunidad que buscan hacer proyectos que les sean útiles para trabajar como su primera experiencia laboral y portafolio.  

### Limitaciones Generales
- No se contempla integración con plataformas externas para pagos.
- No se incluye la creación de una API pública en esta etapa.

### Supuestos y Dependencias
- Los usuarios tendrán acceso a dispositivos con conexión a internet.
- El equipo Nautas-Web proporcionará la infraestructura inicial.

### Funcionalidades Clave de Landing Page 

### 1. **Gym de Código**
- Espacio diseñado para practicar habilidades de programación mediante ejercicios prácticos y desafíos.
- Funciones principales:
  - Ejercicios interactivos clasificados por niveles (principiante, intermedio, avanzado).
  - Retroalimentación inmediata sobre el código enviado.
  - Sistema de recompensas y logros por cada desafío completado.

### 2. **Ruta de Aprendizaje**
- Planes de estudio estructurados para guiar a los usuarios en su aprendizaje de programación.
- Funciones principales:
  - Módulos secuenciales con contenidos teóricos y prácticos.
  - Evaluaciones al final de cada módulo.
  - Recomendaciones personalizadas según el progreso del usuario.

### 3. **Cowork**
- Plataforma para fomentar la colaboración y el trabajo en equipo entre los usuarios.
- Funciones principales:
  - Creación y gestión de proyectos grupales.
  - Espacios de chat y videoconferencia integrados.
  - Tableros Kanban para la gestión de tareas colaborativas.

### 4. **Zona Blog**
- Espacio para que los usuarios puedan publicar y compartir contenido relacionado con tecnología y programación.
- Funciones principales:
  - Creación, edición y publicación de artículos.
  - Sistema de comentarios y retroalimentación entre usuarios.
  - Categorías temáticas y etiquetas para mejorar la organización del contenido.

### 5. **Zona Talleres**
- Sesiones en vivo y grabadas dirigidas por expertos para enseñar conceptos y herramientas específicas.
- Funciones principales:
  - Calendario de talleres con horarios y temáticas disponibles.
  - Registro de asistencia y acceso a talleres pasados.
  - Material complementario descargable para cada sesión.

### 6. **Zona Proyectos**
- Plataforma para desarrollar y mostrar proyectos individuales o grupales.
- Funciones principales:
  - Repositorios integrados para subir código fuente.
  - Sección de visualización de proyectos destacados.
  - Oportunidades de colaboración y mentorías en proyectos.

### 7. **Zona Mentoría**
- Acceso a expertos para obtener asesoramiento y guía personalizada.
- Funciones principales:
  - Sistema de emparejamiento entre mentores y estudiantes según intereses.
  - Sesiones individuales o grupales.
  - Feedback detallado y recomendaciones de recursos adicionales.

---

## Beneficios del Sistema
1. **Aprendizaje Integral**: Herramientas complementarias que cubren desde la teoría hasta la práctica colaborativa.
2. **Colaboración Activa**: Fomento del trabajo en equipo y la interacción entre usuarios.
3. **Soporte Continuo**: Asistencia personalizada mediante la Zona Mentoría.
4. **Flexibilidad**: Adaptación a diferentes niveles de experiencia y áreas de interés en programación.

## Objetivo General
Proveer una plataforma integral que combine aprendizaje, colaboración y práctica para el desarrollo profesional y personal de sus usuarios en el ámbito tecnológico.

---

## Requisitos

### Requisitos Funcionales 
1. **Gestión de Usuarios**:
   - Registro y autenticación mediante correo y contraseña.
   - Recuperación de contraseñas.
   - Roles: Administradores, Mentores, Usuarios Registrados.
2. **Gestión de Contenidos**:
   - Creación, edición, y visualización de artículos técnicos y mentorías.
   - Moderación del contenido.
3. **Gestión de Eventos**:
   - Publicación de eventos.
   - Inscripciones sin costos asociados.
4. **Diseño y Accesibilidad**:
   - Diseño responsivo y accesible.
   - Uso de colores base: naranja y blanco.

## Requisitos No Funcionales

### 1. **Rendimiento**
- **Carga máxima estimada**: Capacidad inicial para manejar hasta **100 usuarios concurrentes**.
- **Tiempo de respuesta del servidor**: Inferior a **2 segundos** bajo condiciones normales.
- **Pruebas de carga periódicas** para garantizar el rendimiento bajo demanda.

### 2. **Escalabilidad**
- **Adaptación a usuarios adicionales** mediante una arquitectura escalable:
  - **Escalabilidad horizontal**: Agregando nuevos servidores para distribuir la carga.
  - **Escalabilidad vertical**: Aumentando recursos del servidor según la demanda.
- Uso de balanceadores de carga y configuraciones VPS flexibles.

### 3. **Seguridad**
- **Protección de datos sensibles**:
  - **Cifrado robusto** para contraseñas y datos confidenciales.
  - Uso obligatorio de **HTTPS** con certificados SSL.
- Protección contra ataques comunes, como **XSS**, **CSRF**, e **inyección SQL**.
- Roles y permisos para limitar el acceso a funcionalidades y datos específicos.

---

## Requisitos de Diseño

### 1. **Backend**
- **Framework sugerido**: Flask o FastAPI para garantizar rendimiento y flexibilidad.
- **Base de datos**: PostgreSQL con:
  - **Backups automáticos** diarios.
  - Configuración de transacciones ACID para mantener la integridad de los datos.

### 2. **Frontend**
- Diseño moderno y responsivo con:
  - **Figma** para prototipos de interfaz.
  - **React**, **Tailwind CSS** y **Bootstrap** para la implementación.

### 3. **Infraestructura**
El proyecto **DevCafé Salta** contará con una infraestructura robusta y segura proporcionada por el equipo de **Nautas-Web**. Los detalles clave incluyen:

#### Espacio Asignado
- **Espacio VPS**: Inicialmente, se asignarán **20 GB** de almacenamiento, de un total de 100 GB disponibles. Este espacio será suficiente para las primeras fases del proyecto.
- **Límite de transferencia**: Ilimitado, asegurando el manejo eficiente de grandes volúmenes de tráfico o datos.

#### Gestión de Cargas
- Capacidad de implementar aplicaciones adicionales o expansiones futuras según las necesidades del equipo de **DevCafé Salta**.

### Seguridad y Redundancia
- **Servidor VPS**: 
  - Configurado con **DNS redundante** y **protección DNSSEC** para evitar ataques de suplantación.
  - **Enrutamiento Anycast**, mejorando la velocidad y confiabilidad de las conexiones.
- **Failover Geográfico**: 
  - Réplica de datos distribuida entre centros de datos en **Córdoba** y **Buenos Aires**.
  - Contingencia adicional en un tercer centro de datos para asegurar alta disponibilidad.

---

## Atributos de Calidad del Sistema

### 1. **Seguridad**
- Autenticación robusta mediante contraseñas cifradas y autenticación multifactor opcional.
- Protección contra ataques como inyección SQL, XSS, y CSRF.
- Roles de acceso definidos para garantizar el acceso autorizado.

### 2. **Actuación**
- Manejo eficiente de hasta 100 usuarios concurrentes.
- Optimización de consultas a la base de datos para tiempos de respuesta inferiores a 2 segundos.

### 3. **Escalabilidad**
- Diseño para escalar horizontal y verticalmente mediante configuraciones VPS y balanceadores de carga.

### 4. **Disponibilidad**
- Objetivo de tiempo de actividad del 99.9%.
- Implementación de failover geográfico con múltiples réplicas.

### 5. **Mantenimiento**
- Código modular y bien documentado para facilitar actualizaciones y correcciones.
- Control de versiones con Git/GitHub.

### 6. **Portabilidad**
- Compatibilidad con plataformas Windows, Linux, y macOS.
- Configuraciones portables mediante Docker.

### 7. **Fiabilidad**
- Pruebas unitarias y funcionales para validar cada componente.
- Integridad de los datos asegurada mediante transacciones ACID.

### 8. **Usabilidad**
- Interfaz diseñada con Bootstrap para asegurar una experiencia consistente y responsiva.
- Cumplimiento de las pautas WCAG 2.1 para accesibilidad.

### 9. **Compatibilidad**
- Integración con sistemas externos como servicios de correo (SendGrid o Amazon SES).
- Soporte para importación/exportación en formatos estándar (CSV, JSON, PDF).

### 10. **Compliance**
- Cumplimiento de regulaciones como:
  - **RGPD**: Protección de datos personales.
  - **Normas locales**: Leyes aplicables en Salta y Argentina.
  - **WCAG 2.1**: Accesibilidad para usuarios con discapacidades.

### Respaldo de Datos 
- **Backup Automatizado**: 
  - Configuración de respaldos periódicos para garantizar la **integridad de los datos** y la **continuidad del servicio** en caso de fallas o incidentes.


### Auspicio y Gestión
- La infraestructura será auspiciada y gestionada por el equipo de **Nautas-Web**, brindando soporte técnico continuo y asegurando la disponibilidad de los recursos.
---
 . Este entorno técnico está diseñado para cumplir con los requisitos actuales del proyecto y permitir su escalabilidad en futuras etapas, ofreciendo un balance entre rendimiento, seguridad y sostenibilidad. En sintesis, se cuenta con estos elementos técnicos desde sistemas.

   - Servidor VPS:
   - 20 GB asignados inicialmente (ajustable según necesidades).
   - Gestión de transferencia ilimitada.
   - Backup automatizado.
   - Infraestructura redundante (Córdoba, Buenos Aires).
   - Servidor auspiciado por el equipo Nautas-Web.

### Atributos de Calidad
- **Usabilidad**: Interfaz intuitiva para todos los roles.
- **Mantenibilidad**: Código documentado y estructurado.
- **Disponibilidad**: Tiempo de actividad del sistema del 99%.

---

## Especificaciones del Proceso

### Especificaciones del Proceso de Gestión de Contenidos
| Ítem |                                             Paso                                                   |                                                                escripción                                                          | 
|------|----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| 1    | El usuario accede a la página.                                                                     | El usuario ingresa a la interfaz principal del sitio.                                                                              |
| 1    | El usuario procede a navegar el contenido de la página.                                            | El usuario visualiza contenido de la página en la interfaz principal del sitio.                                                    |
| 3    | El usuario navega por las secciones disponibles.                                                   | Puede acceder a foros, artículos técnicos, y eventos publicados.                                                                   |
| 5    | El administrador/es de la comunidad modera/n el contenido.                                         | Valida/n la/s publicación/es para asegurar su relevancia y calidad.                                                                |
| 5    | El usuario y administrador/es conversan sobre contenido a ingresar a la proyecto de la comunidad.  | Revisan y valida/n la/s publicación/es para asegurar su relevancia y calidad con el usuario de la comunidad.                       |
| 1    | El usuario decide a registrarse en un/os eventos ee la página.                                     | El usuario se registra en la interfaz principal del sitio para el/los eventos elegidos.                                            |
| 2    | El usuario se registra o inicia sesión.                                                            | Proporciona sus credenciales para autenticarse en el sistema eligiendo un módulo para trabajar.                                    |
| 3    | El usuario registrado navega por las secciones disponibles elegidas.                               | Puede acceder, según el módulo que eligio ir a mantenimiento de la aplicación, administración, mentorias, artículos técnicos, etc. |
| 4    | El usuario crea contenido y lo anuncia en la administración de la comunidad.                       | Ingresa y registra en GitHub sus actividades realizadas según el módulo en el que se registro.                                     |
| 5    | El administrador revisa el contenido creado.                                                       | Valida la publicación para asegurar su relevancia y calidad.                                                                       |
| 5    | El administrador aprueba el contenido creado.                                                      | se registran los cambios en la aplicación y se publica el contenido.                                                               |
| 6    | Los usuarios interactúan con el contenido.                                                         | Leen, inscriben, puntuan o comparten publicaciones.                                                                                |
| 7    | El sistema registra las interacciones.                                                             | Actualiza contenidos y los visualiza.                                                                                              |

### Especificaciones del Proceso de Gestión de Eventos

| Ítem |                          Paso                      |                                                     Descripción                                                     |
|------|----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| 1    | El usuario consulta los eventos publicados.        | Puede visualizar los eventos por fecha/s, categoría/s o tematica/s.                                                 |
| 2    | El usuario se inscribe en un/s evento/s.           | Visualiza y elije el/os eventos a participar en el módulo de montorias y redacción de documentos.                   |
| 3    | El sistema registra los datos de inscripción.      | Almacena los datos del participante en la base de datos.                                                            |
| 4    | El administrador y Mentor gestiona el evento.      | Puede editar información, enviar recordatorios, o cancelar eventos.                                                 |
| 5    | El sistema registra pedidos del usuario.           | Envía un correo con los detalles del evento y la confirmación de inscripción y se publica el enlace para el evento. |

---

## Especificaciones del Control

### Especificaciones del Control de Contenidos

| Ítem |                       Condición                   |                                     Acción                               |
|------|---------------------------------------------------|--------------------------------------------------------------------------|
| 1    | El contenido cumple con las políticas.            | Se publica en el sitio web.                                              |
| 2    | El contenido no cumple con las políticas.         | Se rechaza la publicación y se notifica al usuario con los motivos.      |

### Especificaciones del Control de Eventos

| Ítem |                       Condición                   |                                    Acción                                 |
|------|---------------------------------------------------|---------------------------------------------------------------------------|
| 1    | El evento se cancela antes de la fecha límite.    | Se notifica a los inscritos y se actualiza el estado en la base de datos. |
| 2    | El evento tiene cupos disponibles.                | Permite nuevas inscripciones.                                             |
| 3    | El evento no tiene cupos disponibles.             | Se bloquean nuevas inscripciones.                                         |

---

## Especificaciones de Datos 

|      Atributo      |                     Descripción              |      Tipo      |                         Restricciones                 |
|--------------------|----------------------------------------------|----------------|-------------------------------------------------------|
| ID Usuario         | Identificador único del usuario.             | Entero         | Autoincremental.                                      |
| Nombre Usuario     | Nombre del usuario registrado.               | String         | No vacío.                                             |
| Email              | Correo electrónico del usuario.              | String         | Formato válido de email.                              |
| Rol Usuario        | Rol asignado al usuario.                     | Enum           | Valores posibles: Admin, Mentor, Registrado.          |
| ID Evento          | Identificador único del evento.              | Entero         | Autoincremental.                                      |
| Título Evento      | Nombre del evento.                           | String         | No vacío.                                             |
| Fecha Evento       | Fecha de realización del evento.             | Fecha          | Formato DD/MM/AAAA.                                   |
| Descripción Evento | Detalles del evento.                         | String         | Máximo de 500 caracteres.                             |
| Evaluación del Evento | Detalles de evaluación del evento.        | Enum           | Valores posibles: Malo, Bueno, Muy bueno.             |

---

## Especificaciones de Validación

|                    Condición                 |                                 Acción                              |
|----------------------------------------------|---------------------------------------------------------------------|
| Los datos del usuario son válidos.           | Permite el registro e ingreso al sistema.                           |
| Los datos del usuario no son válidos.        | Notifica errores del registro.                                      |
| El evento cumple con los requisitos.         | Se publica para su visualización.                                   |
| El evento no cumple con los requisitos.      | Se bloquea la publicación y se notifica al administrador.           |

---

## Especificaciones del Servicio

- **Nombre del Servicio:** SaltaDev.
- **Propósito:** Proveer una plataforma centralizada para el desarrollo y colaboración en la comunidad de desarrolladores en Salta.
- **Usuarios Objetivo:** Desarrolladores, estudiantes, profesionales y entusiastas de la tecnología.
- **Periodicidad:** Acceso continuo, con actualizaciones periódicas.
- **Modelo de Negocio:** Plataforma gratuita, financiada por contribuciones voluntarias y patrocinadores.

---

## Anexos

**Diagrama de Frecuencia**

[![](https://mermaid.ink/img/pako:eNpllMty0zAUhl9F401hJh1wS0rJgpmQS5uZ3mgCC5TO9MQ-SQSyjpHtMqHtw7BkwYpHyItxJDuuTVeJdT6dy69fug8iijHoBUtNP6I12FzMhnMjhLi9vU3QJqDiuZmb_gs5xLsBLFFMQecg9sUV2Ry0iFFMjIoU3bwU-_vvH85opYwYkLUY5fQgPsghZOsFgY1vOE-DmZiopgbyggREEWb8o0Xqc9c8x65xpbLcQszwUI7JJoUGq8jVr2LE_NDzQ8gp64kLShYWO6KfotYqpo4Y8Ty6I6ZoFFmVbx7ESE7MkrNBpLZ_jVgV3CfEINDwgFm-sjj9eHbjJBi51GLMfI4WM-7EQQPSsCALlpmxJ07kgEwOPJaIyAgNzCSFUZy2Zk7lNcaYiSlFCjRyr_07lVEpJqff_s4EiHOFPABlvvxJuTGUlymLbXgzw1d8YKx9WnbP3GlYYSCr3Q5rHZ2nwGOTUPa91JZ7NNxLotCwdGIjZrw7JV95ElYw53Rhu_0DrqfJLsuBnGECvqEaaMYP5aVdgVE_K5GZGyObrZXkjTwHg1_LflXG1oh99XqihbyiOIIsf3UNsSI_xqLc25VnFBVcuLl4JGt1WFJ_oJZWFhLI2okjyYGN82Hm90fl-sHTcnWCuTNcizmUT7fgucgV9KaR6NlwFcMTeBvxDOxp7wHjR-yW8aOy0JK0ai6_lX0DWmXKZ_6sYKG0M5prGK3zVrvMsexbhFb09LgMvWNLsgfZWt6FMXqZdtHwtRwlqUUTVx5x0JQFyT-lTSx0s8aFM_-5Mioh35TGJnMgx8qA4fplqnaL4aEco1XgCswsKIPYkjz8T84G0zjTrtxdzNJyJ2jQlvOG3crORzVjnTuiAvT3QqEV219OJL6fyC8Bb9nb2ws6QfUa8lt57x7IeZCvMcF50OO_Mdhv82BuHpkDNuJ0Y6Kgl9sCO4GlYrUOekvQGX8VaQw5DhU4J9arbNEvRLvvx3_zLuYc?type=png)](https://mermaid.live/edit#pako:eNpllMty0zAUhl9F401hJh1wS0rJgpmQS5uZ3mgCC5TO9MQ-SQSyjpHtMqHtw7BkwYpHyItxJDuuTVeJdT6dy69fug8iijHoBUtNP6I12FzMhnMjhLi9vU3QJqDiuZmb_gs5xLsBLFFMQecg9sUV2Ry0iFFMjIoU3bwU-_vvH85opYwYkLUY5fQgPsghZOsFgY1vOE-DmZiopgbyggREEWb8o0Xqc9c8x65xpbLcQszwUI7JJoUGq8jVr2LE_NDzQ8gp64kLShYWO6KfotYqpo4Y8Ty6I6ZoFFmVbx7ESE7MkrNBpLZ_jVgV3CfEINDwgFm-sjj9eHbjJBi51GLMfI4WM-7EQQPSsCALlpmxJ07kgEwOPJaIyAgNzCSFUZy2Zk7lNcaYiSlFCjRyr_07lVEpJqff_s4EiHOFPABlvvxJuTGUlymLbXgzw1d8YKx9WnbP3GlYYSCr3Q5rHZ2nwGOTUPa91JZ7NNxLotCwdGIjZrw7JV95ElYw53Rhu_0DrqfJLsuBnGECvqEaaMYP5aVdgVE_K5GZGyObrZXkjTwHg1_LflXG1oh99XqihbyiOIIsf3UNsSI_xqLc25VnFBVcuLl4JGt1WFJ_oJZWFhLI2okjyYGN82Hm90fl-sHTcnWCuTNcizmUT7fgucgV9KaR6NlwFcMTeBvxDOxp7wHjR-yW8aOy0JK0ai6_lX0DWmXKZ_6sYKG0M5prGK3zVrvMsexbhFb09LgMvWNLsgfZWt6FMXqZdtHwtRwlqUUTVx5x0JQFyT-lTSx0s8aFM_-5Mioh35TGJnMgx8qA4fplqnaL4aEco1XgCswsKIPYkjz8T84G0zjTrtxdzNJyJ2jQlvOG3crORzVjnTuiAvT3QqEV219OJL6fyC8Bb9nb2ws6QfUa8lt57x7IeZCvMcF50OO_Mdhv82BuHpkDNuJ0Y6Kgl9sCO4GlYrUOekvQGX8VaQw5DhU4J9arbNEvRLvvx3_zLuYc)


**Diagrama de Entidad-Relación**

[![](https://mermaid.ink/img/pako:eNptkEFugzAQRa8ymnVyAXZp2gVSVEdQNhVSNMVTYhXbyNiLFnL32giqlsa7sd5_8zUjNlYyZsjuUVHrSNcG4qvK6lDkAqZpv7cjlOIsipcnyKBGsOCYOvVFNd6Fz9XDKT8ejrl4ngN9eOtUc5eeRijEaaa8YsMr81uxWJfYZWvXgQfvtvbL1jD979VY49koaddsqvJ328wNDDSo1hAEk1DcoWanScl4tzFFY_sr69g-4ZLcR8JukaPgbflpGsy8C7xDZ0N7xeyduiFOoZfkebn7z29P5tXadb59A4RYgS0?type=png)](https://mermaid.live/edit#pako:eNptkEFugzAQRa8ymnVyAXZp2gVSVEdQNhVSNMVTYhXbyNiLFnL32giqlsa7sd5_8zUjNlYyZsjuUVHrSNcG4qvK6lDkAqZpv7cjlOIsipcnyKBGsOCYOvVFNd6Fz9XDKT8ejrl4ngN9eOtUc5eeRijEaaa8YsMr81uxWJfYZWvXgQfvtvbL1jD979VY49koaddsqvJ328wNDDSo1hAEk1DcoWanScl4tzFFY_sr69g-4ZLcR8JukaPgbflpGsy8C7xDZ0N7xeyduiFOoZfkebn7z29P5tXadb59A4RYgS0)

---