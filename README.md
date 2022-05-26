# electron-typing-game

electtron + react で構築したタイピングゲーム

<img src="https://user-images.githubusercontent.com/33960934/170536068-1ff59a49-482e-474e-9178-071bc78dfec6.gif" width="500px">

## 環境構築

### 依存関係
`yarn`

### 開発モードで起動
`yarn dev`

### 各スクリプトの説明については以下のコマンドでご確認を
`yarn run info`

### 実行ファイルの生成
実行時に端末側からアクセス許可を求められた場合は許可してください。
ファイルは/dist に出力されます。
作成前に dist フォルダが存在する場合、削除後に実行してください、

- dmg, app ファイル（Mac 環境）の作成
`yarn build:mac`

- exe, dll ファイル（win 環境）の作成
`yarn build:win`
