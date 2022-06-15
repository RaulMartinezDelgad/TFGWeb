-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-06-2022 a las 22:29:14
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `walacoc`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coches`
--

CREATE TABLE `coches` (
  `id` bigint(20) NOT NULL,
  `marca` varchar(255) DEFAULT NULL,
  `modelo` varchar(255) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `publicado` bit(1) DEFAULT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `precio_carrito` int(11) DEFAULT NULL,
  `fav` varchar(1) DEFAULT '0',
  `nombre` varchar(255) DEFAULT NULL,
  `subtotal` int(11) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `coches`
--

INSERT INTO `coches` (`id`, `marca`, `modelo`, `precio`, `descripcion`, `publicado`, `titulo`, `cantidad`, `precio_carrito`, `fav`, `nombre`, `subtotal`, `url`) VALUES
(4, 'sdasdas', 'asddas', 39, NULL, NULL, NULL, NULL, NULL, '0', NULL, NULL, NULL),
(5, 'audi', 'klsndal', 98, NULL, NULL, NULL, NULL, NULL, '0', NULL, NULL, NULL),
(15, 'Pepe', NULL, 34, 'ww', NULL, NULL, 3, 100, '0', NULL, 100, 'https://www.diariomotor.com/noticia/momento-comprar-coche-es-este-2021-aumenta-precio/'),
(16, '', 'asdasdas', 123, NULL, NULL, NULL, NULL, NULL, '0', NULL, NULL, NULL),
(17, 'sdasdas', '342', 345555, NULL, NULL, NULL, NULL, NULL, '0', NULL, NULL, NULL),
(18, 'sdfsdfsd', 'fsdfsdfds', 123342, NULL, NULL, NULL, NULL, NULL, '0', NULL, NULL, NULL),
(19, 'ferrraerararar', 'asdasdas', 123123, NULL, NULL, NULL, NULL, NULL, '0', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` bigint(20) NOT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `precio_carrito` double DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `fav` bit(1) DEFAULT b'0',
  `nombre` varchar(255) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `subtotal` double DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `cantidad`, `precio_carrito`, `descripcion`, `fav`, `nombre`, `precio`, `subtotal`, `url`) VALUES
