## 流れ
1 git init
2 npm install
3 npm run prepare
4 pre-commit を作成し下記のコードを追記

#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
npm run lint-staged

4 chmod ug+x .husky/* 

npm i eslint-config-airbnb-typescript html-react-parser jotai use-breakpoint 

npm i -D eslint-config-prettier eslint-formatter-table husky lint-staged prettier sass ts-loader typescript webpack webpack-cli webpack-dev-server


npm i @hookform/resolvers@latest next@latest html-react-parser@latest jotai@latest react@latest react-dom@latest react-hook-form@latest use-breakpoint@latest yup@latest

npm i -D @types/node@latest @types/react@latest @types/react-dom@latest @typescript-eslint/eslint-plugin@latest eslint@latest eslint-config-next@latest eslint-config-prettier@latest eslint-formatter-table@latest eslint-plugin-simple-import-sort@latest husky@latest lint-staged@latest prettier@latest typescript@latest sass@latest