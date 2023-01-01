<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Alpha Max Plus Beta Min

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [hypotenuse][hypotenuse] using the [alpha max plus beta min algorithm][alpha-max-plus-beta-min].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-fast-alpha-max-plus-beta-min
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var ampbm = require( '@stdlib/math-base-special-fast-alpha-max-plus-beta-min' );
```

#### ampbm( x, y )

Computes the [hypotenuse][hypotenuse] using the [alpha max plus beta min algorithm][alpha-max-plus-beta-min].

```javascript
var h = ampbm( -5.0, 12.0 );
// returns ~13.5
```

#### ampbm.factory( alpha, beta, \[nonnegative\[, ints]] )

Returns a function for computing the [hypotenuse][hypotenuse] using coefficients `alpha` and `beta`.

```javascript
var hypot = ampbm.factory( 1.0, 0.5 );

var h = hypot( -5.0, 12.0 );
// returns 14.5
```

If the returned function should only expect nonnegative arguments, set the `nonnegative` argument to `true`.

```javascript
var hypot = ampbm.factory( 1.0, 0.5, true );

var h = hypot( 5.0, 12.0 );
// returns 14.5
```

If the returned function should only expect signed 32-bit integers, set the `ints` argument to `true`.

```javascript
var hypot = ampbm.factory( 1.0, 0.5, false, true );

var h = hypot( -5.0, 12.0 );
// returns 14
```

If the returned function should only expect unsigned 32-bit integer valued arguments, set the `nonnegative` and `ints` arguments to `true`.

```javascript
var hypot = ampbm.factory( 1.0, 0.5, true, true );

var h = hypot( 5.0, 12.0 );
// returns 14
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The algorithm computes only an **approximation**. For precise results, use [`hypot`][@stdlib/math/base/special/hypot].

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var ampbm = require( '@stdlib/math-base-special-fast-alpha-max-plus-beta-min' );

var x;
var y;
var h;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu()*100.0 ) - 50.0;
    y = round( randu()*100.0 ) - 50.0;
    h = ampbm( x, y );
    console.log( 'hypot(%d,%d) = %d', x, y, h );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

## References

-   Lyons, Richard G. 2011. _Understanding Digital Signal Processing, 3rd Edition_. Prentice Hall.

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/hypot`][@stdlib/math/base/special/hypot]</span><span class="delimiter">: </span><span class="description">compute the hypotenuse avoiding overflow and underflow.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-fast-alpha-max-plus-beta-min.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-fast-alpha-max-plus-beta-min

[test-image]: https://github.com/stdlib-js/math-base-special-fast-alpha-max-plus-beta-min/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-fast-alpha-max-plus-beta-min/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-fast-alpha-max-plus-beta-min/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-fast-alpha-max-plus-beta-min?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-fast-alpha-max-plus-beta-min.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-fast-alpha-max-plus-beta-min/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-fast-alpha-max-plus-beta-min/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-fast-alpha-max-plus-beta-min/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-fast-alpha-max-plus-beta-min/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-fast-alpha-max-plus-beta-min/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-fast-alpha-max-plus-beta-min/main/LICENSE

[hypotenuse]: https://en.wikipedia.org/wiki/Pythagorean_theorem

[alpha-max-plus-beta-min]: https://en.wikipedia.org/wiki/Alpha_max_plus_beta_min_algorithm

[@stdlib/math/base/special/hypot]: https://github.com/stdlib-js/math-base-special-hypot

<!-- <related-links> -->

[@stdlib/math/base/special/hypot]: https://github.com/stdlib-js/math-base-special-hypot

<!-- </related-links> -->

</section>

<!-- /.links -->
