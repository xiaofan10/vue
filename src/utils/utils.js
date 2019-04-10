const setAdaption = (baseFontsize) => {
  baseFontsize = baseFontsize || 16
  let docEl = document.documentElement
  let refresh = () => {
    let dpr = window.devicePixelRatio;
    let deviceWidth = window.screen.width;
    // let deviceWidth = docEl.getBoundingClientRect().width; //获得屏幕宽度
    let deviceFontsize = deviceWidth / 750 * baseFontsize + 'px'; // 计算rem基准值
    docEl.setAttribute('data-dpr', dpr)
    docEl.style.fontSize = deviceFontsize //设置rem基准值
  }

  window.addEventListener('pageshow', function(e) {
    if (!e.pretersised) {
      refresh()
    }
  }, false)
  window.addEventListener('resize', function() {
    refresh()
  }, false)
}

export default {
  setAdaption,
}
