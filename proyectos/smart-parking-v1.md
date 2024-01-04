---
title: Sistema de administración de estacionamientos - Smart parking
publishedAt: 2024-01-03
author: Vicente Jorquera
description: Este proyecto fue desarrollado por Vicente Jorquera durante sus inicios en el desarrollo de software como parte de la ruta disponible en FrontendMentor
coverImage: https://images.unsplash.com/photo-1621929747188-0b4dc28498d2?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

# Sistema de administración y organización de lugares y plazas de estacionamientos - Smart Parking

- Vicente Jorquera
- Enero 03, 2024

![HERO IMAGE](https://images.unsplash.com/photo-1621929747188-0b4dc28498d2?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

##### Este proyecto consiste en el planteamiento, investigación e identificación de carencias en plazas de estacionamiento en la ciudad de Curicó, Chile y posterior desarrollo de una solución de software. Concretamente como grupo de trabajo junto a dos compañeros de universidad, [Matías Lagos](https://www.linkedin.com/in/mat%C3%ADas-lagos-b3b46b234/) y [René Pérez](https://www.google.com/) todos estudiantes de Ingeniería en Informática, utilizamos como lugar de pruebas la sede INACAP Curicó en la cual estudiamos, donde por lo general se provocan embotellamientos debido a la cantidad de lugares de estacionamientos disponibles frente a la demanda actual y el tiempo de respuesta del personal en identificar los lugares disponibles para cada área correspondiente.

- [Ir al repositorio](https://github.com/VicenteJ20/estacionamiento-inteligente-cliente)

## Definiendo la problemática

Como mencioné en párrafo anterior ocurren embotellamientos en la entrada y salida del establecimiento, esto a raíz de que los lugares de estacionamiento disponibles y asignados a cada área, son límitados y no hacen frente a la demanda actual, a este problema hay que agregar la lentitud en la identificación de lugares disponibles por cada área que toma al personal debido al tamaño del lugar del establecimiento.

## Solución planteada

Mediante el uso de sensores ultrasónicos de proximidad [HC-SR04](https://www.hwlibre.com/hc-sr04/), [Arduino UNO](https://arduino.cl/arduino-uno/) y [Raspberry Pi 3 o superior](https://www.raspberrypi.com/) se propone generar una infraestructura a nivel local con la cual identificar el estado de cada uno los lugares de la plaza de estacionamiento, de la siguiente manera:

Utilizando un sensor **HC-SR04** por cada lugar de estacionamiento se busca detectar si existe o no un objeto a determinada altura, esto con el fin de evitar lecturas fallidas y considerar como **disponible** u **ocupado** el lugar de estacionamiento en función de la información entregada por el sensor a la placa **Arduino UNO**.

Es aquí donde viene la segunda parte, esta placa **Arduino UNO** la cual puede ser fácilmente reemplazada por una Raspberry Pi Pico Wireless en función de ahorras costos debido a que esta última es considerablemente más barata que el Arduino. Continuando con la explicación, las placas **Arduino UNO/Pi Pico Wireless** se consideran como el identificador de área. Para dar contexto, INACAP Curicó utiliza un sistema de áreas con el cual está distribuido el estacionamiento, destacándose la sección de docentes, estudiantes, visitas y administrativos. Para cada una de estas áreas se requiere al menos una placa **Arduino Uno** esto con la finalidad de que todos los sensores conectados a esta placa sean asociados al área a la cual fue asignada.

La parte final y no menos importante es el uso de la **Raspberry PI**, esta actuará como servidor local que se encargar la procesar la información recibida de todas las placas **Arduino UNO/Pi Pico** la cual será enviada a un servidor en la nube de [Amazon AWS](https://aws.amazon.com/es/?nc2=h_lg) donde está alojada el resto de la infraestructura, la cual será mencionada más adelante en este post. Es importante el uso de la Raspberry PI, ya que nos permite, a bajo coste energético y monetarios tener un servidor local con capacidades de expansión o mejor dicho, escalabilidad y la posibilidad de expandirse según el cliente lo necesite, ya sea, agregando una Raspberry PI adicional al clúster o removiendo las sobrantes según sea necesario.

### Topología de la infraestructura local

![Diagrama de interacción topología local](/proyectos/smart-parking/topologia-local.webp)

### Topología de la infraestructura cloud

![Diagrama de topología en nube de AWS](https://imagenes-portafolio-personal.s3.amazonaws.com/proyectos/smart-parking-v1/topologia-cloud.webp)

En cuanto a esta topología, debido a los costes de la misma y a lo que la institución nos otorgó para llevar a cabo el proyecto, debimos modificar esta infraestructura, conteniendo las 3 máquinas EC2 en solo una, teniendo así el servidor web de la app cliente y las APIs hosteadas en la misma máquina, eso sí, utilizando una AMI t4g con 2 núcleos y 8gb de RAM que es más que suficiente para la carga de trabajo que se le daría en la demostración.

## Aplicación cliente

Para agilizar el proceso de administración de las distintas plazas de estacionamiento, no basta únicamente con crear una arquitectura eficiente y modernizar los lugares de estacionamiento con IoT (Internet Of Things), también es necesario permitir que usuarios que pertenecen al área de TI, tal como los guardias que se encargan de administrar el estacionamiento sean capaces de entender y visualizar de forma rápida el estado del estacionamiento por cada área, intentando así reducir el embotellamiento y mejor el tiempo de respuesta transcurrido cada que llega un nuevo individuo que requiere un lugar para estacionarse.

#### Para cumplir con esto, desarrollamos una aplicación web que consta de lo siguiente:

- Gestión de usuarios.
- Gestión de lugares de estacionamiento.
- Gestión de plazas de estacionamiento.
- Vistas para la toma de decisiones (en desarrollo).
- Rutas protegidas (Autenticación).
- Rutas protegidas (Autorización - en desarrollo).
- Diseño responsive (en desarrollo - solo desktop de momento)

### Tecnologías utilizadas

En cuanto a las tecnologías que utilizamos para desarrollar la app cliente y las Apis se encuentra lo siguiente:

#### APIs

- NextJS 14
- TypeScript
- Prisma
- Mongoose
- NextAuth

#### Vistas de la app

- NextJS 14
- TypeScript
- ReactJS
- TailwindCSS


A continuación, se encuentra una galería de imágenes de la app en funcionamiento, debido a que el proyecto fue desarrollado y hosteado en un servidor de AWS con una cuenta asociada a la universidad, no está disponible 24/7 para que cualquier persona pueda acceder, de ahí, que no esté disponible el botón de visualizar sitio web, sin embargo su código fuente está disponible para ser visto en Github, haciendo click en el botón al inicio de la página o en el siguiente link:
[https://github.com/VicenteJ20/estacionamiento-inteligente-cliente](https://github.com/VicenteJ20/estacionamiento-inteligente-cliente)

## Galería de imagenes
 
- ![Landing Page](https://imagenes-portafolio-personal.s3.amazonaws.com/proyectos/smart-parking-v1/landing-parking.webp)
- ![Dashboard Login](https://imagenes-portafolio-personal.s3.amazonaws.com/proyectos/smart-parking-v1/login-parking.webp)
- ![Dashboard Home](https://imagenes-portafolio-personal.s3.amazonaws.com/proyectos/smart-parking-v1/dashboard-home.webp)
- ![Dashboard Lugares](https://imagenes-portafolio-personal.s3.amazonaws.com/proyectos/smart-parking-v1/dashboard-lugares.webp)
- ![Dashboard Areas](https://imagenes-portafolio-personal.s3.amazonaws.com/proyectos/smart-parking-v1/dashboard-areas.webp)
- ![Dashboard Placas](https://imagenes-portafolio-personal.s3.amazonaws.com/proyectos/smart-parking-v1/dashboard-placas.webp)
- ![Dashboard Personal](https://imagenes-portafolio-personal.s3.amazonaws.com/proyectos/smart-parking-v1/dashboard-personal.webp)