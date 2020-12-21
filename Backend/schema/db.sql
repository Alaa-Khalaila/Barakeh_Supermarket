-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema barakeh
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema barakeh
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `barakeh` DEFAULT CHARACTER SET utf8 ;
USE `barakeh` ;

-- -----------------------------------------------------
-- Table `barakeh`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `barakeh`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `phone` INT NOT NULL,
  `role_id` INT NOT NULL DEFAULT 1,
  `is_disable` INT NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `barakeh`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `barakeh`.`orders` (
  `order_id` INT NOT NULL AUTO_INCREMENT,
  `users_id` INT NOT NULL,
  `price` DECIMAL(5,2) NOT NULL,
  `status` VARCHAR(45) NOT NULL DEFAULT 0,
  `comment` MEDIUMTEXT NULL,
  `created_at` DATETIME NOT NULL,
  PRIMARY KEY (`order_id`),
  CONSTRAINT `fk_orders_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `barakeh`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `barakeh`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `barakeh`.`category` (
  `category_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `img_url` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`category_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `barakeh`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `barakeh`.`products` (
  `product_id` INT NOT NULL AUTO_INCREMENT,
  `category_id` INT NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `price` INT NOT NULL,
  `available` INT NOT NULL DEFAULT 1,
  `img_url` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`product_id`),
  CONSTRAINT `fk_products_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `barakeh`.`category` (`category_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `barakeh`.`order_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `barakeh`.`order_products` (
  `orders_id` INT NOT NULL,
  `products_id` INT NOT NULL,
  CONSTRAINT `fk_order_products_orders1`
    FOREIGN KEY (`orders_id`)
    REFERENCES `barakeh`.`orders` (`order_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_order_products_products1`
    FOREIGN KEY (`products_id`)
    REFERENCES `barakeh`.`products` (`product_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
