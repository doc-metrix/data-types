Data Types
===

> Data types used in metric documentation.

A metric may be one of the following data types...

#### count

An `integer` that can only increase.


#### integer

A numeric value that can be written without a fractional component. May increase or decrease.


#### numeric

A numeric value which may have a fractional component (i.e., decimals).


#### binary

A numeric value having base 2.


#### octal

A numeric value having base 8.


#### hexadecimal

A value having base 16.


#### percentage

A unitless value on the interval `[0,1]`.


#### time

A value which is a measure of time, having units such as `milliseconds`, `seconds`, `days`, etc.


#### string

A sequence of character values.

===
## Contributing

To contribute to the data-type documentation, see the contributing [guide](https://github.com/doc-metrix/contributing). Any updates to the documentation should be tagged.

``` bash
$ git tag -a <major.minor.patch> -m "[UPDATE] version."
$ git push origin <major.minor.patch>
```

Use [semantic versioning](http://semver.org/) (semvar) for communicating versions.

*	Any new data types should be communicated as `minor` updates.
*	Any corrections/value modifications should be `patches`.
* 	Any documentation restructuring (changing field names, removing fields, etc) should be communicated as a `major` update.


===
## Usage

The documentation is stored as [JSON](http://json.org/), a lightweight data-interchange format. Many languages provide JSON support: [JavaScript](http://www.json.org/js.html), [Python](https://docs.python.org/2/library/json.html), [Go](http://golang.org/pkg/encoding/json/), [PHP](http://php.net/manual/en/book.json.php), [Java](http://json.org/java/), [Haskell](http://hackage.haskell.org/package/json), and [others](http://json.org/).

You are free to use the JSON documentation, as is. Simply copy the file and use accordingly.

For those using package managers to manage dependencies, we provide package manager support, as outlined below.


### Bower

The documentation is registered as a [Bower](http://bower.io) package. Bower provides a straightforward means for managing dependencies.

In order to use Bower, you must first install [Node.js](http://nodejs.org/) and [Git](http://git-scm.com/book/en/Getting-Started-Installing-Git). Once the prerequisites are installed,

``` bash
$ npm install -g bower
```

To [install](http://bower.io/docs/api/#install) the latest documentation,

``` bash
$ bower install doc-metrix-data-types
```

Bower will place the documentation in a `bower_components/` directory within the current working directory.

To [update](http://bower.io/docs/api/#update) to the latest documentation,

``` bash
$ bower update doc-metrix-data-types
```



## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. NodePrime.

