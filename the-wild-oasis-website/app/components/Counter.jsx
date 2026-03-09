"use client";
import { useState } from "react";

export default function Counter({ users }) {
  console.log(users);
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Click me</button>
    </div>
  );
}
