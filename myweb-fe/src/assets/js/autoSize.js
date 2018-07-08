var autoSize = function (el, str, options) {
  function AutoSize2 (el, str, options) {
    this.el = typeof el === 'string' ? document.querySelector(el) : el
    this.defaultOptions = {
      speed: 300,
      type: ''
    }
    this.options = options || this.defaultOptions
    this.str = str
    // 数组渲染
    this.textArr = []
  }

  AutoSize2.prototype.handleText = function () {
    let text = this.str.split('')
    this.write(text, 0, this.options.speed)
  }

  AutoSize2.prototype.write = function (text, index, speed) {
    if (index < text.length) {
      this.textArr.push(text[index])
      this.render()
      setTimeout(this.write.bind(this), speed, text, ++index, speed)
    }
  }

  AutoSize2.prototype.render = function () {
    this.el.innerHTML = this.textArr.join('')
  }

  AutoSize2.prototype.next = function () {
    this.handleText()
  }

  return new AutoSize2(el, str, options)
}

if (module !== 'undefined') {
  module.exports = autoSize
}
