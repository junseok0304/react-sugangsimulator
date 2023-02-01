//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <br></br>
      <br></br>
      <br></br>
      <div class="box-layout">
      <img src={require('./logo.png')} alt='1'></img>
            <h1>"모의" 수강신청시스템 로그인</h1><h3>모의사이트라 그냥 로그인 누르시면 됩니다.</h3>
              <label>아이디</label>
              <input type="text" class="input-id" id="input-id" placeholder="아이디를 입력하세요(아이디는 학번입니다.)"></input>
              <br></br>
              <br></br>
              <label>패스워드</label>
              <input type="text" class="input-pw" id="input-pw" placeholder="패스워드를 입력하세요."></input>
              <br></br>
              <br></br>
              <button type="button" class="btn-login" id="btn-login" onclick="location.href='./main.html'">로그인</button>
              <div class="login-link">
              <a href="./index.html" onclick="alert('아직 준비중인 기능입니다.')">비밀번호 초기화</a>
          </div>
        </div>
      <h1>Hello World</h1>
    <footer>Modified Copyright ⓒ SungGongHoe Univ. All rights reserved.</footer>
    <h1>Hello World</h1>
    <h1>Hello World</h1>
    <h1>Hello World 테스트 빌드입니다.</h1>
    </div>
  );
}

export default App;
