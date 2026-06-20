/**
 * メインのExpressアプリケーションモジュール
 * ヘルスチェックエンドポイント等の基本的なルーティングを定義する
 */

import express from "express";

const app = express();

// アプリが稼働しているかを確認するヘルスチェック用エンドポイント
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

export default app;

// CODEOWNERS test
// CODEOWNERS auto-assign test

