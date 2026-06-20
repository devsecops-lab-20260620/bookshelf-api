# bookshelf-api
Bookshelf システムの REST API サーバー。TypeScript で実装され、コンテナ実行を前提とし、後段の PostgreSQL と接続する。GitHub Foundations の学習用リポジトリ。

## 実行方法

### 1. 前提条件

- Node.js がインストールされていること
- npm が利用できること

### 2. 依存関係をインストール

```bash
npm install
```

### 3. アプリケーションを起動

本番相当の起動:

```bash
npm start
```

明示的にビルドのみ実行する場合:

```bash
npm run build
```

開発時に自動再起動を使う場合:

```bash
npm run dev
```

型チェックのみ実行する場合:

```bash
npm run typecheck
```

## コード品質チェック

### ESLint

コード品質をチェックするには、まず ESLint と関連パッケージをインストールしてください:

```bash
npm install --save-dev eslint @eslint/js @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

#### ESLint チェック実行

コードのスタイルとエラーをチェック:

```bash
npm run lint
```

自動修正を含めて実行:

```bash
npm run lint:fix
```

### 4. 起動後の確認

デフォルトでは 3000 番ポートで起動します。環境変数 PORT を設定している場合はその値が優先されます。

ヘルスチェック:

```bash
curl http://localhost:3000/health
```

期待されるレスポンス:

```json
{"status":"OK"}
```
