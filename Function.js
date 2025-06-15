
function ClearALL() {
  document.getElementById("display").value = "";
}

function OFF() {
  //js无法直接关闭浏览器窗口
  window.history.back();
}

function BackSpace() {
  document.getElementById("display").value = document.getElementById("display").value.slice(0, -1);
}

function Remainder() {
  if ((document.getElementById("display").value != "") && (document.getElementById("display").value.includes('%') !== true) && (document.getElementById("display").value.includes('*') !== true) && (document.getElementById("display").value.includes('+') !== true) && (document.getElementById("display").value.includes('-') !== true)) {
    document.getElementById("display").value += "%";
  }
}

function times() {
  if ((document.getElementById("display").value != "") && (document.getElementById("display").value.includes('%') !== true) && (document.getElementById("display").value.includes('*') !== true) && (document.getElementById("display").value.includes('+') !== true) && (document.getElementById("display").value.includes('-') !== true)) {
    document.getElementById("display").value += "*";
  }
}

function Divide() {
  if ((document.getElementById("display").value != "") && (document.getElementById("display").value.includes('%') !== true) && (document.getElementById("display").value.includes('*') !== true) && (document.getElementById("display").value.includes('+') !== true) && (document.getElementById("display").value.includes('-') !== true)) {
    document.getElementById("display").value += "/";
  }
}

function Minus() {
  if ((document.getElementById("display").value != "") && (document.getElementById("display").value.includes('%') !== true) && (document.getElementById("display").value.includes('*') !== true) && (document.getElementById("display").value.includes('+') !== true) && (document.getElementById("display").value.includes('-') !== true)) {
    document.getElementById("display").value += "-";
  }
}

function Add() {
  if ((document.getElementById("display").value != "") && (document.getElementById("display").value.includes('%') !== true) && (document.getElementById("display").value.includes('*') !== true) && (document.getElementById("display").value.includes('+') !== true) && (document.getElementById("display").value.includes('-') !== true)) {
    document.getElementById("display").value += "+";
  }
}

function AddPoint() {
  //先分割
  document.getElementById("display").value.split(/[\+\-\*\/\%]/).forEach(function (part) {
    //检查每个部分是否包含小数点
    if (part.includes('.') || part === "") {
      return; //如果包含小数点，则不添加新的小数点
    } else {
      document.getElementById("display").value += ".";
    }
  }
  );
}
function AddNumber(number) {
  document.getElementById("display").value += number;
}

function Calculate() {
  //先获取当前显示的内容
  let content = document.getElementById("display").value;
  //根据运算符号分割两个数字
  let parts = content.split(/[\+\-\*\/\%]/);
  //如果分割后只有一个部分，说明没有运算符，直接返回
  if (parts.length < 2) {
    alert(content + ":请输入完整的运算式")
  }
  else {
    //获取运算符,判断运算类型
    let operator = content.match(/[\+\-\*\/\%]/);
    if (operator) {
      operator = operator[0];
      let num1 = parseFloat(parts[0]);
      let num2 = parseFloat(parts[1]);
      let result;

      //根据运算符进行计算
      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          if (num2 === 0) {
            alert("除数不能为零");
            return;
          }
          result = num1 / num2;
          break;
        case '%':
          result = num1 % num2;
          break;
        default:
          alert("未知的运算符");
          return;
      }
      //将结果显示在页面上
      document.getElementById("display").value = result;
    } else {
      alert("请输入有效的运算符");
    }
  }
}

