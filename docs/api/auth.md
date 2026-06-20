# 認証

この API では、ログインした人に対して Bearer トークンを発行し、以後の認証が必要な API で利用します。

## 事前条件

- ログイン用の `loginId` と `password` が必要です。
- 認証が必要な API には `Authorization: Bearer <token>` を付与します。

## ログイン

`POST /api/v1/auth/login`

### リクエスト例

```json
{
	"loginId": "yamada",
	"password": "password123"
}
```

### レスポンス例

```json
{
	"accessToken": "eyJhbGciOi...",
	"tokenType": "Bearer",
	"expiresIn": 3600,
	"person": {
		"id": "person_001",
		"name": "山田 太郎",
		"loginId": "yamada",
		"role": "admin"
	}
}
```

### エラー例

- `400 Bad Request`: 入力値が不足している
- `401 Unauthorized`: 認証に失敗した

## ログアウト

`POST /api/v1/auth/logout`

### 説明

- 現在のトークンを無効化します。
- クライアントは以後そのトークンを再利用しません。

### レスポンス例

```json
{
	"message": "Logged out"
}
```

## 認証が必要な API

- 書籍の一覧、登録、詳細、更新、削除
- 人の一覧、登録、詳細、更新、削除
- ログアウト

