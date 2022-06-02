# ✨KB헬스케어 그룹 과제✨


# 🚀 배포

[![Netlify Status](https://api.netlify.com/api/v1/badges/8c963488-351b-41d4-9152-60535ac564b2/deploy-status)](https://kbhealth.netlify.app/)


# 🗣 팀 구성(8명)

__김소형, 이주형, 이종길, 제준영, 도진경, 이서현, 홍원배, 이준혁__

# 📝 진행 과정

1일) 과제 스펙확인, 레이아웃, 데이터 정제 및 구현

2일) 리팩토링, CSS 수정, 배포, README 작성


# 🔧 기술 스택

- Typescript
- React
- Redux-toolkit
- Victory
- react-minimal-pie-chart
- Axios
- SCSS

## 폴더 구조


```sh
📦src
 ┣ 📂assets
 ┃ ┗ 📂svgs # SVG 아이콘 모아놓은 폴더
 ┣ 📂components # 컴포넌트를 모아놓은 폴더
 ┃ ┣ 📂healthCare # 맞춤 건강관리 폴더
 ┃ ┣ 📂healthScore # 건강 점수 폴더
 ┃ ┣ 📂healthScoreChart # 건강정보 차트 폴더
 ┃ ┗ 📂layout # 레이아웃 폴더
 ┣ 📂hooks # redux dispatch, selector와 axios를 위한 hook
 ┣ 📂routes # 페이지별로 렌더링 화면을 보는 폴더
 ┣ 📂services  # 데이터 불러오는 컴포넌트
 ┣ 📂states # 상태관리 리덕스 설정을 위한 slice, store, ts 등의 파일이 있는 폴더
 ┣ 📂styles # CSS 스타일을 위한 폴더
 ┣ 📂types # Typescript 정의 파일
 ┗ 📂utils # data format 해주는 유틸 파일이 있는 폴더

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

## 1. JSON데이터 활용
JSON파일을 public/data에 저장하고 axios를 사용하여 데이터를 불러와 사용 하였습니다. 
JSON파일 하나로 필요한 컴포넌트 별로 필요한 데이터들을 리덕스에서 정제하여 사용하였습니다.

## 2. 사용자 건강점수 그래프 구현
기본정보 및 건강점수는 axios로 가져온 데이터들을 활용하여 넣어주었고
react-minimal-pie-chart 라이브러리를 사용하여 점수 그래프를 그려주었습니다.

## 3. 건강점수 분석 결과 그래프 구현
Victoryjs 라이브러리를 활용하여 구현하였고
각 항목에 주어진 건강점수를 받아와 각 데이터를 비교하여 화면에 출력 하였습니다. 

## 4. 맞춤 건강 관리 리스트 구현
사용자에 맞는 맞춤 건강 관리 데이터를 가져와 1~8까지의 리스트로 구현하였습니다.



# 📸 구현 결과

|홈화면|건강관리그래프|
|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/91236732/171620438-6f2a7265-e846-4fbe-9bbe-31e2edfb5d84.png" width="350"/>|<img src="https://user-images.githubusercontent.com/91236732/171620446-d291c993-eed5-4314-ac24-4322c39ff7e9.png" width="350"/>|

|맞춤건강관리| 화면구성|
|:---:|:---:|
<img src="https://user-images.githubusercontent.com/91236732/171620448-7e1d9833-68a1-4523-b0f0-344433bb1a02.png" width="350"/>|<img src="https://user-images.githubusercontent.com/91236732/171621840-9b7c3616-1600-4733-956c-520fbf49fee2.gif" width="350"/>|


#  ✏️ 어려웠던 점

## 1. Victory 차트 label활용

Victory차트를 활용하여 라벨, 바차트, 라인 그래프를 한 곳에서 그려주는 과정에서 라벨이 중복으로 나와 style을 주는 과정에서 어려움을 느꼈습니다. 원하지 않던 차트에서 나오는 라벨 이외에 style에 transparent를 주어 라벨을 안보이게 만들어서 해결 하였습니다.

## 2. JSON 데이터 정제하여 활용하기

차트에 맞춰 기존에 있던 Json 데이터를 사용하는 과정에서 string 값으로 된 배열이 있어 정규식과 각 배열을 ',' 기준으로 잘라서 해결하였습니다. 
