/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var randu = require( '@stdlib/random-base-randu' ).factory;
var abs = require( '@stdlib/math-base-special-abs' );
var hypot = require( '@stdlib/math-base-special-hypot' );
var tryRequire = require( '@stdlib/utils-try-require' );

var approx = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( approx instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof approx, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the hypotenuse using the alpha max plus beta min algorithm', opts, function test( t ) {
	var expected;
	var rand;
	var err;
	var tol;
	var h;
	var x;
	var y;
	var i;

	rand = randu();
	t.ok( true, 'seed: '+rand.seed );

	tol = 0.0396;
	for ( i = 0; i < 500; i++ ) {
		x = ( rand()*100.0 ) - 50.0;
		y = ( rand()*100.0 ) - 50.0;
		expected = hypot( x, y );
		h = approx( x, y );
		if ( h === expected ) {
			t.ok( true, 'x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'.' );
		} else {
			err = abs( h - expected ) / abs( expected );
			t.strictEqual( err <= tol, true, 'within tolerance. x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'. Error: '+err+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});
