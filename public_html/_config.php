<?php	
	$ENV = trim(file_get_contents(__DIR__."/../.env"));
	$_CONFIG = $configJson->$ENV;
	$_FRONTPATH = $configFront->$ENV
?>