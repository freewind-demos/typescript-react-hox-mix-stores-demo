TypeScript React Hox Mix Stores Demo
=================================

使用多个非global store一起管理状态。

注意，报错：
```
useStore1.ts:9 Uncaught TypeError: Cannot destructure property 'version' of 'useStore2(...)' as it is undefined.
    at useStore1.ts:9:5
    at hox.js?v=d75d37a9:226:22
    at renderWithHooks (react-dom.js?v=d75d37a9:11128:26)
    at updateFunctionComponent (react-dom.js?v=d75d37a9:12953:28)
    at updateSimpleMemoComponent (react-dom.js?v=d75d37a9:12853:18)
    at updateMemoComponent (react-dom.js?v=d75d37a9:12784:22)
    at beginWork (react-dom.js?v=d75d37a9:14092:22)
    at HTMLUnknownElement.callCallback2 (react-dom.js?v=d75d37a9:3738:22)
    at Object.invokeGuardedCallbackDev (react-dom.js?v=d75d37a9:3763:24)
    at invokeGuardedCallback (react-dom.js?v=d75d37a9:3797:39)
```

```
npm install
npm start
```

It will open page on browser automatically.
