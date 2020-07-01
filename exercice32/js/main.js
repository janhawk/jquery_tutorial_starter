$(".btn").click(function(){   
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/name/france',
        success: function(data) {
            console.log('#2');
            console.log('name', data[0].name);
            console.log('capital', data[0].capital);
        }
});
});