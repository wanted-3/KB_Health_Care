# ✨KB헬스케어 그룹 과제✨


# 🚀 배포

<!-- [![Netlify Status](https://api.netlify.com/api/v1/badges/8c963488-351b-41d4-9152-60535ac564b2/deploy-status)](https://moadata.netlify.app/) -->


# 🗣 팀 구성(8명)

__김소형, 이주형, 이종길, 제준영, 도진경, 이서현, 홍원배, 이준혁__

# 📝 진행 과정

1일) 과제 스펙확인, 레이아웃 구성, 데이터 분석

2일) 마이헬스, 건강 점수 분석 결과 차트, 맞춤 건강관리 구현,  리팩토링

3일) 리팩토링, Css수정, 배포, README 작성


# 🔧 기술 스택

- Typescript
- React
- Redux-toolkit
- React-router-dom
- Victory
- react-minimal-pie-chart
- Axios
- Dayjs
- SCSS

## 폴더 구조

```sh
src
│
├─ data  # 초기 JSON 데이타 파일이 있는 폴더
├─ assets
│      └─svgs  # 회원 및 상세 차트(search, userDetail)
├─ hooks # redux dispatch, selector와 axios를 위한 hook
├─ components  # 컴포넌트를 모아놓은 폴더
│     ├─ graph  # 각 컴포넌트별 그래프 모아놓은 폴더 
│     ├─ health  # 사용자에 대한 데이터를 사용한 폴더   
│     ├─ home  # 홈화면 폴더
│     └─ layout  # 레이아웃 폴더
├─ routes # 페이지별로 렌더링 화면을 보는 폴더
│     ├─ Home  # 홈 화면 컴포넌트
│     ├─ Health # 사용자 데이터 뿌려주는 컴포넌트
│     └─ Graph # 그래프 컴포넌트
├─ services # 데이터 불러오는 컴포넌트
├─ states  # 상태관리 리덕스 설정을 위한 slice, store, ts 등의 파일이 있는 폴더
├─ styles  # CSS 스타일을 위한 폴더
├─ types  # Typescript 정의 파일
└─ utils  # data format 해주는 유틸 파일이 있는 폴더

```

# 📌 실행 방법

## 1. 설치
```
git clone https://github.com/wanted-3/KB_Health_Care.git
```
```
yarn install && yarn start
``` 

## 2. 화면 구성
  - 마이헬스
  - 건강점수 분석 결과
  - 맞춤 건강관리
  

# 💡 구현 내용

## 1. 사용자 건강점수 그래프 구현
기본정보 및 건강점수는 axios로 가져온 데이터들을 활용하여 넣어주었고
react-minimal-pie-chart 라이브러리를 사용하여 점수 그래프를 그려주었습니다.

## 2. 건강점수 분석 결과 그래프 구현
Victoryjs 라이브러리를 활용하여 구현하
각 항목에 주어진 건강점수를 받아와 항목끼리 비교하여 화면에 데이터를 출력 하였습니다. 

## 3. 맞춤 건강 관리 리스트 구현
사용자에 맞는 맞춤 건강 관리 데이터를 가져와 1~4까지의 리스트로 구현하였습니다.

## 4. JSON데이터 활용
JSON파일을 public/data에 저장하고 axios를 사용하여 데이터를 불러와 사용 하였습니다. 



## 5. 데이터 필터를 통해 아이템 정렬
아이디, 회원번호와 회원 가입 날짜(datepicker 사용)를 이용하여 데이터를 필터링하여 보여줄 수 있도록 하였습니다.
원하는 정보 값을 입력한 후 검색 버튼을 클릭하면 데이터가 필터링 됩니다.
필터 리셋하기를 누른다면 한 번에 필터를 리셋 가능합니다.


# 📸 구현 결과

|로그인|회원 관리|
|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/63532503/171318084-04b2c5cd-9873-4ad0-847f-3257f69e6e81.gif" width="350"/>|<img src="https://user-images.githubusercontent.com/63532503/171318274-88ae890e-e991-4fee-9451-6a4f752ebe9c.gif" width="350"/>|

|회원 상세| |
|:---:|:---:|
<img src="https://user-images.githubusercontent.com/63532503/171318347-f9982117-09e1-434e-88d8-41b7540555df.gif" width="350"/>| |

#  ✏️ 어려웠던 점

## 1. 차트 날짜 필터링

차트를 활용하기 위해서 필요한 데이터를 리듀서해서 필터링 하여 전달하는 과정

## 2. 데이터 형식 정하기

다른 데이터에서 활용하기 위해 받아올 데이터의 형식을 정하는 과정 
