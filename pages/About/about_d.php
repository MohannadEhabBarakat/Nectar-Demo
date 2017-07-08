<?php 
session_start();
if (isset($_SESSION["al"])){
//if (isset($_GET["e"]) &&  isset($_GET["max"]))  
//{    
    $e= $_GET["e"];
    $max= $_GET["max"];
//}    
 

// Load the HTML document
$dom = new DOMDocument;

$dom->validateOnParse = true;

// we want a nice output
$dom->formatOutput = true;
libxml_use_internal_errors(true);
$dom->loadHtmlFile( 'About.html');

$div = $dom->getElementById($e);
$num=(int)(substr($e,1));

$parent=$dom->getElementById($max);

$hdiv = $dom->getElementById($e[0].($num+1));

$parent->removeChild($div);
$parent->removeChild($hdiv);

// Save the resulting HTML
echo 'Wrote: ' . $dom->saveHTMLFile("About.html") . ' bytes';
echo ("ya rab :)");
libxml_clear_errors();
}else{
    echo ("ya rab :) adkol");
}
?>