# electron-typing-game

electtron + react で構築したタイピングゲーム

## 環境構築

_依存関係_  
`yarn`

\*_開発モードで起動_  
`yarn dev`

_各スクリプトの説明については以下のコマンドでご確認を_
`yarn run info`

_dmg, app ファイル（Mac 環境）の作成_
`yarn build:mac`
実行時に端末側からアクセス許可を求められた場合は許可してください。
ファイルは/dist に出力されます。
作成前に dist フォルダが存在する場合、削除後に実行してください、

_exe, dll ファイル（win 環境）の作成_
`yarn build:win`
