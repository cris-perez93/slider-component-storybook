# NUWE-Slider

Cristian Pérez(Frontend). Slider-Component

> **Descripción del Proyecto** 

En esta ocasión se nos pide crear un componente Slider para mostrar información de un usuario , comentarios, feedback..

**Objetivos** 

✅ Task 1 → Se puede deslizar de izquierda a derecha y ver varios comentarios.




## Tecnologias
👌  React -Create-React-App<br>
🧾  PropTypes<br>
📕  Storybook


## API/Component

Consumo de API () 📃 (https://api.quotable.io/random)-(https://randomuser.me/api/).
He utilizado estas dos APIS, para simular comentarios y perfiles para la creación del Slider.


## Arquitectura


He decidido trabajar con React-Hooks para tener mejor fluidez a la hora de trabajar con los estados.<br>
He implementado un Custom-Hook para las llamadas a la api utilizando Promise.All para llamar de manera simultanea al recurso.<br>


## Estructura de carpetas
![](/src/Slider/assets/Slider-structure.png)
He seguido una estructura atomizada parecida a la de la imagen, en la cual podemos encontrar en la carpeta /src 2 componentes principales, 'Error' (pagina de error) 'Slider' para mostrar el Slider, los cuales pueden contener mas componentes atomizados como botones, iconos... u otros componentes. <br>
Utilizando props pasamos informacion a traves de estos  y los  documentamos con PropTypes.<br>
Separamos la logica de la vista. (Smart Components)
Tambien tenemos la carpeta de stories , la cual contiene las historias de nuestros componentes , y las variaciones de los mismos.



## Installation

npm install # Instalación de todas las dependencias del proyecto<br>
npm start  #  Ejecuta el proyecto en local.<br>
npm run storybook # Ejecuta el entorno de desarrollo para storybook. Donde podemos ver todos nuestros componentes documentados.

