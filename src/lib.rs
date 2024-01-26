mod bindings;
mod common;

use bindings::Guest;

struct Component;

impl Guest for Component {
    fn hello_world() -> String {
        common::start()
    }
}

#[allow(dead_code)]
fn main() {
    common::start();
}
