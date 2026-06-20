/**
 * Bookshelf APIサーバー
 * アプリケーションを指定されたポートで起動します
 */

import app from "./app.js";

// 環境変数PORTが設定されていれば優先し、未設定時は3000番ポートを使用
const PORT = process.env.PORT || 3000;

// 指定ポートでHTTPサーバーを起動
app.listen(PORT, () => {
  console.log(`Bookshelf API is running on port ${PORT}`);
});

// CODEOWNERS test