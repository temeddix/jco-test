cargo_component_bindings::generate!();
use bindings::Guest;

struct Component;

impl Guest for Component {
    fn hello_world() -> String {
        println!("YAHOOOO");
        let now = std::time::Instant::now();
        println!("{now:?}");
        let test_text = std::fs::read("nodejs/file_test.txt");
        println!("{test_text:?}");
        std::thread::spawn(|| println!("YAHOO"));
        "Hello, World!".to_string()
    }
}
