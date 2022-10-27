function onClick(){
var container = document.getElementById('output');

var words = {
pronoun : ['He','She','It'],
verb : ['jumps','laughs','flies'],
adverb : ['high','loudly','quickly'],
special_event : ['wedding', 'funeral', 'birthday', 'party']
};

function random( type ){
        rando = Math.floor(Math.random() * words[type].length);
        word = words[type][rando];
        return word;
     }

var pronoun = random('pronoun');
var verb = random('verb');
var adverb = random('adverb');
var special_event = random('special_event');

var sentence = "<p> " + pronoun + " " + verb + " " + adverb + " during the " + special_event + ". </p>";
container.innerHTML = sentence;
}