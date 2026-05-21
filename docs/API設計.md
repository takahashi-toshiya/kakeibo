# API設計

ベースURL: `/api/v1`

## 認証

| メソッド | エンドポイント | 説明 |
|----------|---------------|------|
| POST | `/auth/login` | ログイン・JWTを返す |
| POST | `/auth/logout` | ログアウト |
| POST | `/auth/password-reset/request` | パスワードリセットメール送信 |
| POST | `/auth/password-reset/confirm` | パスワードリセット実行 |

## カテゴリ

| メソッド | エンドポイント | 説明 |
|----------|---------------|------|
| GET | `/categories` | カテゴリ一覧取得 |

## 支出

| メソッド | エンドポイント | 説明 |
|----------|---------------|------|
| GET | `/expenses` | 支出一覧取得（日付・カテゴリで絞り込み可） |
| POST | `/expenses` | 支出登録 |
| PATCH | `/expenses/:id` | 支出編集 |
| DELETE | `/expenses/:id` | 支出削除 |

## 予算

| メソッド | エンドポイント | 説明 |
|----------|---------------|------|
| GET | `/budgets` | 予算一覧取得 |
| POST | `/budgets` | 予算設定 |
| PATCH | `/budgets/:id` | 予算編集 |

## 集計

| メソッド | エンドポイント | 説明 |
|----------|---------------|------|
| GET | `/summary/daily` | 日別支出合計取得 |
| GET | `/summary/weekly` | 週次支出合計取得 |
