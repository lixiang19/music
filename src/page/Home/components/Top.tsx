import React from "react";
import styled from "styled-components";
import globalStyle from "@/assets/global-style";
function Top() {
  return <TopWrapper></TopWrapper>;
}
const TopWrapper = styled.div`
  ${globalStyle.flex("col", "c", "b")}
  padding: 5px 10px;
  background: ${globalStyle["theme-color"]};
  & > span {
    line-height: 40px;
    color: #f1f1f1;
    font-size: 20px;
    &.iconfont {
      font-size: 25px;
    }
  }
`;

export default React.memo(Top);
