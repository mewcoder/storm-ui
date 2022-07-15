module.exports = {
  printWidth: 80, // 超过最大值换行
  tabWidth: 2, // 缩进字节数
  useTabs: false, // 缩进不使用tab
  singleQuote: true, //  使用单引号代替双引号
  jsxSingleQuote: true, // 在jsx中使用单引号代替双引号
  semi: true, // 句尾添加分号
  trailingComma: 'none', // 最后一个元素逗号
  bracketSpacing: true, //  在对象，数组括号与文字之间加空格 "{ foo: bar }"
  arrowParens: 'avoid', //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  proseWrap: 'preserve', // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  endOfLine: 'auto', // 结尾是 \n \r \n\r auto
  htmlWhitespaceSensitivity: 'ignore'
};
