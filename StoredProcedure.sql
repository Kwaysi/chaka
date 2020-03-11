CREATE TABLE `merchants` (
  `id` int(50) NOT NULL,
  `name` tinytext NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `user` (
  `id` BINARY(16) PRIMARY KEY,
  `name` tinytext NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `stock` (
  `id` int(50) NOT NULL,
  `name` tinytext NOT NULL,
  `quantity` int(10) NOT NULL,
  `unit_price` int(10) NOT NULL,
  `merchant` int UNSIGNED NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE `stock` ADD CONSTRAINT fk_merchants FOREIGN KEY (`merchant`) REFERENCES merchants(id);

DELIMITER //

CREATE PROCEDURE `filterStockTable` (merchantId int, userId varchar) 
BEGIN
  SELECT
    *
  FROM stock
  WHERE
    merchant = merchantId
    and user = userId
  ORDER BY
    date DESC
END //