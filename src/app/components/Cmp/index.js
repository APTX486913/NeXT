"use client"

import React, {useState} from "react";
import {Button} from "antd"
export default function Page() {
  const [num,setNum] = useState(0)
  return <>
  <div>{num}</div>
  <Button onClick={() => setNum(v => v+1)}>add</Button>
  </>;
}
