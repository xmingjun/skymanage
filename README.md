## TIM-uniapp 使用说明

简介：使用uniapp 对接腾讯云IM功能实现基于uniapp的多端即时通讯，一套代码开发ios/安卓/h5 的即时通讯功能

#### 运行环境

- node 11.11.0
- HbuilderX 

#### 启动项目

```
git clone https://github.com/cometang/tim-uniapp.git

npm install 

使用HbuilderX打开后即可运行[支持 APP 小程序 h5]
```

#### 开发注意事项

##### 1.替换腾讯云SDKAPPID以及SECRETKEY

```
将commen/tim/tim.js 中 SDKAPPID以及 SECRETKEY 替换为自己的服务相关账户
自带账号只是作为体验使用。
```



![avatar](https://raw.githubusercontent.com/cometang/tim-uniapp/master/document/image/sdkAppId.png)

##### 2.修改基础用户数据

```
将 commen/tim/user.js 中的用户数据替换为自己在腾讯云IM控制台生成的用户信息及用户秘钥
控制台手动生成用户秘钥注意使用 “userId” 字段生成。
正式开发有后端可以直接通过后端接口直接生成userSign，走接口就不需要手动在控制台生成用户秘钥。
```

![avatar](https://github.com/cometang/tim-uniapp/blob/master/document/image/userSign.png?raw=true)

##### 3.注意TIM的动态监听--数据动态更新问题

```
App.vue 中写入了一些常用的监听事件，如有新的消息，会话列表动态更新等，其他的更多的监听事件可以按按需接入。
```

#### 未完成功能

- 发送文件语音图片（通过发送TIM的自定义消息可以解决，多端开发时不建议使用cos）
- 黑名单 （TIM支持黑名单功能，TIM有现成的api）
- 添加好友 （好友相关的功能只能做到自己的数据库里面，TIM是不支持好友关系建立的）
- 群组聊天（群聊功能和私聊实现非常类似，将消息类型由“C2C”更改为“GROUP”即可）

#### 点赞支持一下

- 项目地址 https://github.com/cometang/tim-uniapp.git  点赞支持一下吧

