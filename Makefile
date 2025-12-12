.PHONY: run build

run: build
	./server

build:
	go build -o server main.go
