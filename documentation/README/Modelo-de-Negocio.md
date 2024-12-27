# Modelo de Negocio para SaltaDev

## Introducción

El objetivo del modelo de negocio es ofrecer una plataforma integral que facilite la gestión de perfiles y contenido para la comunidad de desarrolladores en Salta. Esta propuesta incluye funcionalidades como registro de usuarios y oportunidades de colaboración entre profesionales.

El enfoque está orientado a crear una comunidad digital sostenible, escalable y flexible, que fomente el crecimiento profesional y la integración de nuevos desarrolladores en el mercado laboral.

## Componentes Clave del Modelo de Negocio

### 1. Gestión de Perfiles de Usuarios
- **Crear**: Permitir a los usuarios registrar un perfil con su experiencia y habilidades técnicas.
- **Leer**: Visualizar información del perfil en la plataforma.
- **Actualizar**: Modificar los datos del perfil según necesidades.
- **Eliminar**: Opción de borrar perfiles obsoletos o inactivos.

### 2. Foros de Discusión y Recursos
- Espacios de debate organizados por temáticas tecnológicas.
- Recursos compartidos como artículos, tutoriales y cursos.

### 3. Organización de Eventos Locales
- **Meetups**: Reuniones mensuales para networking.
- **Workshops**: Talleres técnicos organizados en colaboración con empresas locales.

### 4. Conexión Empresa-Desarrollador
- **Bolsa de trabajo**: Ofertas laborales en el ámbito IT.
- **Proyectos colaborativos**: Espacios para propuestas de proyectos abiertos.

## Ventajas Competitivas del Modelo
- **Comunicación Directa**: Facilita la interacción entre desarrolladores y empresas.
- **Personalización**: Perfiles y recursos adaptados al nivel técnico de los usuarios.
- **Accesibilidad**: Plataforma gratuita para usuarios individuales y de bajo costo para empresas.
- **Escalabilidad**: Potencial de expansión a otras provincias o comunidades de nicho.

## Listado de Entidades

### Usuario **(ED)**
- ID_Usuario **(PK)**
- Nombre de Usuario
- Correo Electrónico
- Contraseña
- Perfil Profesional (experiencia, habilidades, etc.)
- Estado de Miembro (activo, inactivo)
- ID_Mentoría **(PK)**
- Título
- Descripción
- Fecha de Realización

### Evento **(ED)**
- ID_Evento **(PK)**
- Nombre del Evento
- Fecha y Hora
- Lugar
- Descripción
- Organizador (ID_Usuario) **(FK)**

### Roles **(ED)**
- ID_Usuario **(PK)**
- Nombre del Usuario **(FK)**
- Descripción
- Perfil Profesional (experiencia, habilidades, etc.)


## Relaciones

1. Un **Usuario** puede crear muchas **Publicaciones** (1 a M)
3. Un **Usuario** puede organizar múltiples **Mentorias** (1 a M).
3. Un **Usuario** puede organizar múltiples **Eventos** (1 a M).
5. Un **Evento** puede tener múltiples **Asistentes** (M a M).

## Diagramas

