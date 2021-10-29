CREATE DATABASE IF NOT EXISTS `lingual` CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
USE `lingual`;

CREATE TABLE IF NOT EXISTS `components`(
	`id` VARCHAR(256) NOT NULL,
	`component` VARCHAR(256) NOT NULL,
	`reading` VARCHAR(256),
	`language` VARCHAR(6) CHARACTER SET ascii COLLATE ascii_bin DEFAULT 'en-US',
	`types` TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL, -- Array type
	`pronunciations` TEXT NOT NULL, -- Array type
	`translations` TEXT NOT NULL, -- JSON type
	`definitions` TEXT NOT NULL, -- JSON Type
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `languages`(
	`code` VARCHAR(6) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
	`chars` TEXT NOT NULL, -- Array type
	`api` TEXT NOT NULL, -- Array type
	`types` TEXT NOT NULL, -- Array type
	PRIMARY KEY (`code`)
);

CREATE TABLE IF NOT EXISTS `links`(
	`link` VARCHAR(512) NOT NULL, -- String type
	`language` VARCHAR(6) CHARACTER SET ascii COLLATE ascii_bin DEFAULT 'en-US',
	`pronunciations` TEXT NOT NULL, -- Array type
	PRIMARY KEY (`link`) 
);