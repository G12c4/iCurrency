# iCurrency Project

This project is a simple currency converter that converts EUR to USD, BTC, and Satoshis. It is built with plain HTML, CSS, and JavaScript.

## Project Structure

- `index.html`: The main HTML file that contains the structure of the web page.
- `style.css`: The CSS file for styling the web page.
- `script.js`: The JavaScript file that contains the logic for fetching currency data and performing the conversion.
- `main.go`: The Go file that contains the web server.
- `Makefile`: Defines commands for building and running the Go server.
- `default.nix`: The Nix file that defines the development environment.

## Building and Running

This project uses [Nix](https://nixos.org/) to manage the development environment for development, but can be run with a simple `make` command.

### Prerequisites

- [Nix](https://nixos.org/download.html) installed on your system (for development environment setup).
- Go (if not using Nix shell for building/running).

### Running the Project

1.  **Open a Nix Shell (Optional for Development):**
    If you want to use the Nix-defined development environment (which includes Go), open your terminal in the project's root directory and run:

    ```bash
    nix-shell
    ```

    Otherwise, ensure Go is installed on your system.

2.  **Run the Web Server:**
    In your terminal (either within the Nix shell or with Go installed), run the following command:

    ```bash
    make run
    ```

    This command will first build the Go server executable and then run it.

3.  **View the Application:**
    Open your web browser and navigate to [http://localhost:8000](http://localhost:8000) to see the application running.

## Development Conventions

- All the code is written in plain HTML, CSS, and JavaScript.
- The project uses the [fawazahmed0/exchange-api](https://github.com/fawazahmed0/exchange-api) API to get the currency exchange rates.
- The development environment is defined in the `default.nix` file.