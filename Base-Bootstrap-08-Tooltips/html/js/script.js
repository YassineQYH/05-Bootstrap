$(function() {

    $('[data-toggle="tooltip"]').tooltip();
})

/* Il va aller chercher tout les éléments qui ont un attribut data-toggle avec l'attribut tooltip et il va les activer avec la fonction tooltip*/



/* Si je met une ID dans mon button */
$(function() {

    $('#special').tooltip();
})

/* On peut mettre des arguments dans les parametres dans la fonction pour changer et faire le toltip on peut aussi le décorer avec le CSS  */