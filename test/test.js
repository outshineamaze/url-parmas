/* eslint-env mocha */
const expect = require('chai').expect
const { parse, stringify, set, get, remove } = require('../src/index.js')

describe('urlParams', () => {
  it('parse', () => {
    const urlString = 'key1=value1&key2=value2'
    const result = parse(urlString)
    expect(result['key1']).to.equal('value1')
  })
  it('stringify', () => {
    const urlObj = {'key1': 'value1', 'key2': 'value2'}
    const urlString = 'key1=value1&key2=value2'
    const result = stringify(urlObj)
    expect(result).to.equal(urlString)
  })
  it('set', () => {
    const urlString = 'key1=value1&key2=value2'
    const key = 'key3'
    const value = 'value3'
    const result1 = set(urlString, key, value)
    expect(result1).to.equal(urlString + `&${key}=${value}`)
    const result2 = set(urlString, key, null)
    expect(result2).to.equal(urlString + `&${key}`)
    const result3 = set(urlString, key, undefined)
    expect(result3).to.equal(urlString)
    const appendObj = {'abc': '123'}
    const result4 = set(urlString, key, appendObj)
    expect(result4).to.equal(urlString + `&${key}=` + encodeURIComponent(JSON.stringify(appendObj)))
  })
  it('get', () => {
    const urlString = 'key1=value1&key2=value2'
    const result = get(urlString, 'key1')
    expect(result).to.equal('value1')
  })
  it('remove', () => {
    const key = 'key2'
    const urlString = 'key1=value1&key2=value2'
    const result = remove(urlString, key)
    expect(result).to.equal('key1=value1')
  })
})
