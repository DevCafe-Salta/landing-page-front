# Arquitectura del Software - SaltaDev

## 1. Introducción

La plataforma **SaltaDev** posee un sistema diseñado para conectar programadores de manera eficiente y profesional, la plataforma permite a los usuarios gestionar mentorias, revisar anuncios y leer publicaciones además de poder sumarse a proyectos internos para la comunidad como DevCafe Podcast / Radio entre otros y frotalecer la relación con la comunidad de programadores teniendo Networking y un ambiente de compañerismo y amistad en el proceso.

---

## 2. Objetivos del Sistema

1. Facilitar la conexión entre programadores con distintos niveles de conocimientos y personas interesadas en el mundo IT.
2. Generar informes y notificaciones para los usuarios y personas de la comunidad IT como aquellos interesados en este mundo sin conocimientos previos en Tecnologías.

---

## 3. Estructura del Proyecto

- **Frontend**:
  - Interfaz de usuario diseñada con **React**, **Taiwind** y **Figma**  para un diseño responsivo.
  - Con dependencias de JavaScript, maximizando la simplicidad del diseño.

- **Backend**:
  - Se deja para elección de el encargado de backend.

- **Base de Datos**:
  - Almacenamiento en **PostgreSQL**.
  - Optimización mediante normalización a **FN2** y Diagramas de **DER** y **DF**.

- **Correo Electrónico**:
  - Gestión de notificaciones utilizando el backend de correo desde el mismo servidor o con terceros como Mailchamp u otro a elección que prefieran los responsables del backend.

- **Seguridad**:
  - Implementación de HTTPS y SSL.
  - Uso de encriptación y hashing para datos sensibles, como contraseñas y CUIL.
  - **Servidor VPS**: 
  - Configurado con **DNS redundante** y **protección DNSSEC** para evitar ataques de suplantación.
  - **Enrutamiento Anycast**, mejorando la velocidad y confiabilidad de las conexiones.
- **Failover Geográfico**: 
  - Réplica de datos distribuida entre centros de datos en **Córdoba** y **Buenos Aires**.
  - Contingencia adicional en un tercer centro de datos para asegurar alta disponibilidad.

### Respaldo de Datos 
- **Backup Automatizado**: 
  - Configuración de respaldos periódicos para garantizar la **integridad de los datos** y la **continuidad del servicio** en caso de fallas o incidentes.

### Seguridad del Sistema
- **Autenticación y Cifrado**:
  - Credenciales cerradas y protegidas mediante autenticación robusta y cifrado avanzado.
  - El acceso al sistema estará limitado al personal autorizado, garantizando un entorno controlado y seguro.

---

## 4. Componentes Principales

### 4.1 Usuarios
- **Usuarios**:
  - **Usuarios**: Registran su Módulo como Administradores o Mentores gestionando el mantenimienimiento del contenido del Portal y Bot de Discord de la comunidad.

## 5. Diagramas

**Diagrama de Frecuencia**

