chrome.webRequest.onHeadersReceived.addListener(function(details) {
	var exists = details.responseHeaders.some(function(header) {
		return header.name.toLowerCase() == 'access-control-allow-origin';
	});

	if (!exists) {
		details.responseHeaders.push({ name: 'Access-Control-Allow-Origin', value: '*' });

		return { responseHeaders: details.responseHeaders };
	}
}, { urls: ['<all_urls>'], types: ['xmlhttprequest'] }, [ 'blocking', 'responseHeaders' ]);