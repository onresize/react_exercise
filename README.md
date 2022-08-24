## 工程启动指南

1. npm install
2. npm run start

## git commit 指南

```bash
<类型>[可选 范围]: <描述>
```

### commit 类型

- feat: 新增特性或功能
- fix: 修复问题
- docs: 修改文档
- style: 修改代码格式
- perf: 性能优化
- chore: 构建过程或者辅助工具的变动
- merge: 代码合并
- refactor: 代码重构，不引入新功能和修复问
- test: 新增、修改测试用例
- revert: 回滚某个更早之前的提交
- sync: 同步主线或分支的 Bug
- ci: 与 CI(持续集成服务)有关的改动
- build: 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交

### commit 范围

本次 commit 影响的范围（可选）

### commit 描述

本次 commit 的简短描述，结尾不加句号或者其他标点符号

根据以上 git commit 指南，将是如下的格式：

```bash
feat: 登录界面开发
fix: 购物车计算
```