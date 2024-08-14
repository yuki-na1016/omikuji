let num = Math.floor(Math.random() * 11);
console.log(num)

document.getElementById('bird').addEventListener('click', () => {
  if (num >= 7) {
    window.alert('大吉');
  } else if (num >= 3) {
    window.alert('中吉');
  } else if (0 <= num <= 2) {
    window.alert('小吉');
  }
  location.reload()
});

document.getElementById('dog').addEventListener('click', () => {
  if (num >= 7) {
    window.alert('大吉');
  } else if (num >= 3) {
    window.alert('中吉');
  } else {
    window.alert('小吉');
  }
  location.reload()
});

document.getElementById('cat').addEventListener('click', () => {
  if (num >= 7) {
    window.alert('大吉');
  } else if (num >= 3) {
    window.alert('中吉');
  } else if (num <= 2) {
    window.alert('小吉');
  }
  location.reload()
});

document.getElementById('tanuki').addEventListener('click', () => {
  if (num >= 7) {
    window.alert('大吉');
  } else if (num >= 3) {
    window.alert('中吉');
  } else if (num <= 2) {
    window.alert('小吉');
  }
  location.reload()
});
// if （条件式1） {
//   条件式1が成り立った場合処理を実行
// } else if（条件式2） {
//   条件式2が成り立った場合処理を実行
// }

// document.getElementById('bird').addEventListener('click', () => {
//   window.alert('bird')
// });
