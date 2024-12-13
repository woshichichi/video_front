"use client";

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [name, setName] = useState(""); // 查询的姓名
  const [age, setAge] = useState(null); // 查询结果：年龄

  const executeQuery = async () => {
    try {
      const response = await axios.get("/api/get_age", {
        params: { name }, // 将 name 作为查询参数传递
      });
      setAge(response.data.age); // 假设后端返回 { age: xx }
    } catch (error) {
      console.error("查询失败：", error);
      setAge(null);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>查询年龄系统</h1>
      <div style={{ marginBottom: "10px" }}>
        <label>
          输入姓名：
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>
      <button onClick={executeQuery}>查询年龄</button>
      <h2>查询结果</h2>
      {age !== null && <p>{`姓名：${name}，年龄：${age}`}</p>}
    </div>
  );
}