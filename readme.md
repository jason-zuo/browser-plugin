### ekt-plugin

#### 一、npm包介绍

##### 1、Extension-Streams

> 对浏览器的通信api再封装

```LocalStream.send(msg)```
```LocalStream.watch(cb)```
```EncryptedStream的方法```

##### 2、密码存储经过加密生成seed，并且存入storage

##### 3、私钥经过seed加密存入storage， 当页面向插件通信的时候接受msg并且还原私钥加密，在background.js中只传输加密过后的数据,在页面的js中解密。(放在外部访问不了的环境中)
