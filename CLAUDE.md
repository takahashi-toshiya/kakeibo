# 家計簿アプリ

夫婦で使う家計簿アプリ。食費・日用品を日次で記録し、カレンダーと週次サマリーで支出を管理する。

## 技術スタック

- **Frontend**: React Native (Expo) + NativeWind
- **Backend**: NestJS (TypeScript)
- **DB**: PostgreSQL
- **Infra**: AWS (EC2 + RDS)
- **API定義**: Swagger

## ディレクトリ構成

```
/
├── frontend/   # React Native (Expo)
├── backend/    # NestJS
├── docs/       # 設計ドキュメント
└── CLAUDE.md
```

## コマンド

### Frontend
```bash
cd frontend
npm start       # 開発サーバー起動
npm test        # テスト実行
```

### Backend
```bash
cd backend
npm run start:dev   # 開発サーバー起動
npm test            # テスト実行
```

## 規約

- TypeScript を使う（`any` 禁止）
- コメントは原則書かない。書く場合は「なぜ」だけ
- 不要なエラーハンドリングを追加しない
- 指示されていない機能を勝手に追加しない
- コミット前に必ず型チェックを通す

## 注意事項

- `git push --force` は使わない
- 勝手にパッケージを追加しない（必ず確認する）
- `.env` はコミットしない
