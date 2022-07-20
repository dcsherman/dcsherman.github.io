<?php
/*	Program name: connect.php
	Location: Valade(2009), p. 216
	Description: connect to SCRAPE database on GREYBANK
*/
$host=”greybank”;
$user=”csherman”;
$passwd=”system”;
$dbname = “SCRAPE”;
$cnx = mysqli_connect($host,$user,$passwd,$dbname)
or die (“Couldn’t connect to server.”);
?>