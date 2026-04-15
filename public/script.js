console.log("Hello from the Web App Dev lab!");

$('.ui.rating')
    .rating();

$('.ui.rating').rating({
    onRate: function (value) {
        $('#ratingValue').val(value);
    }
})