//Filters
var Filters = {};

//invertFilter function to return source data
Filters.invertFilter = function(source) {
    console.log("invert Filter running");
    var imgData = source.getImageData(0, 0, canvas.width, canvas.height);
 
    // loop through all pixels and invert them
        for (var x = 0; x < canvas.width; x++) {
    
		for (var y = 0; y < canvas.height; y++) {
		   var p = (y * canvas.width + x) * 4;
			// invert the red, green and blue values 
			imgData.data[p] = 255 - imgData.data[p]
			imgData.data[p + 1] = 255 - imgData.data[p + 1];
			imgData.data[p + 2] = 255 - imgData.data[p + 2];
		}
    }
    return imgData;
}

//Grayscale function to return source data
Filters.grayScaleFilter = function(source) {
    console.log("grayScale Filter running");
    console.log("Canvas.width: "  + canvas.width);
 
    var imgData = source.getImageData(0, 0, canvas.width, canvas.height);
 
    // loop through all pixels and invert them
	   for (var x = 0; x < canvas.width; x++) {

		for (var y = 0; y < canvas.height; y++) {
			var p = (y * canvas.width + x) * 4;
			// retrieve the red, green and blue values 
			var r  = imgData.data[p];
			var g = imgData.data[p + 1];
			var b = imgData.data[p + 2];

			// CIE luminance for the RGB
			// The human eye is bad at seeing red and blue, so we de-emphasize them.
			var v = 0.2126*r + 0.7152*g + 0.0722*b;
			imgData.data[p] =   v;
			imgData.data[p+1] = v;
			imgData.data[p+2] = v;
		}
    }
    return imgData;
}