export interface ExperienceItem {
  period: string;
  title: string;
  organization: string;
  description: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  highlights: string[];
  techStack: string[];
  link?: string;
}

export interface EducationItem {
  period: string;
  institution: string;
  major?: string;
  description?: string[];
}

export const resumeData = {
  profile: {
    name: "김부성",
    title: "Full-Stack Developer",
    location: "Daegu, Korea",
    email: "quiopw0303@naver.com",
    github: "https://github.com/qntjd",
    portfolio: "https://fantasy-lantern-ab6.notion.site/269c742ff8b7808985a8fabf264387c1?source=copy_link",
    blog: "https://i-must-studying.tistory.com/",
    summary:
      "React와 TypeScript 기반 프론트엔드와 Spring, FastAPI 백엔드 개발 경험을 보유한 개발자입니다."
  },

  techStack: {
    frontend: ["React", "TypeScript", "HTML", "CSS", "JavaScript"],
    backend: ["Spring", "FastAPI", "Java"],
    database: ["MySQL"],
    tools: ["Git", "Docker", "Notion"]
  },

  experience: [
    {
      period: "2024.03 - 2024.06",
      title: "백엔드 개발",
      organization: "팀 프로젝트",
      description: [
        "Spring 기반 REST API 설계 및 구현",
        "JWT 인증 로직 구현",
        "배포 환경에서 발생한 오류 분석 및 해결",
      ],
    },
    {
      period: "2023.09 - 2023.12",
      title: "웹 서비스 개발",
      organization: "개인 프로젝트",
      description: [
        "FastAPI 기반 문서 요약 API 개발",
        "PDF 업로드 및 처리 기능 구현",
        "Swagger 기반 API 문서화",
      ],
    },
  
  ],

  projects: [
    {
      title: "AI 문서 요약 웹 서비스",
      description:
        "PDF 문서 업로드부터 요약 결과 제공까지의 전체 흐름을 API로 설계한 문서 요약 웹 서비스",
      highlights: [
        "FastAPI 기반 REST API 설계로  프론트엔드와 명확한 역할 분리",
        "PDF 구조 차이로 인한 텍스트 추출 불안정 문제를 단계별 파이프라인으로 해결",
        "텍스트 추출 → 전처리 → 요약까지 이어지는 문서 처리 흐름 설계",
        "Swagger를 활용한 API 문서화로 협업 및 확장성 확보"
      ],
      techStack: [
        "FastAPI",
        "Python",
        "REST API",
        "PDF Processing",
        "Swagger(OpenAPI)"
      ],
      link: "https://github.com/qntjd/AI-Doc.git",
    },
    {
      title: "AI 음악 생성 시스템",
      description: "사용자가 장르, 무드, 길이를 선택하면 텍스트 기반 AI 모델이 음악을 자동 생성하고, 생성 진행 상황을 실시간으로 보여주는 웹 서비스",
      highlights: [
        "Meta Audiocraft(MusicGen) 기반 텍스트 → 음악 생성 기능 구현",
        "Flask + Server-Sent Events(SSE)를 이용한 음악 생성 진행률 실시간 스트리밍",
        "Hugging Face 사전학습 모델을 활용한 별도 데이터셋 없이 음악 생성 시스템 구축"
      ],
      techStack: [
        "Python",
        "Flask",
        "Audiocraft (MusicGen)",
        "Hugging Face Transformers",
        "PyTorch",
        "HTML/CSS/JavaScript",
        "Server-Sent Events (SSE)"
      ],
      link: "https://github.com/qntjd/team-golila.git",
    },
    {
      title: "Spring 채팅 서버",
      description: "실시간 메시징을 위한 백엔드 서버",
      highlights: [
        "WebSocket 기반 실시간 채팅 구현",
        "JWT 인증 적용",
        "동시 접속 테스트 및 성능 개선",
      ],
      techStack: ["Spring", "Java", "WebSocket", "JWT"],
      link: "https://github.com/qntjd/Ascent.git",
    },
  ],

  education: [
    {
      period: "2020.03 - 2026.02",
      institution: "대구대학교",
      major: "컴퓨터 정보공학부_소프트웨어 전공",
      description: [
        "자료구조, 운영체제, 네트워크 등 전공 이수",
        "팀 프로젝트 기반 웹 서비스 개발 경험",
      ],
    },
  ],

  summary: 
    "프론트엔드 구조와 사용자 흐름을 우선적으로 고려하고, " +
    "Spring과 FastAPI 기반의 백엔드 API로 이를 안정적으로 구현해온 개발자입니다. " +
    "웹 서비스 전반의 완성도를 높이는 데 집중합니다.",
  
};
