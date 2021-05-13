const username = document.querySelector('#username');
const password = document.querySelector('#password');
const form = document.querySelector('#form');

function login(event) {
  event.preventDefault();
  window.location = 'products.html';
  // 以下為示範程式碼
  // const api = 'http://localhost:3000/admin/signin';
  // const user = {
  //   username: username.value,
  //   password: password.value,
  // }
  // axios.post(api, user).then((response) => {
  //   if(response.data.success){
  //     const { token, expired } = response.data;
  //     // 寫入 cookie token
  //     // expires 設置有效時間
  //     document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`;
  //     window.location = 'products.html';
  //   } else {
  //     alert(response.data.message);
  //   }
  // }).catch((error) => {
  //   console.log(error);
  // });
}

form.addEventListener('submit', login)
