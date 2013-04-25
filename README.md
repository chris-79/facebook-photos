# Facebook Album Photos (jQuery)

This just dumps a set of photos from a [Facebook](http://facebook.com) album into an html object.

## Options

* **albumURL** (required): full URL to a  Facebook Album
* **limit**: limit to the last X photos (default: 10)
* **CSS**: CSS styles to apply to every image
* **imgSize**: size of the image (default: medium)
	* original
	* huge
	* x-large
	* large
	* medium
	* small
	* x-small

For more information on image sizes, check out the [Facebook Graph Photos API](https://developers.facebook.com/docs/reference/api/photo/).

## Example

[Play around with it on jsFiddle](http://jsfiddle.net/chris79/cEN9v/2/)

	$("#slideshow a").facebookAlbumPhotos({
		'albumURL': 'https://www.facebook.com/media/set/?set=a.451566814872131.116852.266818906680257',
		'limit': '6',
		'CSS': 'opacity:0;',
		'imgSize': 'huge'
	});
