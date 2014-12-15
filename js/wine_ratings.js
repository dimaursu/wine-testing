$(document).ready(function(){
    if ($('#ratingBase').length !== 0) {
        // ratingTitle - id for the title
        $('#ratingTitle').prepend(wine_prop);

        Object.keys(props).map(function(type){

            props[type].map(function(el){
                var dom_element = '<label class="btn btn-primary btn-lg btn-wine ' + type + '">' +
                    '<input type="checkbox" autocomplete="off">' + el + '</label>';
                $('#ratingBase').append(dom_element);
            });
        });
    }
});

