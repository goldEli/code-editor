import React from "react";
import styled from "styled-components";

interface EditorProps {}

const Editor: React.FC<EditorProps> = (props) => {
  return <div contentEditable>123</div>;
};

export default Editor;
