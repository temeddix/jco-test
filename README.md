# jco-test

Get the system ready:

```bash
cargo install cargo-component
npm install
```

To run locally on NodeJS:

```bash
cargo component build
npx jco transpile target/wasm32-wasi/debug/jco_test.wasm -o nodejs/out_dir
node nodejs/main.js
```

To serve for browsers:

```bash
cargo component build
npx jco transpile target/wasm32-wasi/debug/jco_test.wasm -o browser/out_dir --no-nodejs-compat
node server.js
```

Other commands:

```bash
npx jco wit target/wasm32-wasi/debug/jco_test.wasm
```
