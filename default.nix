{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.go
  ];

  shellHook = ''
    echo "Nix shell is activated."
    echo "You can now run the web server with:"
    echo "go run main.go"
  '';
}
