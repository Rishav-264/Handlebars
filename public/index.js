var cast = {
    "characters":[
        {
            "name":"Jon Snow",
            "shortCode":"jon-snow.jpg",
            "actor":"Kit Harrington",
            "house":"Stark",
            "location":"The Wall"
        },
        {
            "name":"Tyrion Lannister",
            "shortCode":"tyrion-lannister.jpg",
            "actor":"Peter Dinklage",
            "house":"Lannister",
            "location":"King's Landing"
        },
        {
            "name":"Danaerys Targaryan",
            "shortCode":"khaleesi.jpg",
            "actor":"Emilia Clarke",
            "house":"Targaryan",
            "location":"Meereen"
        },
        {
            "name":"Robb Stark",
            "shortCode":"robb-stark.jpg",
            "actor":"Richard Madden",
            "house":"Stark",
            "location":false
        },
        {
            "name":"Jaime Lannister",
            "shortCode":"jaime-lannister.jpg",
            "actor":"Something Walder-Something",
            "house":"Lannister",
            "location":false
        }
    ]
}

$('document').ready(function(){
    alert("Function entered");
    var characterTemplate = $('#character-template').html();
    var compiledCharacterTemplate = Handlebars.compile(characterTemplate);
    $('.character-container').html(compiledCharacterTemplate(cast));
})