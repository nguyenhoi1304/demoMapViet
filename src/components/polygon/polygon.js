import React from 'react';
import { forwardRef, useImperativeHandle, useState } from "react";
import '../polygon/polygon.css';

function polygon(props, ref) {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");

  useImperativeHandle(ref, () => ({
    message: (r) => {
      setText(r);
      setShow(true);
    }
  }));
  return (
    <div className="polygonView">
      <div
        style={{
          display: show ? "block" : "none"
        }}
      >
        Đã vẽ golygon
      </div>
    </div>
  );
}
polygon = forwardRef(polygon);
export default polygon;