DROP DATABASE/SCHEMA IF EXISTS sayna;
CREATE DATABASE sayna;
use sayna;
CREATE TABLE IF NOT EXISTS contact(`id` int AUTO_INCREMENT, `fname` varchar(20) not null, `lname` varchar(15) not null, `avis` varchar(200) not null, `Note` int(1) not null, `formation` varchar(10) not null,PRIMARY KEY (`id`), UNIQUE INDEX `id` (`id` ASC));