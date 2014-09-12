
(function() {
	'use strict';

	var URLs = {},
		CONTEXT;

	URLs.readme = 'https://api.github.com/repos/doc-metrix/data-types/contents/README.md';
	URLs.markdown = 'https://api.github.com/markdown';

	CONTEXT = 'doc-metrix/data-types';

	getResource( URLs.readme, onReadme );

	// FUNCTIONS //

	/**
	* FUNCTION: getResource( url, clbk )
	*	Fetches a resource from a provided URL and returns the result to a provided callback.
	*
	* @private
	* @param {String} url - resource location
	* @param {Function} clbk - callback to invoke upon resource receipt. Function should accept one input argument: [ result ]
	*/
	function getResource( url, clbk ) {
		var xhr;
		if ( url && clbk ) {
			// Create a new request object:
			xhr = new XMLHttpRequest();

			// Open the request connection:
			xhr.open( 'GET', url );

			// Define the state change callback:
			xhr.onreadystatechange = function () {
				if ( xhr.readyState != 4 || xhr.status != 200 ){
					return;
				}
				clbk( xhr.responseText );
			};
			// Send the request:
			xhr.send();
		} // end IF (parameters)
	} // end FUNCTION getResource()

	/**
	* FUNCTION: postResource( url, data, clbk )
	*	Post data to a resource at a provided URL and return the response to a provided callback.
	*
	* @param {string} url - resource location
	* @param {object} data - data to be sent to location
	* @param {function} clbk - callback to invoke upon response receipt. Function should accept one input argument: [ result ]
	*/
	function postResource( url, data, clbk ) {
		var xhr;
		if ( url && clbk ) {
			// Create a new request object:
			xhr = new XMLHttpRequest();

			// Open the request connection:
			xhr.open( 'POST', url, true );

			// Set the request header:
			xhr.setRequestHeader( 'Content-Type', 'application/json' );

			// Define the state change callback:
			xhr.onreadystatechange = function () {
				if ( xhr.readyState != 4 || xhr.status != 200 ){
					return;
				}
				clbk( xhr.responseText );
			};
			// Send the request:
			xhr.send( data );
		} // end IF (parameters)
	} // end FUNCTION postResource()

	/**
	* FUNCTION: onReadme( blob )
	*	Handler for receiving a README resource.
	*
	* @private
	* @param {String} blob - content blob which will be parsed as JSON
	*/
	function onReadme( blob ) {
		var content = window.atob( JSON.parse( blob ).content );
		render( content );
	} // end FUNCTION onReadme()

	/**
	* FUNCTION: render( content )
	*	Renders Markdown as HTML.
	*
	* @private
	* @param {String} content - Markdown to render
	*/
	function render( content ) {
		content = {
			'text': content,
			'mode': 'markdown',
			'context': CONTEXT
		};
		content = JSON.stringify( content );
		postResource( URLs.markdown, content, onResource );
	} // end FUNCTION render()

	/**
	* FUNCTION: onResource( html )
	*	Handler for receiving rendered HTML.
	*
	* @private
	* @param {String} html - rendered HTML
	*/
	function onResource( html ) {
		document.getElementById( 'readme' ).innerHTML = html;
	} // end FUNCTION onResource()

})();