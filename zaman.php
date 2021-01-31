<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<?php
	$saat=5;

if ($saat>6 and $saat<10) {
    echo "Günaydın";
} elseif ($saat>10 and $saat<17) {
    echo "İyi Günler";
}
elseif ($saat>17 and $saat<20) {
    echo "İyi Akşamlar";
}
elseif ($saat>20 and $saat<00) {
    echo "İyi Geceler";
}
elseif ($saat>0 and $saat<6) {
    echo "Esenlikler Dilerim";
} else {
    echo "Yanlış saat dilimi girdiniz!!!";
}
?>

</body>
</html>