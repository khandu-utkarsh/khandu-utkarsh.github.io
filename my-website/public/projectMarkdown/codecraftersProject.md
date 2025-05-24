## Heading  
CodeCrafters Systems Projects  
---

## Date  
Nov 2024  
---

## Type  
Project Experience, Systems Programming, Learning  
---

## Intro  
Reflections on reimplementing Redis, SQLite, Git, and an HTTP server from scratch as part of the CodeCrafters challenge series.  
---

## Keywords  
- systems programming  
- learning by building  
- Redis  
- SQLite  
- Git  
- HTTP  
- CodeCrafters  
- Go  
- TypeScript  
- protocols  
- databases  
---

## Link  
---

## Content  

As part of the CodeCrafters challenge series, I set out to reimplement foundational developer tools and systems from scratch. These projects served as a hands-on learning experience, helping me deeply understand how technologies like Redis, SQLite, Git, and HTTP servers work under the hood.

Each project was built incrementally without relying on external libraries for the core logic, offering a bottom-up perspective on performance, design, and protocols.

## Projects

### 1. Redis Clone in Go  
[GitHub Repository](https://github.com/khandu-utkarsh/codecrafters-redis-go)

A simplified clone of the Redis in-memory data store implemented in Go.  
This project helped me understand networking, concurrency, and serialization.

**Key Features:**
- Custom event loop using goroutines and channels
- RESP protocol parsing and serialization
- Core commands: `PING`, `ECHO`, `SET`, `GET` with TTL support
- RDB file parsing for persistence
- Basic master-replica replication
- Stream commands and simple transactions with `MULTI`/`EXEC`


### 2. SQLite Clone in Go  
[GitHub Repository](https://github.com/khandu-utkarsh/codecrafters-sqlite-go)

An attempt to reimplement the core behavior of SQLite, focusing on file structure and execution of basic SQL statements.

**What I Learned:**
- Page-based disk I/O and buffer caching
- B-tree implementation for table data
- SQL parsing for `CREATE TABLE`, `INSERT`, `SELECT`
- Manual binary file layout to mimic SQLite’s format


### 3. Git Clone in TypeScript  
[GitHub Repository](https://github.com/khandu-utkarsh/codecrafters-git-typescript)

This project demystified the internal structure of Git by implementing low-level commands and object handling from scratch.

**Highlights:**
- SHA-1 hashing for blobs, trees, and commits
- Git plumbing commands: `init`, `cat-file`, `hash-object`, `commit-tree`
- Manual object serialization and deserialization
- Building commit trees and HEAD reference resolution


### 4. HTTP Server in TypeScript  
[GitHub Repository](https://github.com/khandu-utkarsh/codecrafters-http-server-typescript)

A basic HTTP/1.1 server that can handle routing, headers, and response construction — all built from the ground up.

**Core Concepts Explored:**
- TCP socket handling and request parsing
- Status codes, headers, and MIME types
- Route matching and dynamic responses
- Serving both static and dynamic content

These projects were more than just technical exercises. They provided a structured and practical way to uncover the inner workings of tools we use every day. By building each component from the ground up, I developed a much deeper appreciation for protocol design, file systems, performance trade-offs, and software correctness.

