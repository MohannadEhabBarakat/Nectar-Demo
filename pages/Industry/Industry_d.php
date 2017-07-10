<?php 
session_start();
if (isset($_SESSION["al"])){
    
$e= $_GET["e"];
$max= $_GET["max"];

// Load the HTML document
$dom = new DOMDocument;

$dom->validateOnParse = true;

// we want a nice output
$dom->formatOutput = true;
libxml_use_internal_errors(true);
$dom->loadHtmlFile( 'Industry.html');

$l = $dom->getElementById($e);

$parent=$dom->getElementById($max);
$parent->removeChild($l);


// Save the resulting HTML
echo 'Wrote: ' . $dom->saveHTMLFile("Industry.html") . ' bytes';
echo ("ya rab :) e".$e." max".$max);
libxml_clear_errors();
}else{
    echo ("ya rab :) adkol");
}
?>