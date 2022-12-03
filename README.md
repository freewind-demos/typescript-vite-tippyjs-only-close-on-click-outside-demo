TypeScript Vite Tippyjs Only Close on Click Outside Demo
===========================

在Tippy中有一个需求很难实现： 通过hover打开一个tooltip，之后需要它一直显示，直到在tooltip之外点击了鼠标才能关闭。

tippy的实现是：
1. 如果是click打开，则可实现需要行为
2. 如果是mouseenter，则离开trigger后会关闭
3. 如果是mouseenter+mouseleave，虽然离开后不会关闭，但是一旦鼠标划过tooltip再离开，就会关闭

最终找到的办法是trigger用`manual`，同时手动添加mouseenter的handler

```
npm install
npm start
```
