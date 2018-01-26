/**
 * 解析url-query字符串
 * @param str
 * @returns {Object}
 */

const parse = (str) => {
  let ret = Object.create(null)
  if (typeof str !== 'string') {
    return ret
  }
  str = str.trim().replace(/^[?#&]/, '')
  if (!str) {
    return ret
  }
  return str.split('&').reduce((pre, param) => {
    let parts = param.replace(/\+/g, ' ').split('=')
    let key = parts.shift()
    let value = parts.length > 0 ? parts.join('=') : undefined

        // 未拿到值就设置为 null
    value = (value === undefined) ? null : decodeURIComponent(value)
    pre[decodeURIComponent(key)] = value
    return pre
  }, ret)
}

/**
 * 序列化对象到 url-query 的字符串
 * @param obj
 * @returns {string}
 */
const stringify = (obj) => {
  return obj ? Object.keys(obj).sort().map((key) => {
    let value = obj[key]
    if (value === undefined) {
      return ''
    }
    if (value === null) {
      return key
    }
    return key + '=' + value
  }).filter((x) => {
    return x.length > 0
  }).join('&') : ''
}
/**
 * 从一个url-query字符串获取某个key的value
 * @param str
 * @param key
 * @returns {*|undefined}
 */
const get = (str, key) => {
  let obj = parse(str)
  return obj[key] || undefined
}

/**
 * 添加一个key-value到url-query字符串, 默认添加到尾部
 * @param str
 * @param key
 * @param value
 * @returns {*}
 */
const set = (str, key, value) => {
  if (typeof str !== 'string') {
    return str
  }
  str = str.trim().replace(/^[?#&]/, '')
  if (!str || !key) {
    return str
  }
  let apppendString = ''
  if (value === undefined) {
    apppendString = ''
  } else if (value === null) {
    apppendString = key
  } else if (typeof value !== 'string') {
    try {
      value = encodeURIComponent(JSON.stringify(value))
      apppendString = key + '=' + value
    } catch (e) {
      return str
    }
  } else {
    apppendString = key + '=' + value
  }
  let parseURLArray = str.split('&')
  parseURLArray.push(apppendString)
  return [...new Set(parseURLArray)].filter((x) => {
    return x.length > 0
  }).join('&') || ''
}
/**
 * 从url-query移除一个key-value项
 * @param str
 * @param key
 * @returns {*}
 */
const remove = (str, key) => {
  if (typeof str !== 'string') {
    return str
  }
  str = str.trim().replace(/^[?#&]/, '')
  if (!str) {
    return str
  }
  return str.split('&').filter((param) => {
    let parts = param.replace(/\+/g, ' ').split('=')
    let paramKey = parts.shift()
    return key !== paramKey
  }).join('&') || ''
}

module.exports = {
  remove,
  set,
  get,
  parse,
  stringify
}
