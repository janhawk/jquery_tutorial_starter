$(".btn").click(function(){   
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/name/france',
        success: function(data) {
            console.log('#2');
            console.log('name', data[0].name);
            console.log('capital', data[0].capital);

            $('#country').text(data[0].name); // to inject the answer country and capital!
            $('#capital').text(data[0].capital);
        }
});
});