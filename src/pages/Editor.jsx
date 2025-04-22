import React from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  MarkdownEditor,
  RichTextEditorComponent,
  Toolbar,
  QuickToolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import { EditorData } from "../data/dummu";
import { Header } from "../components";

const Editor = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 bg-white rounded-3xl">
      <Header category="App" title="Editor" />
      <div className="w-full">
        <RichTextEditorComponent>
          <Inject
            services={[
              HtmlEditor,
              Image,
              Link,
              MarkdownEditor,
              Toolbar,
              QuickToolbar,
            ]}
          />
        </RichTextEditorComponent>
      </div>
    </div>
  );
};

export default Editor;
