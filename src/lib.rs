cargo_component_bindings::generate!();
use bindings::Guest;

struct Component;

impl Guest for Component {
    fn hello_world() -> String {
        // std::thread::spawn(|| println!("YAHOO"));
        println!("YAHOOOO");
        "Hello, World!".to_string()
    }
}
