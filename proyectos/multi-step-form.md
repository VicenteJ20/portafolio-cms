---
title: Multi-step-form
publishedAt: 2024-02-15
author: Vicente Jorquera
description: Bienvenido a mi solución al desafío de frontend mentor para el proyecto multi-step-form, un proyecto donde apliqué diferentes tecnologías del frontend para desarrollar una solución accesible, rápida y responsive.
coverImage: https://vicentejorquera.s3.amazonaws.com/multi-step-form/multi-form-step-screenshot-home.webp
---
# Multi-step-form by Vicente Jorquera - Frontend Mentor

- Vicente Jorquera
- 2024-02-15

![HOME HERO IMAGE](https://vicentejorquera.s3.amazonaws.com/multi-step-form/multi-step-form-lg.webp)

##### Bienvenido/a a este artículo, el proyecto a continuación lo encontré cuando buscaba algo interesante en la web de Frontend Mentor. Escogí este proyecto ya que vi la oportunidad de aplicar diferentes tecnologías que no había tenido la oportunidad de trabajarlas con ViteJS y ReactJS, saliendo del ecosistema de NextJS que es lo que suelo utilizar al trabajar con React. En los botones aquí abajo encuentras los enlaces a la versión live del proyecto (hosteada en [Vercel](https://vercel.com/)) y el código fuente disponible en Github.

- [Ir a la web](https://multi-step-form.vicentejorquera.dev/your-info)
- [Ir al repositorio](https://github.com/VicenteJ20/multi-step-form)


## Requisitos del proyecto

El desafío consiste en construir el proyecto lo más cercano al diseño entregado, dejando a libertad del desarrollador las herramientas que se utilizarán para llevar a cabo el proyecto.

#### Funcionalidades requeridas

- Completar cada paso de la secuencia para continuar.
- Volver atrás para modificar la información previamente seleccionada.
- Mostrar un resumen de las selecciones del usuario en el paso final previo a la confirmación de envío.
- Mostrar el layout de forma óptima dependiendo del tamaño de pantalla.
- Mostrar estado de hover y focus para todos los elementos interactivos en la página.
- Recibir validación de mensajes si: un campo no se ha completado, la dirección de email no está correctamente formateada, un paso se envía pero no se ha seleccionado información.


#### Diseño original propuesto por frontendmentor:

![Diseño original](https://vicentejorquera.s3.amazonaws.com/multi-step-form/original-design.webp)

#### Diseño final de la pantalla de Home desarrollado por mi:

![Diseño final realizado por mi](https://vicentejorquera.s3.amazonaws.com/multi-step-form/home-by-me.webp)

### Solución planteada

Para llevar a cabo la solución de este proyecto, me enfoqué en utilizar React, ya que es una librería que suelo utilizar para otro tipo de proyectos, razón por la cual, sé que tengo destreza con la misma pero no había desarrollado un proyecto similar como un desafío en internet. En cuanto a qué otras tecnologías que utilicé para desarrollar el proyecto, se encuentran las siguientes:

- ViteJS
- TailwindCSS
- React Router DOM v6
- Redux Toolkit
- React
- Formik y Yup
- Vercel (Hosting y deploy de mi aplicación)
- Github (Hosting de mi código)
- Cloudflare (Subdominio asociado)

### ¿Cómo se aplica cada una de las tecnologías en mi solución?

#### ViteJS

Para comenzar utilicé **ViteJS** para construir mi proyecto base con React, como bien ya han de saber, en este punto **(15/02/24)** create-react-app ya no se recomienda para inicializar proyectos, en su lugar tenemos herramientas como ViteJS y NextJS. En este caso decidí utilizar Vite, ya que sabía que la solución que debía construir era 100% de frontend, y NextJS (también lo utilizo bastante) es más recomendable cuando se quiere realizar un proyecto FullStack, que va a utilizar SSR o al menos que sea de mayor tamaño, ya que al ser un framework incluye bastantes mejoras o características adicionales a lo que sería React puro o con Vite como es mi caso.

#### TailwindCSS

Bueno, una vez inicializado el proyecto me di a la tarea de configurar **TailwindCSS** con la finalidad de utilizar esta librería de CSS para construir más rápidamente la interfaz de gráfica del proyecto y con las clases predefinidas hacer un responsive más simple pero eficiente que con CSS puro.

#### React Router DOM v6

Debido a que el proyecto solicita hacer un formulario que cuente con diferentes pasos, agregué la librería **React Router DOM v6**,debido a que pensé la solución basada en rutas del navegador. Me explicó, el proyecto cuenta con un layout general, pero cada uno de los pasos necesarios son una ruta de página diferente y esas rutas son las que se listan a continuación:

- /your-info
- /select-plan
- /add-ons
- /summary

#### Redux Toolkit

Como consecuencia de desarrollar una solución basada en diferentes rutas, me vi en la necesidad de compartir el estado entre componentes, algo que como bien sabemos en React es un dolor de cabeza cuando se trata de pasar información a componentes que no son hijos directos del componente padre que los envuelve. Aquí es donde entra **Redux Toolkit**, una popular librería que permite generar una **Store** (almacén) generalizado donde se guarda la información de todos los **Slices** previamente creados. De esta manera, se permite acceder a esta **Store** desde cualquier componente del lado del cliente, ya sea, para asignar información a los **reducers** en estos slices o para leer información de los mismos, nuevamente desde cualquier componente del lado del cliente. Permitiendo acceder a información interactiva sin la necesidad de pasar propiedades entre componentes padre - hijo directamente y obteniendo como ventaja la posibilidad de acceder a esa información de manera bilateral, es decir, que un hijo pueda modificar la información a la que accede un padre y viceversa.

#### Formik

Para realizar el primer formulario que tiene un formato más "clásico" por así decirlo, ya que lleva **labels**, **inputs**, **errors**, utilicé **Formik**, una librería open source desarrollada para React y React Native.

Formik destaca por ser:

- Declarativo.
- Intuitivo.
- Adoptable (no usa librerías de manejo de estado externas como redux).

#### Yup

Para llevar a cabo el manejo de errores sin la necesidad de recurrir a la escritura de expresiones regulares complejas, utilicé la librería Yup, la cual en conjunto con formik forman una excelente combinación debido a la facilidad y naturalidad que presenta yup para crear validaciones y mensajes de error personalizados.

#### Vercel

Como mencioné previamente, utilicé Vercel como servicio para compilar y desplegar mi proyecto, ya que, fácilmente puede ponerse a la escucha de los repositorios de Github a los que se les de acceso, esto en combinación git forman una excelente combinación, ya que basta con un git push a la rama main o la principal que hayas seleccionado en vercel para que escuche, y la herramienta automáticamente compilará el código y te asignará un dominio gratuito, opcionalmente como es mi caso se puede agregar un dominio propio que redireccione al servidor de vercel.

#### Github

Bueno, no hay mucho que decir sobre esta herramienta, ya que es bastante conocida por prácticamente todos los desarrolladores, tanto iniciantes como veteranos en este mundo. En lo que respecta a este proyecto, debido a que desarrollé el proyecto por mi cuenta y sin apoyo de terceros, utilicé Github para llevar un control de versiones de mi código más que como una herramienta de colaboración.

#### Cloudflare

En mi caso personal escogí Cloudflare como plataforma dedicada para que gestione mi dominio personal [vicentejorquera.dev](www.vicentejorquera.dev) y así cree un subdominio para mostrar el proyecto, a mi parecer, de una manera más personalizada y seria que utilizando dominios gratuitos.

## Conclusiones

A través de este artículo, he presentado y explicado como he desarrollado, implementado y a grandes rasgos he entregado mi experiencia con el proyecto. Puedo decir que en general estoy satisfecho con el resultado final de esta primera iteración.

La aplicación es funcional, receptiva y cumple con todos los requisitos del desafío. Descubrí algunas cosas, como utilizar Redux Toolkit en React puro (sobre vite), sin la necesidad de crear providers del lado del cliente, ni tener que preocuparme por estar utilizando client components, cosa que si ocurre en NextJS.

Sin embargo, hay algunas áreas en las que podría mejorar mi solución y probablemente lo haré cuando encuentre el tiempo para hacerlo, estas mejoras son las siguientes:

- Diseño, si bien creo que mi frontned se parece bastante al diseño original, hay algunos puntos que encuentro que tienen diferencias, tales como el padding, o el grosor de la fuente, cosas simples que pasé por alto y que puedo corregir dentro de poco.

Si también te interesa desarrollar proyectos de frontend o necesitas una idea full stack con enfoque en el frontend, puedes dirigirte a [FrontendMentor](https://www.frontendmentor.io/)


## Galería de imágenes

- ![Paso 1: Your Info](https://vicentejorquera.s3.amazonaws.com/multi-step-form/step1-user-info.webp)
- ![Paso 1: Your Info active states](https://vicentejorquera.s3.amazonaws.com/multi-step-form/step1-invalid-states.webp)
- ![Paso 2: Select Plan Monthly](https://vicentejorquera.s3.amazonaws.com/multi-step-form/step2-select-plan-monthly.webp)
- ![Paso 2: Select Plan Yearly](https://vicentejorquera.s3.amazonaws.com/multi-step-form/step2-select-plan-yearly.webp)
- ![Paso 3: Add Ons Clean](https://vicentejorquera.s3.amazonaws.com/multi-step-form/step3-addons-clean.webp)
- ![Paso 3: Add Ons Selected](https://vicentejorquera.s3.amazonaws.com/multi-step-form/step3-addons-selected.webp)
- ![Paso 4: Summary](https://vicentejorquera.s3.amazonaws.com/multi-step-form/step4-summary-yearly.webp)
- ![Paso 4: Confirmation](https://vicentejorquera.s3.amazonaws.com/multi-step-form/step4-confirmation.webp)