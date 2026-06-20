/**
 * メインのExpressアプリケーションモジュール
 * ヘルスチェックエンドポイント等の基本的なルーティングを定義する
 */

import express from "express";
import { exec } from "node:child_process";

const app = express();

// アプリが稼働しているかを確認するヘルスチェック用エンドポイント
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// NOTE: CodeQLアラート検証のため、意図的に危険な実装を追加している。
app.get("/debug/eval", (req, res) => {
  const expression = String(req.query.expr ?? "1 + 1");
  // Intentionally insecure: user input is passed directly to eval.
  const result = eval(expression);
  res.status(200).json({ result });
});

// NOTE: CodeQLアラート検証のため、意図的に危険な実装を追加している。
app.get("/debug/exec", (req, res) => {
  const command = String(req.query.cmd ?? "echo codeql-test");
  // Intentionally insecure: user input is passed directly to shell execution.
  exec(command, (error, stdout, stderr) => {
    if (error) {
      res.status(500).json({ error: error.message, stderr });
      return;
    }
    res.status(200).json({ stdout, stderr });
  });
});

export default app;

// CODEOWNERS test
// CODEOWNERS auto-assign test

