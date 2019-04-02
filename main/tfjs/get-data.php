<?php
include '../main/url/koneksi.php';

$query = mysqli_query($conn, "SELECT * FROM `r-linear`");
$i=0;

if (!$query) {
	die ('SQL Error: ' . mysqli_error($conn));
}

while ($row = mysqli_fetch_array($query))
{
	$x[] = number_format($row['x'])/100;
	$y[] = number_format($row['y']);
}

  echo '<script>';
  echo 'var x = ' . json_encode($x, JSON_NUMERIC_CHECK) . ';';
  echo '</script>';

	echo '<script>';
  echo 'var y = ' . json_encode($y, JSON_NUMERIC_CHECK) . ';';
  echo '</script>';


mysqli_free_result($query);
mysqli_close($conn);
