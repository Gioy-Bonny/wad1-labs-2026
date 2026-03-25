console.log("Hello from the Web App Dev lab!");

$('.ui.rating')
    .rating();

function setRating(){
    $('.ui.rating').rating('setting', 'onRate')
}