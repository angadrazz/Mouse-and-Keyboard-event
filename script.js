var outerDiv = document.getElementById('outer');

outerDiv.addEventListener('mouseover', function(){
    console.log('Mouse over pointer');
});

outer.addEventListener('mouseout', function(){
    console.log('Mouse out ');
});


outerDiv.addEventListener('mouseenter', function() {
    console.log('Mouse enter ');
});

var search = document.getElementById('search');

search.addEventListener('keypress', function() {
    console.log('this event is key pressed');
});

search.addEventListener('keydown', function() {
    console.log("this event is key down");
});

search.addEventListener('keyup', function() {
    console.log('this is a key up event');
})