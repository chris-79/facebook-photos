(function($){
	$.fn.facebookAlbumPhotos = function(options) {
		var settings = $.extend(options);
		return this.each(function() {
			var albumID = settings.albumURL.replace(/.*(a\.)([0-9]+).*/,"$2");
			var photoLimit = settings.limit||10;
			var url = "https://graph.facebook.com/"+albumID+"/photos";
			var target = $(this);
			var imgStyle = settings.CSS||'';
			var imgSizes = {'original':1,'huge':2,'x-large':3,'large':4,'medium':5,'small':6,'x-small':7};
			var imgSize = imgSizes[settings.imgSize]||5;
			$.getJSON(url, function success(result) {
				target.html('');
				var limit = settings.photoLimit;
				if(result.data.length<limit) {
					limit = result.data.length;
				}
				for(i=(result.data.length-1);i>=(result.data.length-limit);i--) {
					var image = result.data[i]['images'][imgSize]['source'];
					var altTxt = (result.data[i]['place']['name']==="") ? "Slideshow image" : "Photo from "+result.data[i]['place']['name'];
					var img = "<img src='"+image+"' alt='"+altTxt+"' style='"+imgStyle+"'/>";
					target.append(img);
				}
			});
		});
	};
})( jQuery );