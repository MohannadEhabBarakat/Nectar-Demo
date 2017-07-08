<?php 
session_start();
if (isset($_SESSION["al"])){

$h= $_GET["h"];
$p= $_GET["p"];
$id= $_GET["id"];
 

// Load the HTML document
$dom = new DOMDocument;

$dom->validateOnParse = true;

// we want a nice output
$dom->formatOutput = true;
libxml_use_internal_errors(true);
$dom->loadHtmlFile( 'About.html');

$h3 = $dom->getElementById($id)->getElementsByTagName('h3')->item(0);
$par = $dom->getElementById($id)->getElementsByTagName('p')->item(0);

$h3->nodeValue = $h;
$par->nodeValue = $p;

echo 'Wrote: ' . $dom->saveHTMLFile("About.html") . ' bytes';
echo ("ya rab :)".$h3);
libxml_clear_errors();
    }else{
    echo ("ya rab :) adkol");
}
?>

