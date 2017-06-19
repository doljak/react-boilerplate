<?php
		
	include_once(__DIR__."/fn.php");

	$configJson = json_decode(file_get_contents(__DIR__."/../_config.json"));
	$configFront = json_decode(file_get_contents(__DIR__."/../_configFront.json"));
	include_once(__DIR__."/_config.php");

	$start = (isset($_GET['start'])) ? $_GET['start'] : 0 ;
	$rows = (isset($_GET['rows'])) ? $_GET['rows'] : 10 ;

	/*
	Comentado porq nao esta usando enquanto é só front
	include_once(__DIR__."/_classes/Utils.publicador.class.php");
	$Utils = new Utils();

	include_once($_CONFIG->projectPath."/_classes/SolrQuery.class.php");
	$Solr = new SolrQuery($_CONFIG->_solr);
	*/

?>