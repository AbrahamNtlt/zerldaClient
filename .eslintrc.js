/*
 * @Description:
 * @Author: Achieve
 * @Date: 2019-12-18 11:19:04
 * @LastEditTime: 2019-12-18 11:19:11
 */
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  globals: {
    __static: true
  },
  plugins: ['html'],
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