(9, 1, NULL, 'El Ford Galaxy Híbrido es uno de los pocos modelos monovolumen del mercado, contando ahora con una inteligente mecánica híbrida con casi 200 CV de potencia.', b'0', 'Ford Galaxy Híbrido', 49.661, 49.661, 'https://d1eip2zddc2vdv.cloudfront.net/dphotos/750x400/15341922-1612297668.jpeg'),
(10, 2, NULL, 'El Active es la versión crossover del Ford Fiesta. De estética aventurera, con carrocería elevada y molduras de plástico de aspecto campero, el Fiesta Active gana bastante estéticamente al ser un poco más alto y también hace más cómodo el acceso.', b'0', 'Ford Fiesta Active', 22.456, 44.912, 'https://d1eip2zddc2vdv.cloudfront.net/dphotos/750x400/21211784-1641920520.jpeg'),
(11, 1, NULL, 'El Ford Mustang 2018 representa el renacer del icono cinematográfico americano como producto global. Desde su lanzamiento en Europa en 2015 ha sido un éxito y ahora con la renovación esperan mejorar todavía más las cifras.', b'0', 'Ford Mustang', 59.731, NULL, 'https://d1eip2zddc2vdv.cloudfront.net/dphotos/750x400/19283-1528191011.jpg'),
(12, 1, NULL, 'El Audi A1 Sportback llegó al mercado en 2019 como segunda generación del coche más pequeño de la marca. El principal cambio es que solamente se ofrece la carrocería de cinco puertas, eliminando la de tres puertas del Audi A1 \"a secas\".', b'0', 'Audi A1 Sportback 25 Tfsi Advanced', 24.809, NULL, 'https://images.coches.com/_vn_/audi/A1-Sportback-40-TFSI-S-Line-2018/audi_a1-sportback-40-tfsi-s-line-2018_r15.jpg?p=cc_vn_high'),
(13, 1, NULL, 'Llegó al mercado a finales de 2020 con el mismo esquema mecánico que utilizan otros modelos del grupo y presume con la etiqueta Cero de la DGT y los beneficios que implica.', b'0', 'Audi A3 Sportback Híbrido', 38.587, NULL, 'https://img.remediosdigitales.com/ab62fd/audi-a3-sportback-40-tfsie-2020-007/1366_2000.jpg'),
(14, 1, NULL, 'El Audi Q2 es el SUV más pequeño de la firma alemana. En 2021 llegó al mercado la actualización del modelo original, lanzado en 2016.', b'0', 'Audi Q2 35 Tfsi Advanced 110kw', 33.829, NULL, 'https://cdn.drivek.it/configurator-covermobile/cars/es/500/AUDI/Q2/40249_SUV-5-DOORS/audi-q2-2020-mobile.jpg'),
(15, 1, NULL, 'El Toyota Corolla es un coche mediano que se ofrece con cinco niveles de equipamiento y dos mecánicas híbridas de gasolina con potencias de 125 y 180 CV.', b'0', 'Toyota Corolla', 27.35, NULL, 'https://www.autobild.es/sites/autobild.es/public/dc/fotos/Toyota_Corolla_04_0.jpg'),
(16, 1, NULL, 'El Toyota Corolla Sedán es una de las pocas alternativas con carrocería sedán que quedan en el mercado de las berlinas medianas.', b'0', 'Toyota Corolla Sedán', 26.55, NULL, 'https://www.diariomotor.com/imagenes/2020/07/toyota-corolla-sedan-gr-sport-p.jpg'),
(17, 2, NULL, 'El Toyota GR Supra es un deportivo con carrocería coupé de 4,38 metros de longitud con 2 puertas y biplaza, que fue presentado en 2019 y con una ligera actualización en 2021.', b'0', 'Toyota GR Supra ', 50.56, 101.12, 'https://images.prismic.io/carwow/0519759e-2734-4490-88f2-d6acf8562bfe_toyota-gr-supra-amarillo-frontal-lateral-din%C3%A1mica.jpg?fit=clip&q=60&w=750&cs=tinysrgb&auto=format');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'ROLE_USER'),
(2, 'ROLE_ADMIN');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tutoriales`
--

CREATE TABLE `tutoriales` (
  `id` bigint(20) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `publicado` bit(1) DEFAULT NULL,
  `titulo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tutoriales`
--

INSERT INTO `tutoriales` (`id`, `descripcion`, `publicado`, `titulo`) VALUES
(2, '', b'0', ''),
(3, '', b'0', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(120) DEFAULT NULL,
  `username` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `username`) VALUES
(1, 'klnblkjnbilkbn@gmail.com', '$2a$10$8x99EdOfmw0rzmM82NhIX.nsoowgOyq5hLpauxVxQqvREopatzXJm', 'khcfvkjhvckjv u'),
(2, 'a@a', '$2a$10$v9wag8RkfjrFlLrqrlzqIufWR6bPR324H0E4.5xfFHxB1wUA.3wjS', 'aaa'),
(3, 'manolo@gmail.com', '$2a$10$79e5bOdf1O9eSzgqvCDhOuKIkW3w/6ITafiDjOWP1XDl4kf1F/Zaq', 'manolo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `role_id`) VALUES
(1, 2),
(2, 1),
(3, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `coches`
--
ALTER TABLE `coches`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tutoriales`
--
ALTER TABLE `tutoriales`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`),
  ADD UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`);

--
-- Indices de la tabla `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `FKh8ciramu9cc9q3qcqiv4ue8a6` (`role_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `FKh8ciramu9cc9q3qcqiv4ue8a6` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `FKhfh9dx7w3ubf1co1vdev94g3f` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
