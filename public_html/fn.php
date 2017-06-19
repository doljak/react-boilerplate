<?
	
	if(!function_exists("debugg")){
		function debugg($var){
			echo "<pre>";
			print_r($var);
			echo "</pre>";
		}
	}

	function object($array){
		return json_decode(json_encode($array));
	}

	function selected($me, $whereIAm){
		if(is_array($whereIAm)){
			if(in_array($me, $whereIAm)){
				return 'selected="selected"';
			} else {
				return "";
			}
		} else {
			if($me == $whereIAm){
				return 'selected="selected"';
			} else {
				return "";
			}
		}
		
	}
	
?>