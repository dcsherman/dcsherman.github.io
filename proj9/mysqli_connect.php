<?php
DEFINE ('DB_USER', 'csherman');
DEFINE ('DB_PASSWORD', 'system');
DEFINE ('DB_HOST', 'divisionst');
DEFINE ('DB_NAME', 'Contacts');
$dbcon = @mysqli_connect (BD_HOST, DB_USER, DB_PASSWORD, DB_NAME) OR die ('Could not connect to MySQL: ' . mysqli_connect_error() );
mysqli_set_charset($dbcon, 'utf8');
?>

<!--
	CREATE DATABASE Contacts
	GRANT ALL ON Contacts.* TO 'csherman' IDENTIFIED BY 'system'
	CREATE TABLE names(
		name_id MEDIUMINT (6) UNSIGNED AUTO_INCREMENT,
		fname VARCHAR(30) NOT NULL,
		lname VARCHAR(40) NOT NULL,
		sort (BUSINESS, PERSONAL, FAMILY, ) ,
		PRIMARY KEY (name_id),
	);
	CREATE TABLE social(
		social_id ,
		FOREIGN KEY (social_id) REFERENCES names(name_id) ON DELETE CASCADE
		email VARCHAR(50) NOT NULL,
		twitter VARCHAR(50) NOT NULL,
		linkedin VARCHAR(50) NOT NULL,
		facebook VARCHAR(50) NOT NULL,
	);
	CREATE TABLE phone(
		phone_id ,
		FOREIGN KEY (phone_id) REFERENCES names(name_id) ON DELETE CASCADE
		number ,
		sort (HOM, CEL, FAX, ) ,
	);
-->

