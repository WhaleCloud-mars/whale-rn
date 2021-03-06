# Toast使用说明
一种轻量级反馈/提示，可以用来显示一些提示内容。

## 代码演示

```js
import { Toast } from './Toast';

······

Toast.toastSuccess(text, time, side);
Toast.toastFail(text, time, side);
Toast.toastWarn(text, time, side);
Toast.toastText(text, time, side);

······
// 仅当time参数为none或0时，close函数有效
Toast.close();
```

## 属性
| 属性 | 类型 | 默认值 | 说明 |
| - | :-: | :-: | :-: |
| time | String、Number | `short` | `long`/`short`/`none`<br>具体时间（单位：ms）<br>`long`为`3500ms`<br>`short`为`2000ms`<br>`none`或`0`为手动关闭 |
| text | String | `成功`、`失败`、`警告`或`消息` | - |
| side | String | `center` | `top`/`bottom`/`center` |