// 扩大可点击区域
const extendClick = () => {
  return `
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: -10px; bottom: -10px; left: -10px; right: -10px;
    };
  `;
};
// 一行文字溢出部分用... 代替
const noWrap = () => {
  return `
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `;
};

type Direction = "row" | "col";
type Justify = "s" | "sb" | "sa" | "e" | "c";
type Algin = "s" | "b" | "sh" | "e" | "c";
enum JustifyE {
  "s" = "flex-start",
  "sb" = "space-between ",
  "sa" = "space-around",
  "e" = "flex-end",
  "c" = "center",
}
enum AlginE {
  "s" = "flex-start",
  "b" = "baseline",
  "sh" = "stretch",
  "e" = "flex-end",
  "c" = "center",
}
/**
 * @param direction ‘方向’
 * @param justify ‘横向分布’
 * @param algin ‘纵向分布’
 * @returns 'css'
 */
const flex = (direction: Direction, justify: Justify, algin: Algin): string => {
  return `
    display: flex;
    flex-direction: ${direction}
    justify-content: ${JustifyE[justify]},
    align-items: ${AlginE[algin]}
  `;
};
const themeVar = {
  "theme-color": "#d44439",
  "theme-color-shadow": "rgba (212, 68, 57, .5)",
  "font-color-light": "#f1f1f1",
  "font-color-desc": "#2E3030",
  "font-color-desc-v2": "#bba8a8", // 略淡
  "font-size-ss": "10px",
  "font-size-s": "12px",
  "font-size-m": "14px",
  "font-size-l": "16px",
  "font-size-ll": "18px",
  "border-color": "#e4e4e4",
  "background-color": "#f2f3f4",
  "background-color-shadow": "rgba (0, 0, 0, 0.3)",
  "highlight-background-color": "#fff",
};
const styleObj = {
  ...themeVar,
  extendClick,
  noWrap,
  flex,
};
export default styleObj;
