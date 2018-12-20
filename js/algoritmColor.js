var input = {
    "image": "data://C:/img/3210004.jpg"
};
Algorithmia.client("simgix6JvqMVB68I0c7gdZZhpLl1")
    .algo("deeplearning/ColorfulImageColorization/1.1.13")
    .pipe(input)
    .then(function(output) {
        console.log(output);
    });