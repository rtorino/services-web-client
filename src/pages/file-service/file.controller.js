'use strict';

var FileController = function ( $upload, $timeout ) {
	var vm = this;
	$scope.usingFlash = FileAPI && FileAPI.upload != null;
	$scope.fileReaderSupported = window.FileReader != null && (window.FileAPI == null || FileAPI.html5 != false);

	function uploadUsing$upload(file) {
		file.upload = $upload.upload({
			url: 'https://localhost:9000/uploads' + $scope.getReqParams(),
			method: 'POST',
			headers: {
				'my-header' : 'my-header-value'
			},
			file: file,
			fileFormDataName: 'myFile'
		});

		file.upload.then(function(response) {
			$timeout(function() {
				file.result = response.data;
			});
		}, function(response) {
			if (response.status > 0)
				$scope.errorMsg = response.status + ': ' + response.data;
		});

		file.upload.progress(function(evt) {
			// Math.min is to fix IE which reports 200% sometimes
			file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
		});

		file.upload.xhr(function(xhr) {
			// xhr.upload.addEventListener('abort', function(){console.log('abort complete')}, false);
		});
	}

	}
FileController.$inject = [ '$upload', '$timeout' ];
module.exports = FileController;