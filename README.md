[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)]()
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

a simle tool parse url params string to object. and provide some method to operate url params.

methods:

* parse
* stringify
* set
* get
* remove

```
// parse
const urlString = 'key1=value1&key2=value2'
const result = parse(urlString)
// result =  {'key1': 'value1', 'key2': 'value2'}

// stringify
const urlObj = {'key1': 'value1', 'key2': 'value2'}
const result = stringify(urlObj)
// result =  'key1=value1&key2=value2'

// set
const urlString = 'key1=value1&key2=value2'
const key = 'key3'
const value = 'value3'
const result1 = set(urlString, key, value)

// get
const urlString = 'key1=value1&key2=value2'
const result = get(urlString, 'key1')
// result = 'value'

//remove
const key = 'key2'
const urlString = 'key1=value1&key2=value2'
const result = remove(urlString, key)
```



