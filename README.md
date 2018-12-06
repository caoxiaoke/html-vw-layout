# html-vw-layout

骚年，放飞自我吧！放心使用 vw 来做适配～

移动端h5 vw 适配，基于webpack4 打包多页面html demo、支持es6，开箱即用。

适合小白哈，大佬看到点完小星星✨再绕路～小白也别忘记了点个星星！谢谢～

<br/>
1、在这里很多人有疑问，为什么要用vw 单位来做适配？vw 和 我们常用rem适配方案有什么优缺点？
我相信大家对vw 和 rem 单位不会陌生。
<p>
vw、vh、vmin、vmax 这四个单位都是相对于视口的宽度。视口被均分为100单位的vw ：
</p>
<p>
vw、vh
vw是相对视口（viewport）的宽度而定的，长度等于视口宽度的1/100。
假如浏览器的宽度为200px，那么1vw就等于2px（200px/100）。
	
vh是相对视口（viewport）的高度而定的，长度等于视口高度的1/100。
假如浏览器的高度为500px，那么1vh就等于5px（500px/100）。
</p>
<p>
vmin和vmax是相对于视口的高度和宽度两者之间的最小值或最大值。
</p>
<p>
如果浏览器的高为300px、宽为500px，那么1vmin就是3px，1vmax就是5px。
如果浏览器的高为800px，宽为1080px，那么1vmin也是8px，1vmax也是10.8px。
</p>
<br/>

rem是相对于根元素（html）的字体大小（font-size）来计算的长度单位
rem 10px == 62.5%
 ```html 
html {font-size: 62.5%;/*10 ÷ 16 × 100% = 62.5%*/}
			body {font-size: 1.4rem;/*1.4 × 10px = 14px */}
			h1 { font-size: 2.4rem;/*2.4 × 10px = 24px*/}
``` 
<br/>
2、现在对vw 的兼容性支持情况？
<br/>
<p>
  在移动端 iOS 8 以上、 Android 4.4 以上、包括微信浏览器 新版x5 都支持vw。
  <br/>
  可以在 <a href="https://caniuse.com/#search=vw">Can I use</a> 或者 <a href="https://airen.github.io/css3test/css3test">css3test</a> 查看兼容情况
</p>
<p>
  想要适配低版本浏览器、低端机型也不是什么问题、也给出了解决方案。请看 => 3
	
  在几年前vw 之所以没有流行起来的原因，还是因为在当时兼容性不够，讲白了，就是坑多、大家都不愿意做第一个躺坑的人。<br/>
  几年时间过去，各大厂商对vw 对兼容升级、低端机型占比逐步减少，vw 的适配方案也慢慢的浮出了水面，大家重新对它有了新的认识。包括我们业界知名的大漠，他们在手淘已经对vw 适配方案有了一年多的实践时间。
</p>
<br/>
3、不支持vw 的浏览器的解决方案？
 <br/>
 低版本浏览器、低端机型不支持的情况下，我们可以hack ，在部分浏览器上不显示图片，可以加上全局解决 img {content: normal !important}
 <a href="https://github.com/rodneyrehm/viewport-units-buggyfill"> https://github.com/rodneyrehm/viewport-units-buggyfill </a>
 项目中引用
 <br/> 
 
 ```html 
<head>
    <script src="//g.alicdn.com/fdilab/lib3rd/viewport-units-buggyfill/0.6.2/??viewport-units-buggyfill.hacks.min.js,viewport-units-buggyfill.min.js"></script>
</head>

<body>
<script>
	window.onload = function () {
		window.viewportUnitsBuggyfill.init({
			hacks: window.viewportUnitsBuggyfillHacks
		});
	}
</script>
<body>
``` 
<br/>
<br/>
如果你已经装了git 的话，可以走以下步骤。
<br/>
git clone https://github.com/caoxiaoke/html-vw-layout.git
<br/>
cd html-vw-layout
<br/>
<br/>
<p>
	执行步骤：npm install 或者 sudo npm install
</p>
<p>
	开发环境 npm run start || 开发环境 http://localhost:8080 查看效果
</p>
<p>
	生产打包 npm run build
</p>
<br/>
如果你不使用react 也不使用vue ，在项目中只使用html页面 vw实现移动端适配，请点这
<a href="https://github.com/caoxiaoke/html-vw-layout">《如何在html项目中使用vw实现移动端适配》</a>
<br/>
在react项目中使用vw实现移动端适配 请参考
<a href="https://github.com/gaohan1994/react-vw-layout">《如何在react项目中使用vw实现移动端适配》</a>
<br/>
在vue项目中使用vw适配 请参考
<a href="https://www.w3cplus.com/mobile/vw-layout-in-vue.html">《如何在Vue项目中使用vw实现移动端适配》</a>
<br/>
