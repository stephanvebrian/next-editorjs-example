import { OutputData } from "@editorjs/editorjs";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";

import EditorRenderer from "../components/EditorRenderer";

// important that we use dynamic loading here
// editorjs should only be rendered on the client side.
const EditorBlock = dynamic(() => import("../components/Editor"), {
  ssr: false,
});

const Home: NextPage = () => {
  //state to hold output data. we'll use this for rendering later
  const [data, setData] = useState<OutputData>();

  return (
    <div>
      <div className="container max-w-4xl">
        <h1>Editor</h1>
        <EditorBlock
          data={data}
          onChange={setData}
          holder="editorjs-container"
        />
      </div>
      <hr />
      <div>
        <h1>Preview</h1>
        <div className="border rounded-md">
          <div className="p-16">{data && <EditorRenderer data={data} />}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
