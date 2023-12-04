import React from "react";
import { forwardRef, useImperativeHandle, useState } from "react";
const Result = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    // 부모 컴포넌트에서 사용할 함수를 선언
    addResult,
    initialize,
  }));

  const addResult = (result) => {
    console.log(result);
    const newDiv = <div key={childDivs.length}>{result}</div>;
    setChildDivs([...childDivs, newDiv]);
  };

  const initialize = () => {
    setChildDivs([]);
  };

  // state로 자식 요소를 관리
  const [childDivs, setChildDivs] = useState([]);

  return (
    <div style={{ marginBottom: "0px" }}>
      {/* 동적으로 추가된 자식 요소들을 렌더링 */}
      {childDivs}
    </div>
  );
});

export default Result;
