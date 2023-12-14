import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const TinyMce = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div className="w-screen h-screen relative px-5 lg:px-40 py-32">
      <div className="container h-fit">
        <Editor
          apiKey="a2npaeni1zb6syl93slh8wg31847c5kavqak3y8gk45ctioy"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
            menubar: true,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | fontsize " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            fontsize_formats: '8px 10px 12px 14px 18px 24px 36px',
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      <button onClick={log}>Log editor content</button>
      </div>
    </div>
  );
};

export default TinyMce;
