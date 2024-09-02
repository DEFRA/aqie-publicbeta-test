/* eslint-disable no-console */
import config from 'helpers/config'
import { ProxyAgent, fetch as undiciFetch } from 'undici'
import createLogger from 'helpers/logger'
const logger = createLogger()

const nonProxyFetch = (url, opts) => {
  return undiciFetch(url, {
    ...opts
  })
}

const proxyFetch = (url, opts) => {
  const proxy = config.get('httpsProxy') ?? config.get('httpProxy')
  if (!proxy) {
    logger.info(`nonProxyfetchurl ${url}`)
    return nonProxyFetch(url, opts)
  } else {
    logger.info(`Proxyfetchurl ${url}`)
    return undiciFetch(url, {
      ...opts,
      dispatcher: new ProxyAgent({
        uri: proxy,
        keepAliveTimeout: 10,
        keepAliveMaxTimeout: 10
      })
    })
  }
}
// export { proxyFetch }
module.exports = proxyFetch
