### Info

This project is a fork libp2p implementation by Tron protocol
https://github.com/tronprotocol/libp2p

### Build
```
./gradlew clean --refresh-dependencies --write-verification-metadata sha256
./gradlew build
```

### Debug

```
Node A Debug (JDWP 5005)
-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5005
org.tron.p2p.example.StartApp

Node B Debug (JDWP 5006)
-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5006
org.tron.p2p.example.StartApp
-p 18889 -s 127.0.0.1:18888
```