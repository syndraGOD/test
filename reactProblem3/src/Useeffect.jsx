import { useEffect, useRef, useState } from "react";

const Useeffect = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("홍길동0");
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const increment = () => {
    //함수안에 일괄처리 ( 동시 실행 되기떄문에 setcount(count+1) * 3줄을 입력해도 안됨)
    // setCount(매개변수 => {return 반환값})
    setCount((x) => {
      return x + 1;
    });
    setCount(count + 1);
    setCount(count + 1);
    ref1.current.style.backgroundColor = "lime";
    ref2.current.style.backgroundColor = "yellow";
  };
  const decrement = () => {
    setCount(count - 1);
    ref1.current.style.backgroundColor = "pink";
    ref2.current.style.backgroundColor = "blue";
  };

  const onName = () => {
    const num = Math.floor(Math.random() * 10);
    setName("홍길동" + num);
    ref1.current.style.backgroundColor = "lime";
    ref2.current.style.backgroundColor = "yellow";
  };

  //화면에 그려진후
  useEffect(() => {
    console.log("ㅎㅇ");
    ref1.current.style.backgroundColor = "tomato";
    ref2.current.style.backgroundColor = "skyblue";
  }, [count]);
  return (
    <div style={{ fontSize: 40 }}>
      <h2>useEffect/useLayoutEffect</h2>
      <h2 ref={ref1}>useEffect</h2>
      <h2 ref={ref2}>useLayoutEffect</h2>
      <h2>숫자 : {count}</h2>
      <h2>이름 : {name}</h2>
      <p>
        <button onClick={increment}>증가</button>
        <button onClick={decrement}>감소</button>
        <button onClick={onName}>이름</button>
      </p>
    </div>
  );
};

export default Useeffect;

// React의 class 생명주기 메서드에 친숙하다면,
// useEffect Hook을
// componentDidMount와 : 처음시작 한번
// componentDidUpdate, : 갱신, 수정 랜더링될때마다
// componentWillUnmount가  : 닫기할때
// 합쳐진 것으로 생각해도 좋습니다.

/*

사용범위
1. props를 받아서 갱신(업데이트 할때) // 제일 중요
2. state가 변경될때 (useState) // 주력x
3. 시간처리( 타이머 )
4. 외부 라이브러리 (비디오 등) - 수업시간에 x

문제 : 메무리 누수가 발생한다

정리(clean-up)를 이용하는 Effects
위에서 정리(clean-up)가 필요하지 않은 side effect를 보았지만, 
정리(clean-up)가 필요한 effect도 있습니다. 
외부 데이터에 구독(subscription)을 설정해야 하는 경우를 생각해보겠습니다. 
이런 경우에 메모리 누수가 발생하지 않도록 정리(clean-up)하는 것은 매우 중요합니다.

형식)
1) 화면에 그려진후 한번 실행, 갱신시 마다 계속 실행
사용하지 말자
useEffect(()=>{
    실행문
    })
2) 화면에 그려진 후 오직 한번만 실행
useEffect(()=>{
    실행문
    }, 의존형)
3) 화면에 그려진 후 오직 한번만 실행
의존값이 업데이트할때마다 실행
useEffect(()=>{
    실행문
    },[의존값]) => props ***, state

4) 화면에 그려진 후 한번만 실행,
의존값이 업데이트할때마다 실행 + 뒷정리
useEffect(()=>{
    실행문
    return() => {
        정리내용
    }
},[의존값 : props ***, state ])

    useEffect : 렌더링 된 후
    useLayoutEffect : 렌더링 전

    useEffect 안될때 useLayoutEffect



*/
