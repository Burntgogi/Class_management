# 🏫 학급 경영 프로그램 모음 (Class Management Collection)

선생님들의 학급 경영을 돕기 위해 제작된 웹 애플리케이션 모음입니다.  
현재 **청소구역 배정 프로그램**이 포함되어 있으며, 개발자의 다른 개인 프로젝트들도 연결되어 있습니다.

---

## ✨ 주요 기능

### 1. 포털 페이지 (Home)
- **개발자 소개**: 제작자(교사 박준민) 정보 및 연락처 제공.
- **프로그램 목록 구분**:
    - **학급 경영 프로그램**: 청소구역 배정 등 학교 현장용 프로그램.
    - **개인 개발 프로젝트**: 대구 날씨 앱, SAT 어휘 학습 앱 등 외부 링크 연결.

### 2. 청소구역 배정 프로그램 (Cleaning Assignment)
- **공정한 랜덤 배정**: 버튼 한 번으로 학생들을 구역에 랜덤 배정합니다.
- **다양한 옵션**:
    - **1인 1역 / 다인 1역**: 구역별 인원 자유 설정.
    - **결석생 제외**: 클릭 한 번으로 결석생을 배정에서 제외.
    - **이전 기록 겹침 방지**: 지난 배정 결과와 겹치지 않도록 최적의 배정 탐색.
- **효과 및 연출**: 카운트다운, 결과 발표 빵빠레 효과 등으로 학생들의 흥미 유발.
- **인쇄 최적화 (Smart Print)**:
    - 인쇄 시 불필요한 배경/버튼 자동 숨김.
    - 학생 수에 따라 표 크기와 폰트를 자동 조절하여 **항상 A4 1페이지**에 출력되도록 최적화.
- **데이터 관리**:
    - 배정 결과를 **파일(.json)로 저장**하고 언제든 다시 불러와서 확인 가능.
    - 브라우저에 개인정보를 남기지 않는 안전한 파일 기반 저장 방식.

---

## 🛠 기술 스택 (Tech Stack)

- **FrameWork**: React (Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, DaisyUI (Local Installation)
- **Routing**: react-router-dom
- **Effects**: canvas-confetti, Web Audio API (Tone generation)

---

## 📂 프로젝트 구조 (Structure)

```
c:/work/11/
├── src/
│   ├── components/       # 재사용 가능한 UI 컴포넌트 (Inputs, Results, Settings 등)
│   ├── hooks/            # 비즈니스 로직 분리 (useAssignment, usePersistence 등)
│   ├── pages/            # 페이지 단위 컴포넌트
│   │   ├── HomePage.tsx      # 메인 포털 화면
│   │   └── CleaningPage.tsx  # 청소 배정 앱 메인
│   ├── types.ts          # TypeScript 타입 정의
│   ├── App.tsx           # 라우팅 설정
│   └── index.css         # 전역 스타일 및 인쇄(@print) 설정
└── ...config files
```

---

## 🚀 설치 및 실행 (Installation)

이 프로젝트는 Node.js 환경에서 실행됩니다.

1. **의존성 설치**
   ```bash
   npm install
   ```

2. **개발 서버 실행**
   ```bash
   npm run dev
   ```

3. **배포용 빌드**
   ```bash
   npm run build
   ```

---

## ℹ️ 저작권 및 안내 (Copyright)

- **제작자** : 교사 박준민 (junmini84@daegun.hs.kr)
- **저작권** : 해당 제작물의 저작권은 교사 박준민과 ARG에 있습니다.
- **AI 안내** : 본 페이지와 코드는 AI를 기반으로 제작되었습니다.
- **참고** : 이 코드는 학습 및 공익 목적으로 공개된 것이며, 상업적 이용이나 무단 전재를 금합니다.
