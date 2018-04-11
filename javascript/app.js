<script src="https://code.jquery.com/jquery-3.3.1.js"></script>


<audio controls src="">


$(document).ready(function () {

        
    // var apiKey = "ce4e82bdd19cc89c06ca6cd31bedc151"
    // var searchLimit = "10"


    // var queryUrl = 'http://api.ispeech.org/api/rest?apikey=' + apiKey + "&q=" + searchInput + "&limit=" + searchLimit

    // $.ajax({
    //     url: queryUrl, 
    //     method: "GET"
    // }).then(function(response) {
    // });


    // dump then 

    $.ajax({ 
        url: 'https://cors-anywhere.herokuapp.com/https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=AIzaSyDVDrFjmbXqxXuGM4oY4Gb8CAxso7ZKFOQ', 
        method: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({
            input: {
            text: "This is a test google is pretty neat. I can read definitions. ",
            },
            voice: {
            languageCode: 'en-US',
            name: "en-US-Wavenet-D"
            },
            audioConfig: {
            audioEncoding: 'MP3'
            }
        })
    }).then(function(res) { 
        
        console.log(res) 

        console.log('data:audio/mp3;base64,' + res.audioContent);
    $('audio').attr('src', 'data:audio/mp3;base64,' + res.audioContent);

    });
});