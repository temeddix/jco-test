# jco-test

Get the system ready.

```bash
cargo install cargo-component
npm install
```

Run as a native executable. Uncomment the `[[bin]]` section in `Cargo.toml` file first.

```bash
cargo run
```

Run locally on NodeJS.

```bash
cargo component build
npx jco transpile target/wasm32-wasi/debug/jco_test.wasm -o nodejs/out_dir
node nodejs/main.js
```

Serve for browsers.

```bash
cargo component build
npx jco transpile target/wasm32-wasi/debug/jco_test.wasm -o browser/out_dir --no-nodejs-compat
node server.js
```

Other commands.

```bash
npx jco wit target/wasm32-wasi/debug/jco_test.wasm
```
