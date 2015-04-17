'use strict';

var EmailTemplateServices = function ( $http, $q ) {

	var templateDB = [ {
				'id' : '1001',
				'name' : 'alphabet',
				'description' : 'Use all letters of the alphabet in one sentence',
				'content' : 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.',
				'createdAt' : '04-15-2015',
				'deleted' : 0,
				'deletedAt' : '',
				'updatedAt' : ''
			}, {
				'id' : '1002',
				'name' : 'Mnemonics',
				'description' : 'Musical Notations Memorization',
				'content' : 'Every Good Boy Does Fine',
				'createdAt' : '04-15-2015',
				'deleted' : 0,
				'deletedAt' : '',
				'updatedAt' : ''
			}, {
				'id' : '1003',
				'name' : 'Remember!',
				'description' : 'Remember Solar System\'s Planets',
				'content' : 'My Very Educated Mother Just Served Us Nachos',
				'createdAt' : '04-15-2015',
				'deleted' : 0,
				'deletedAt' : '',
				'updatedAt' : ''
			} ];

	var STORAGE_ID = 'email-templates-dummy';

	/*return {
		get: function () {
			return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
		},

		put: function (todos) {
			localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
		}
	};*/

	return {
		getTemplateList : function () {
			/*return $q( function ( resolve, reject ) {
				$http( {
					method  : 'GET',
					url     : 'http://192.168.1.5:8005/templates'
				} )
				.success( function ( res ) {
					resolve( res );
				} )
				.error( function ( err ) {
					reject( err );
				} )
			} );*/

			return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
		},
		getTemplateById : function ( id ) {
			/*return $q( function ( resolve, reject ) {
				$http( {
					method  : 'GET',
					url     : 'http://192.168.1.5:8005/templates/' + id
				} )
				.success( function ( res ) {
					resolve( res );
				} )
				.error( function ( err ) {
					reject( err );
				} )
			} );*/
			var result = $.grep( this.getTemplateList(), function(e){ return e.id == id; });
			return result;
		},
		createTemplate : function ( templateData ) {
			/*return $q( function ( resolve, reject ) {
				$http( {
					method : 'POST',
					url    : 'http://192.168.1.5:8005/templates',
					data   : templateData
				} ).
				success( function ( res ) {
					resolve( res );
				} )
				.error( function ( err ) {
					reject( err );
				} )
			} );*/

			var templateList = this.getTemplateList();

			templateData.id = Date.now().toString();
			templateData.createdAt = new Date().toString();

			templateList.push( templateData );

			return localStorage.setItem( STORAGE_ID, JSON.stringify( templateList ) );

		},
		updateTemplate : function ( id, templateData ) {
			/*return $q( function ( resolve, reject ) {
				$http( {
					method : 'PUT',
					url    : 'http://192.168.1.5:8005/templates/' + id,
					data   : templateData
				} ).
				success( function ( res ) {
					resolve( res );
				} )
				.error( function ( err ) {
					reject( err );
				} )
			} );*/

			Array.prototype.getIndexBy = function (name, value) {
			    for (var i = 0; i < this.length; i++) {
			        if (this[i][name] == value) {
			            return i;
			        }
			    }
			}

			var templateList = this.getTemplateList();
			var index = templateList.getIndexBy( 'id', id );

			templateList[ index ] = templateData;

			return localStorage.setItem( STORAGE_ID, JSON.stringify( templateList ) );

		},
		deleteTemplateById : function ( id ) {
			/*return $q( function ( resolve, reject ) {
				$http( {
					method : 'DELETE',
					url    : 'http://192.168.1.5:8005/templates/' + id
				} ).
				success( function ( res ) {
					resolve( res );
				} )
				.error( function ( err ) {
					reject( err );
				} )
			} );*/

			Array.prototype.getIndexBy = function (name, value) {
			    for (var i = 0; i < this.length; i++) {
			        if (this[i][name] == value) {
			            return i;
			        }
			    }
			}

			var templateList = this.getTemplateList();
			var index = templateList.getIndexBy( 'id', id );

			templateList.splice( index, 1 );

			return localStorage.setItem( STORAGE_ID, JSON.stringify( templateList ) );
		}
	};

};

EmailTemplateServices.$inject = [ '$http', '$q' ];

module.exports = EmailTemplateServices;
