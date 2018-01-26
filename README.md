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

// stringify
const urlObj = {'key1': 'value1', 'key2': 'value2'}
const result = stringify(urlObj)

// set
const urlString = 'key1=value1&key2=value2'
const key = 'key3'
const value = 'value3'
const result1 = set(urlString, key, value)

// get
const urlString = 'key1=value1&key2=value2'
const result = get(urlString, 'key1')

//remove
const key = 'key2'
const urlString = 'key1=value1&key2=value2'
const result = remove(urlString, key)
```