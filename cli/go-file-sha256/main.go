package main

import (
	"crypto/sha256"
	"fmt"
	"io"
	"os"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println("Usage: go run main.go <file>")
		os.Exit(1)
	}

	filePath := os.Args[1]

	file, err := os.Open(filePath)
	if err != nil {
		fmt.Println("Error opening file:", err)
		os.Exit(1)
	}
	defer file.Close()

	hasher := sha256.New()

	if _, err := io.Copy(hasher, file); err != nil {
		fmt.Println("Error hashing file:", err)
		os.Exit(1)
	}
	hash := hasher.Sum(nil)

	fmt.Printf("SHA256: %x\n", hash)
}