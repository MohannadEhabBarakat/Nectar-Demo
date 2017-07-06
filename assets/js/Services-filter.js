function filterfunc(){
        var show = document.getElementsByClassName("all");
                     for(var i =0, il = show.length;i<il;i++){
                            show[i].style.display="none";
                     }
        var filtervar ='';
        if (document.getElementById('junior').checked || document.getElementById('juniorar').checked) {
                filtervar += ' junior';
                }
        if (document.getElementById('senior').checked || document.getElementById('seniorar').checked) {
                filtervar += ' senior';
                }
        if (document.getElementById('both').checked || document.getElementById('bothar').checked) {
                filtervar += ' both';
                }
        if (document.getElementById('all').checked || document.getElementById('allar').checked) {
                filtervar += ' all';
                }
        
        if (document.getElementById('STP').checked || document.getElementById('STPar').checked) {
                filtervar += ' STP';
                }
        if (document.getElementById('Nanotechnology').checked || document.getElementById('Nanotechnologyar').checked) {
                filtervar += ' Nanotechnology';
                }
        if (document.getElementById('Entrepreneurship').checked || document.getElementById('Entrepreneurshipar').checked) {
                filtervar += ' Entrepreneurship';
                }
        if (document.getElementById('Astronomy').checked || document.getElementById('Astronomyar').checked) {
                filtervar += ' Astronomy';
                }
        if (document.getElementById('STEM').checked || document.getElementById('STEMar').checked) {
                filtervar += ' STEM';
                }
        if (document.getElementById('SEF').checked || document.getElementById('SEFar').checked) {
                filtervar += ' SEF';
                }
        if (document.getElementById('allcat').checked || document.getElementById('allcatar').checked) {
                filtervar += ' all';
                }
    
        
        if (document.getElementById('Default').checked || document.getElementById('Defaultar').checked) {
                filtervar += ' Default';
                }
        if (document.getElementById('Rank4').checked || document.getElementById('Rank4ar').checked) {
                filtervar += ' four';
                }
        if (document.getElementById('Rank3').checked || document.getElementById('Rank3ar').checked) {
                filtervar += ' three';
                }
        if (document.getElementById('Rank2').checked || document.getElementById('Rank2ar').checked) {
                filtervar += ' two';
                }
        var show = document.getElementsByClassName(filtervar);
                     for(var i =0, il = show.length;i<il;i++){
                            show[i].style.display="block";
                     }             }