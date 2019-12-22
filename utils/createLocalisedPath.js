module.exports = (path, locale) => {
  return locale.default ? path : locale.path + path
}
