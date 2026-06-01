# 翔安区社会治安大屏

这是一个当前可直接静态运行的前端原型，核心变化有两点：

1. 中间大屏已经接成真实高德地图容器，不再是静态假图。
2. 项目准备了 Git 回滚基础，后续改版可以用提交点快速回退。

## 当前前端结构

- `frontend/index.html`：主页面
- `frontend/.html`：兼容入口，自动跳转到主页面
- `frontend/amap.config.local.example.js`：高德本地配置示例
- `frontend/amap.config.local.js`：本地实际配置文件，默认被 Git 忽略

## 高德地图怎么接

页面已经按高德 JS API 2.0 的推荐方式接好：

- 用 `https://webapi.amap.com/loader.js`
- 用 `AMapLoader.load(...)`
- 用 `AMap.DistrictSearch` 查询并绘制“厦门市翔安区”边界

你还需要自己准备：

1. 高德开放平台的 Web(JS API) Key
2. 对应的 `securityJsCode`

建议流程：

1. 在高德开放平台创建应用。
2. 为应用添加 Web(JS API) Key。
3. 同时拿到安全密钥 `securityJsCode`。
4. 将本地调试域名加入白名单，例如 `localhost`、`127.0.0.1`。
5. 把配置填到 `frontend/amap.config.local.js`，或者直接在页面右上角“地图配置”里保存到浏览器本地。

## 本地启动

不要直接双击用 `file://` 打开，优先用本地 HTTP 服务。

### 用 Python

```powershell
py -m http.server 8000 --directory frontend
```

打开：

```text
http://127.0.0.1:8000
```

### 用 Node

```powershell
npx serve frontend
```

## 为什么建议不要把 Key 直接传到 Git

因为 `securityJsCode` 明文提交到仓库不安全。

当前仓库已经把下面这个文件加入忽略：

```text
frontend/amap.config.local.js
```

这样你可以本地填写真实 Key，但不会被默认提交。

生产环境更推荐按高德官方文档走代理转发，不建议长期明文放前端。

## 回滚怎么做

如果已经初始化 Git，常用回滚方式是：

### 看历史

```powershell
git log --oneline --decorate --graph
```

### 回到上一个提交

```powershell
git checkout <commit-id>
```

### 回到主分支继续开发

```powershell
git switch main
```

### 新功能先开分支

```powershell
git switch -c feat/amap-dashboard
```

## 需不需要上传到 Git 远端

不是“为了回滚必须上传”，本地 Git 提交就已经能回滚。

但如果你还希望：

- 多机同步
- 防止本地磁盘损坏
- 团队协作
- 保留远端备份

那就应该再推到 GitHub、Gitee 或企业 GitLab。

典型流程：

```powershell
git remote add origin <你的仓库地址>
git push -u origin main
```

## 下一步建议

如果要把这个原型继续做成正式项目，建议下一步按这个顺序推进：

1. 把左右两侧演示数据改成真实接口数据。
2. 补一个简单静态服务或前端工程化壳子。
3. 把高德安全密钥改成代理转发方式。
4. 按模块拆分 CSS、地图逻辑和业务数据层。