[![](https://mermaid.ink/img/pako:eNpllMty0zAUhl9F401hJh1wS0rJgpmQS5uZ3mgCC5TO9MQ-SQSyjpHtMqHtw7BkwYpHyItxJDuuTVeJdT6dy69fug8iijHoBUtNP6I12FzMhnMjhLi9vU3QJqDiuZmb_gs5xLsBLFFMQecg9sUV2Ry0iFFMjIoU3bwU-_vvH85opYwYkLUY5fQgPsghZOsFgY1vOE-DmZiopgbyggREEWb8o0Xqc9c8x65xpbLcQszwUI7JJoUGq8jVr2LE_NDzQ8gp64kLShYWO6KfotYqpo4Y8Ty6I6ZoFFmVbx7ESE7MkrNBpLZ_jVgV3CfEINDwgFm-sjj9eHbjJBi51GLMfI4WM-7EQQPSsCALlpmxJ07kgEwOPJaIyAgNzCSFUZy2Zk7lNcaYiSlFCjRyr_07lVEpJqff_s4EiHOFPABlvvxJuTGUlymLbXgzw1d8YKx9WnbP3GlYYSCr3Q5rHZ2nwGOTUPa91JZ7NNxLotCwdGIjZrw7JV95ElYw53Rhu_0DrqfJLsuBnGECvqEaaMYP5aVdgVE_K5GZGyObrZXkjTwHg1_LflXG1oh99XqihbyiOIIsf3UNsSI_xqLc25VnFBVcuLl4JGt1WFJ_oJZWFhLI2okjyYGN82Hm90fl-sHTcnWCuTNcizmUT7fgucgV9KaR6NlwFcMTeBvxDOxp7wHjR-yW8aOy0JK0ai6_lX0DWmXKZ_6sYKG0M5prGK3zVrvMsexbhFb09LgMvWNLsgfZWt6FMXqZdtHwtRwlqUUTVx5x0JQFyT-lTSx0s8aFM_-5Mioh35TGJnMgx8qA4fplqnaL4aEco1XgCswsKIPYkjz8T84G0zjTrtxdzNJyJ2jQlvOG3crORzVjnTuiAvT3QqEV219OJL6fyC8Bb9nb2ws6QfUa8lt57x7IeZCvMcF50OO_Mdhv82BuHpkDNuJ0Y6Kgl9sCO4GlYrUOekvQGX8VaQw5DhU4J9arbNEvRLvvx3_zLuYc?type=png)](https://mermaid.live/edit#pako:eNpllMty0zAUhl9F401hJh1wS0rJgpmQS5uZ3mgCC5TO9MQ-SQSyjpHtMqHtw7BkwYpHyItxJDuuTVeJdT6dy69fug8iijHoBUtNP6I12FzMhnMjhLi9vU3QJqDiuZmb_gs5xLsBLFFMQecg9sUV2Ry0iFFMjIoU3bwU-_vvH85opYwYkLUY5fQgPsghZOsFgY1vOE-DmZiopgbyggREEWb8o0Xqc9c8x65xpbLcQszwUI7JJoUGq8jVr2LE_NDzQ8gp64kLShYWO6KfotYqpo4Y8Ty6I6ZoFFmVbx7ESE7MkrNBpLZ_jVgV3CfEINDwgFm-sjj9eHbjJBi51GLMfI4WM-7EQQPSsCALlpmxJ07kgEwOPJaIyAgNzCSFUZy2Zk7lNcaYiSlFCjRyr_07lVEpJqff_s4EiHOFPABlvvxJuTGUlymLbXgzw1d8YKx9WnbP3GlYYSCr3Q5rHZ2nwGOTUPa91JZ7NNxLotCwdGIjZrw7JV95ElYw53Rhu_0DrqfJLsuBnGECvqEaaMYP5aVdgVE_K5GZGyObrZXkjTwHg1_LflXG1oh99XqihbyiOIIsf3UNsSI_xqLc25VnFBVcuLl4JGt1WFJ_oJZWFhLI2okjyYGN82Hm90fl-sHTcnWCuTNcizmUT7fgucgV9KaR6NlwFcMTeBvxDOxp7wHjR-yW8aOy0JK0ai6_lX0DWmXKZ_6sYKG0M5prGK3zVrvMsexbhFb09LgMvWNLsgfZWt6FMXqZdtHwtRwlqUUTVx5x0JQFyT-lTSx0s8aFM_-5Mioh35TGJnMgx8qA4fplqnaL4aEco1XgCswsKIPYkjz8T84G0zjTrtxdzNJyJ2jQlvOG3crORzVjnTuiAvT3QqEV219OJL6fyC8Bb9nb2ws6QfUa8lt57x7IeZCvMcF50OO_Mdhv82BuHpkDNuJ0Y6Kgl9sCO4GlYrUOekvQGX8VaQw5DhU4J9arbNEvRLvvx3_zLuYc)


**Diagrama de Entidad-Relación**

[![](https://mermaid.ink/img/pako:eNptkEFugzAQRa8ymnVyAXZp2gVSVEdQNhVSNMVTYhXbyNiLFnL32giqlsa7sd5_8zUjNlYyZsjuUVHrSNcG4qvK6lDkAqZpv7cjlOIsipcnyKBGsOCYOvVFNd6Fz9XDKT8ejrl4ngN9eOtUc5eeRijEaaa8YsMr81uxWJfYZWvXgQfvtvbL1jD979VY49koaddsqvJ328wNDDSo1hAEk1DcoWanScl4tzFFY_sr69g-4ZLcR8JukaPgbflpGsy8C7xDZ0N7xeyduiFOoZfkebn7z29P5tXadb59A4RYgS0?type=png)](https://mermaid.live/edit#pako:eNptkEFugzAQRa8ymnVyAXZp2gVSVEdQNhVSNMVTYhXbyNiLFnL32giqlsa7sd5_8zUjNlYyZsjuUVHrSNcG4qvK6lDkAqZpv7cjlOIsipcnyKBGsOCYOvVFNd6Fz9XDKT8ejrl4ngN9eOtUc5eeRijEaaa8YsMr81uxWJfYZWvXgQfvtvbL1jD979VY49koaddsqvJ328wNDDSo1hAEk1DcoWanScl4tzFFY_sr69g-4ZLcR8JukaPgbflpGsy8C7xDZ0N7xeyduiFOoZfkebn7z29P5tXadb59A4RYgS0)

## Reglas de Negocio (Sistema CRUD)

### Usuario
- **Crear (C)**:
  - Registro de un nuevo usuario en la plataforma y crear de nuevos temas de mentoría..
- **Leer (R)**:
  - Acceso a perfiles de usuario, acceder a contenido de publicación de la plataforma y visualizar temas activos.
- **Actualizar (U)**:
  - Edición de datos de perfil, editar datos de perfil, contenido de publicación y modificar tema de mentoría.
- **Eliminar (D)**:
  - Borrado de perfiles bajo solicitud, tema de mentoría y contenido de publicación de la plataforma.

## Análisis Crítico

### Aspectos Positivos
1. **Ecosistema Colaborativo**: Promueve la integración entre comunidad y empresas.
2. **Crecimiento Regional**: Fortalece el ecosistema tecnológico en Salta.
3. **Versatilidad**: Adecuado tanto para principiantes como para expertos en desarrollo.

### Recomendaciones
1. **Colaboración Institucional**: Implementar modelos de colaboración economíca con empresas locales e internacionales para impulsar becas, promociones, trabajos colaborativos y eventos de tecnología para la comunidad.
2. **Escalabilidad**: Considerar la expansión de funcionalidades basadas en inteligencia artificial.
3. **Soporte Continuo**: Establecer un continuo soporte técnico de usuarios de la comunidad de Dev Cafe Salta.

---

