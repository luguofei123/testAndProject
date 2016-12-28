<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

// some code

?>


$rs = mysql_query('select * from users');
$result = array();
while($row = mysql_fetch_object($rs)){
	array_push($result, $row);
}
 
echo json_encode("$result");