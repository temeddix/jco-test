# jco-test

To run locally on NodeJS:

```bash
cargo component build
npx jco transpile target/wasm32-wasi/debug/jco_test.wasm -o out_dir_local
node local.js
```

To serve from a web server for browsers:

```bash
cargo component build
npx jco transpile target/wasm32-wasi/debug/jco_test.wasm -o out_dir --no-nodejs-compat
node server.js
```

Other commands:

```bash
npx jco wit target/wasm32-wasi/debug/jco_test.wasm
```
