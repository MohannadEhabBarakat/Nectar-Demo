function speedup(section){
    location.href='#'+section;
    a="if"+section;
    document.getElementById(a).src="/pages/"+section+"/"+section+".html";
    console.log("/pages/"+section+"/"+section+".html");
};