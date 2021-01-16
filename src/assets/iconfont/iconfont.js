import { createGlobalStyle } from 'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1610673681278'); /* IE9 */
  src: url('iconfont.eot?t=1610673681278#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1610673681278') format('woff'),
  url('iconfont.ttf?t=1610673681278') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1610673681278#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-xingji-ban:before {
  content: "\e66e";
}

.icon-xingji:before {
  content: "\e635";
}

.icon-tv:before {
  content: "\e644";
}

.icon-dianshiju1:before {
  content: "\e604";
}

.icon-dianying:before {
  content: "\e619";
}

.icon-dianshiju:before {
  content: "\e675";
}

.icon-shipin:before {
  content: "\e6f1";
}

.icon-shipin1:before {
  content: "\e603";
}

.icon-bofang:before {
  content: "\e624";
}

.icon-sousuo:before {
  content: "\e632";
}

.icon-wode:before {
  content: "\e62f";
}

.icon-shouye:before {
  content: "\e62e";
}


`