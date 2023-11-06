cargo_component_bindings::generate!();
use bindings::Guest;

struct Component;

impl Guest for Component {
    fn hello_world() -> String {
        println!("YAHOOOO");
        let now = std::time::Instant::now();
        println!("{now:?}");
        std::thread::spawn(|| println!("YAHOO"));
        "Hello, World!".to_string()
    }
}
