import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Result from "./../Result";

const codes = [
  `fetch("https://jsonplaceholder.typicode.com/todos/1")`,
  `  .then((response) => {`,
  `    if (!response.ok) {`,
  `      throw new Error("Network response was not ok");`,
  `    }`,
  `    return response.json();`,
  `  })`,
  `  .then((data) => {`,
  `    console.log(data);`,
  `  })`,
  `  .catch((error) => {`,
  `    console.error("There has been a problem with your fetch operation:", error);`,
  `});`,
];

function Fetch() {
  const [restUrl, setRestUrl] = useState("https://jsonplaceholder.typicode.com/todos/1");

  // 자식 컴포넌트의 ref 생성
  const resultRef = useRef();

  const getData = (restUrl) => {
    resultRef.current.addResult(`requested url : ${restUrl}`);

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        resultRef.current.addResult(`response: ${response}`);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        resultRef.current.addResult(`data: ${data}`);
        console.log(data);
      })
      .catch((error) => {
        console.error("There has been a problem with your fetch operation:", error);
      });
  };

  const handleClick = () => {
    getData(restUrl);
  };

  const handleClickInit = () => {
    resultRef.current.initialize();
  };

  return (
    <div style={{ paddingLeft: "10px" }}>
      <h2>fetch API</h2>
      <p>fetch 기본 사용법</p>
      <p>실행 코드</p>
      <hr />

      {codes.map((line) => (
        <pre style={{ marginBottom: "0px" }}>{line}</pre>
      ))}
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Rest API Url을 입력하세요</Form.Label>
          <Form.Control
            type="text"
            placeholder="https://jsonplaceholder.typicode.com/todos/1" //
            onChange={(e) => setRestUrl(e.target.value)}
          />
        </Form.Group>
      </Form>
      {/* <Button style={{ marginRight: "10px" }} onClick={handleClick}> */}
      <Button className="me-1" onClick={handleClick}>
        코드 실행
      </Button>
      <Button onClick={handleClickInit}>초기화</Button>
      <hr />
      <Result ref={resultRef}></Result>
    </div>
  );
}

export default Fetch;
