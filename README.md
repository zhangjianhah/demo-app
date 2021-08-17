# README
本项目使用rekit搭建
#  前提步骤
1. 安装node
2. 安装rekit
   ```npm install -g rekit```

3. 使用rekit构建服务并运行

````
rekit create app-name
cd app-name
npm install
npm start
````

以上是rekit，现在默认不会带有rekit studio,如果需要，请自行安装

```

#如果下载速度较慢，可以在后面加上 --registry=https://registry.npm.taobao.org
#也可以直接配置npm config set registry https://registry.npm.taobao.org，这样以后所有安装默认走淘宝的镜像
npm install -g rekit-studio --registry=https://registry.npm.taobao.org


```

安装完毕后，可以执行``rekit-studio -p 3020``指定接口并运行。当然，也可以不带端口，那样会默认启动一个端口。





## 安装失败

如果安装rekit-studio失败，可以执行以下操作。

1. 安装python

2. 安装window构建工具

   ```sh
   #这里需要用管理员是身份运行，推荐用powershell
   npm install --global --production windows-build-tools
   ```

   如果这个安装速度比较慢，也可以<[https://download.visualstudio.microsoft.com/download/pr/11503713/e64d79b40219aea618ce2fe10ebd5f0d/vs_BuildTools.exe ](https://download.visualstudio.microsoft.com/download/pr/11503713/e64d79b40219aea618ce2fe10ebd5f0d/vs_BuildTools.exe)>下载，安装node相关配置，在重新执行安装。

3. sadfa



# 集成 antd

1. 安装antd 和babel

   ```sh
   npm install antd babel-plugin-import --save
   ```

   

2. 在根目录中新生成的**babel.config.js**中的plugins中添加以下内容

   ```js
   ['import', {
         libraryName: 'antd',
         style: 'css'
     }]
   ```

   整体展示如下

   ```js
   module.exports = function(api) {
     const presets = ['react-app'];
     const plugins = [
       ['import', {
         libraryName: 'antd',
         style: 'css'
     }]
     ];
     if (api.env('development')) {
       plugins.push('react-hot-loader/babel');
     }
     return { presets, plugins };
   };
   
   ```

   

3. 执行``npm install``,然后执行``npm start``启动

   # 开发

# 开发

## 1.路由配置

所有的路由都在route.js中，路径配置有两种

```

# 直接写死路径，但是要引入feature模块的地址，不然不会展示
#不加任何内容，那么默认从当前feature开始
    { path: '/video/default', component: DefaultPage },
    { path: 'test1', component: Test1 },
```

# 打包部署
1. 执行``npm run build``编译项目，默认会打包到当前项目所在的目录下的build文件夹中

2. 配置nginx配置

   ```
   location / {
               #root   html;
               #index  index.html index.htm;
   
               root   E:/nodespace/demo-app/build;
   
               try_files $uri $uri/ /index.html last;
               index  index.html;
               add_header Access-Control-Allow-Origin *;
   
   
   			# 如果有其他的服务就这样配置
               location /video/ {
                  proxy_pass http://127.0.0.1:8080;
               }
   
           }
   ```

   

3. 士大夫



# 