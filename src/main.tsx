import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import '@aws-amplify/ui-react/styles.css';

// 动态加载 Amplify 配置（AWS 部署时自动生成，本地开发时可选）
async function initializeApp() {
  try {
    const outputs = await import("../amplify_outputs.json");
    Amplify.configure(outputs.default || outputs);
  } catch (error) {
    // 本地开发时如果 amplify_outputs.json 不存在，跳过配置
    console.log("amplify_outputs.json not found, skipping Amplify configuration for local development");
  }

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

initializeApp();
