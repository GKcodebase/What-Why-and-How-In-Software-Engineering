---
title: "Why gRPC Is Fast"
date: 2026-02-10
categories: ["Why"]
tags: ["grpc", "microservices"]
summary: "Explains why gRPC outperforms REST in distributed systems."
---


In modern distributed systems, performance is critical. gRPC (gRPC Remote Procedure Call) has emerged as a high-performance alternative to REST. But *why* is it faster?

## 1. Protocol Buffers (Protobuf)

Unlike REST, which typically uses JSON (text-based), gRPC uses **Protocol Buffers** (binary).

*   **Smaller Payload:** Binary data is significantly smaller than JSON text.
*   **Faster Serialization:** Parsing binary data is much faster than parsing JSON strings.
*   **Strong Typing:** The schema is defined upfront in `.proto` files.

## * 2. HTTP/2 Transport

gRPC is built on **HTTP/2**, which introduces several performance optimizations over HTTP/1.1:

*   **Multiplexing:** Multiple requests can be sent over a single TCP connection.
*   **Header Compression (HPACK):** Reduces overhead by compressing headers.
*   **Server Push:** The server can push resources to the client before they are requested.

## Code Example

Here is a simple `.proto` definition:

```protobuf
service Greeter {
  rpc SayHello (HelloRequest) returns (HelloReply) {}
}

message HelloRequest {
  string name = 1;
}

message HelloReply {
  string message = 1;
}
```

## Conclusion

By combining binary serialization (Protobuf) with an efficient transport protocol (HTTP/2), gRPC achieves lower latency and higher throughput, making it ideal for microservices communication.