[![](https://mermaid.ink/img/pako:eNpllMty0zAUhl9F401hJh1wS0rJgpmQS5uZ3mgCC5TO9MQ-SQSyjpHtMqHtw7BkwYpHyItxJDuuTVeJdT6dy69fug8iijHoBUtNP6I12FzMhnMjhLi9vU3QJqDiuZmb_gs5xLsBLFFMQecg9sUV2Ry0iFFMjIoU3bwU-_vvH85opYwYkLUY5fQgPsghZOsFgY1vOE-DmZiopgbyggREEWb8o0Xqc9c8x65xpbLcQszwUI7JJoUGq8jVr2LE_NDzQ8gp64kLShYWO6KfotYqpo4Y8Ty6I6ZoFFmVbx7ESE7MkrNBpLZ_jVgV3CfEINDwgFm-sjj9eHbjJBi51GLMfI4WM-7EQQPSsCALlpmxJ07kgEwOPJaIyAgNzCSFUZy2Zk7lNcaYiSlFCjRyr_07lVEpJqff_s4EiHOFPABlvvxJuTGUlymLbXgzw1d8YKx9WnbP3GlYYSCr3Q5rHZ2nwGOTUPa91JZ7NNxLotCwdGIjZrw7JV95ElYw53Rhu_0DrqfJLsuBnGECvqEaaMYP5aVdgVE_K5GZGyObrZXkjTwHg1_LflXG1oh99XqihbyiOIIsf3UNsSI_xqLc25VnFBVcuLl4JGt1WFJ_oJZWFhLI2okjyYGN82Hm90fl-sHTcnWCuTNcizmUT7fgucgV9KaR6NlwFcMTeBvxDOxp7wHjR-yW8aOy0JK0ai6_lX0DWmXKZ_6sYKG0M5prGK3zVrvMsexbhFb09LgMvWNLsgfZWt6FMXqZdtHwtRwlqUUTVx5x0JQFyT-lTSx0s8aFM_-5Mioh35TGJnMgx8qA4fplqnaL4aEco1XgCswsKIPYkjz8T84G0zjTrtxdzNJyJ2jQlvOG3crORzVjnTuiAvT3QqEV219OJL6fyC8Bb9nb2ws6QfUa8lt57x7IeZCvMcF50OO_Mdhv82BuHpkDNuJ0Y6Kgl9sCO4GlYrUOekvQGX8VaQw5DhU4J9arbNEvRLvvx3_zLuYc?type=png)](https://mermaid.live/edit#pako:eNpllMty0zAUhl9F401hJh1wS0rJgpmQS5uZ3mgCC5TO9MQ-SQSyjpHtMqHtw7BkwYpHyItxJDuuTVeJdT6dy69fug8iijHoBUtNP6I12FzMhnMjhLi9vU3QJqDiuZmb_gs5xLsBLFFMQecg9sUV2Ry0iFFMjIoU3bwU-_vvH85opYwYkLUY5fQgPsghZOsFgY1vOE-DmZiopgbyggREEWb8o0Xqc9c8x65xpbLcQszwUI7JJoUGq8jVr2LE_NDzQ8gp64kLShYWO6KfotYqpo4Y8Ty6I6ZoFFmVbx7ESE7MkrNBpLZ_jVgV3CfEINDwgFm-sjj9eHbjJBi51GLMfI4WM-7EQQPSsCALlpmxJ07kgEwOPJaIyAgNzCSFUZy2Zk7lNcaYiSlFCjRyr_07lVEpJqff_s4EiHOFPABlvvxJuTGUlymLbXgzw1d8YKx9WnbP3GlYYSCr3Q5rHZ2nwGOTUPa91JZ7NNxLotCwdGIjZrw7JV95ElYw53Rhu_0DrqfJLsuBnGECvqEaaMYP5aVdgVE_K5GZGyObrZXkjTwHg1_LflXG1oh99XqihbyiOIIsf3UNsSI_xqLc25VnFBVcuLl4JGt1WFJ_oJZWFhLI2okjyYGN82Hm90fl-sHTcnWCuTNcizmUT7fgucgV9KaR6NlwFcMTeBvxDOxp7wHjR-yW8aOy0JK0ai6_lX0DWmXKZ_6sYKG0M5prGK3zVrvMsexbhFb09LgMvWNLsgfZWt6FMXqZdtHwtRwlqUUTVx5x0JQFyT-lTSx0s8aFM_-5Mioh35TGJnMgx8qA4fplqnaL4aEco1XgCswsKIPYkjz8T84G0zjTrtxdzNJyJ2jQlvOG3crORzVjnTuiAvT3QqEV219OJL6fyC8Bb9nb2ws6QfUa8lt57x7IeZCvMcF50OO_Mdhv82BuHpkDNuJ0Y6Kgl9sCO4GlYrUOekvQGX8VaQw5DhU4J9arbNEvRLvvx3_zLuYc)


**Diagrama de Entidad-Relación**

[![](https://mermaid.ink/img/pako:eNptkEFugzAQRa8ymnVyAXZp2gVSVEdQNhVSNMVTYhXbyNiLFnL32giqlsa7sd5_8zUjNlYyZsjuUVHrSNcG4qvK6lDkAqZpv7cjlOIsipcnyKBGsOCYOvVFNd6Fz9XDKT8ejrl4ngN9eOtUc5eeRijEaaa8YsMr81uxWJfYZWvXgQfvtvbL1jD979VY49koaddsqvJ328wNDDSo1hAEk1DcoWanScl4tzFFY_sr69g-4ZLcR8JukaPgbflpGsy8C7xDZ0N7xeyduiFOoZfkebn7z29P5tXadb59A4RYgS0?type=png)](https://mermaid.live/edit#pako:eNptkEFugzAQRa8ymnVyAXZp2gVSVEdQNhVSNMVTYhXbyNiLFnL32giqlsa7sd5_8zUjNlYyZsjuUVHrSNcG4qvK6lDkAqZpv7cjlOIsipcnyKBGsOCYOvVFNd6Fz9XDKT8ejrl4ngN9eOtUc5eeRijEaaa8YsMr81uxWJfYZWvXgQfvtvbL1jD979VY49koaddsqvJ328wNDDSo1hAEk1DcoWanScl4tzFFY_sr69g-4ZLcR8JukaPgbflpGsy8C7xDZ0N7xeyduiFOoZfkebn7z29P5tXadb59A4RYgS0)

## 6. **Pruebas**:
   - Realizar pruebas unitarias y funcionales para asegurar la integridad del sistema.

## 7. Herramientas Adicionales

- **Control de versiones y colaboración**:
  - **Git** / **GitHub**: Para control de versiones y colaboración.

