(function($){
	$.fn.facebookAlbumPhotos = function(options) {
		var settings = $.extend(options);
		return this.each(function() {
			var albumID = settings.albumURL.replace(/.*(a\.)([0-9]+).*/,"$2");
			var photoLimit = settings.limit||10;
			var target = $(this);
			var imgStyle = settings.CSS||'';
			var imgSizes = {'original':1,'huge':2,'x-large':3,'large':4,'medium':5,'small':6,'x-small':7};
			var imgSize = imgSizes[settings.imgSize]||5;
			$.getJSON('https://graph.facebook.com/'+albumID+'/photos?callback=?',function(json,status,xhr){
				if(json.data.length<photoLimit) {
					photoLimit = json.data.length;
				}
				target.html('');
				for(i=json.data.length-1;i>=json.data.length-photoLimit;i--) {
					target.append("<img src='"+json.data[i].images[imgSize].source+"' alt='Slideshow image' style='"+imgStyle+"'/>");
				}
			});
		});
	};
})( jQuery );