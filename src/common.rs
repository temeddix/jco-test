use std::io::Write;
use std::io::{BufReader, Read};
use std::net::TcpStream;
use std::str;

pub fn start() -> String {
    println!("YAHOOOO");

    // Time IO
    let now = std::time::Instant::now();
    println!("{now:?}");

    // File IO
    let test_text = std::fs::read("nodejs/file_test.txt");
    println!("{test_text:?}");

    // Network IO
    let url = "http://jsonplaceholder.typicode.com/todos/1";
    let response_body = request_web(url);
    println!("{response_body}");

    // Threads
    std::thread::spawn(|| println!("YAHOO"));
    "Hello, World!".to_string()
}

fn request_web(url: &str) -> String {
    // Parse the URL to extract the domain and path
    let (domain, path) = parse_url(url).expect("Invalid URL");

    // Establish a TCP connection to the domain
    if let Ok(mut stream) = TcpStream::connect(format!("{}:80", domain)) {
        // Prepare the HTTP request
        let request = format!(
            "GET {} HTTP/1.1\r\n\
             Host: {}\r\n\
             Connection: close\r\n\
             \r\n",
            path, domain
        );

        // Send the HTTP request
        if stream.write(request.as_bytes()).is_ok() {
            // Read the response
            let mut response = String::new();
            let mut reader = BufReader::new(&stream);
            if reader.read_to_string(&mut response).is_ok() {
                // Print the response
                let response_parts: Vec<&str> = response.split("\r\n\r\n").collect();
                if response_parts.len() >= 2 {
                    let body = response_parts[1];
                    return body.to_owned();
                } else {
                    return String::from("No valid response (1)");
                }
            } else {
                return String::from("No valid response (2)");
            }
        } else {
            return String::from("No valid response (3)");
        }
    } else {
        return String::from("No valid response (4)");
    }
}

fn parse_url(url: &str) -> Option<(String, String)> {
    let parts: Vec<&str> = url.splitn(2, "://").collect();
    if parts.len() == 2 {
        let mut parts = parts[1].splitn(2, "/");
        match (parts.next(), parts.next()) {
            (Some(domain), Some(path)) => Some((domain.to_string(), format!("/{}", path))),
            _ => None,
        }
    } else {
        None
    }
}
