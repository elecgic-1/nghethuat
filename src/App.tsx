import React, { useState } from 'react';
import {
  BookOpen,
  Check,
  RotateCcw,
  AlertCircle,
  HelpCircle,
  ChevronLeft,
  SkipForward,
  Trophy,
  Award,
} from 'lucide-react';

// Image paths for Question 1 (Landmarks)
const IMG_SYDNEY = '/src/assets/images/sydney_opera_house_1791509675649.jpg';
const IMG_EIFFEL = '/src/assets/images/eiffel_tower_paris_1791509701662.jpg';
const IMG_CHUA_MOT_COT = '/src/assets/images/chua_mot_cot_hanoi_1791509726278.jpg';

// Image paths for Question 2 (Original authentic paintings - không vẽ lại)
const IMG_EM_THUY = '/src/assets/images/em_thuy_original.jpg';
const IMG_THIEU_NU = '/src/assets/images/thieu_nu_ben_hoa_hue_original.jpg';
const IMG_MONA_LISA = '/src/assets/images/mona_lisa_original.jpg';

// Image paths for Question 3 (Original authentic chèo stage photographs - ảnh thật không dùng AI)
const IMG_THI_MAU = '/src/assets/images/cheo_thi_mau_original.jpg';
const IMG_THUY_VAN = '/src/assets/images/cheo_thuy_van_original.jpg';

// Image paths for Question 4 (Original authentic sculptures - tác phẩm điêu khắc thật không dùng AI)
const IMG_BAC_HO_MO = '/src/assets/images/bac_ho_cong_nhan_mo_original.jpg';
const IMG_NEM_DIA = '/src/assets/images/nguoi_nem_dia_myron_original.jpg';
const IMG_SUY_TUONG = '/src/assets/images/nguoi_suy_tuong_rodin_original.jpg';

// Image paths for Question 5 (Văn học - không chú thích)
const IMG_VAN_HOC_1 = '/src/assets/images/van_hoc_nhung_nguoi_khon_kho_original.jpg';
const IMG_VAN_HOC_2 = '/src/assets/images/van_hoc_sach_3d_1791937368394.jpg';
const IMG_VAN_HOC_3 = '/src/assets/images/van_hoc_sach_2d_1791937391660.jpg';

interface TeamConfig {
  id: number;
  colorKey: 'red' | 'green' | 'blue' | 'yellow' | 'orange' | 'pink';
  defaultName: string;
  name: string;
  score: number;
  theme: {
    border: string;
    borderActive: string;
    borderFocus: string;
    ring: string;
    glow: string;
    dotBg: string;
    dotRing: string;
    scoreBg: string;
    scoreText: string;
    activeBg: string;
  };
}

const INITIAL_TEAMS: TeamConfig[] = [
  {
    id: 1,
    colorKey: 'red',
    defaultName: 'Đội 1',
    name: 'Đội 1',
    score: 0,
    theme: {
      border: 'border-red-500/40',
      borderActive: 'border-red-500',
      borderFocus: 'focus:border-red-500',
      ring: 'focus:ring-red-500/25',
      glow: 'shadow-red-500/20',
      dotBg: 'bg-red-500',
      dotRing: 'ring-red-500/20',
      scoreBg: 'bg-red-500/10',
      scoreText: 'text-red-400',
      activeBg: 'bg-red-500/15',
    },
  },
  {
    id: 2,
    colorKey: 'green',
    defaultName: 'Đội 2',
    name: 'Đội 2',
    score: 0,
    theme: {
      border: 'border-emerald-500/40',
      borderActive: 'border-emerald-500',
      borderFocus: 'focus:border-emerald-500',
      ring: 'focus:ring-emerald-500/25',
      glow: 'shadow-emerald-500/20',
      dotBg: 'bg-emerald-500',
      dotRing: 'ring-emerald-500/20',
      scoreBg: 'bg-emerald-500/10',
      scoreText: 'text-emerald-400',
      activeBg: 'bg-emerald-500/15',
    },
  },
  {
    id: 3,
    colorKey: 'blue',
    defaultName: 'Đội 3',
    name: 'Đội 3',
    score: 0,
    theme: {
      border: 'border-blue-500/40',
      borderActive: 'border-blue-500',
      borderFocus: 'focus:border-blue-500',
      ring: 'focus:ring-blue-500/25',
      glow: 'shadow-blue-500/20',
      dotBg: 'bg-blue-500',
      dotRing: 'ring-blue-500/20',
      scoreBg: 'bg-blue-500/10',
      scoreText: 'text-blue-400',
      activeBg: 'bg-blue-500/15',
    },
  },
  {
    id: 4,
    colorKey: 'yellow',
    defaultName: 'Đội 4',
    name: 'Đội 4',
    score: 0,
    theme: {
      border: 'border-amber-400/40',
      borderActive: 'border-amber-400',
      borderFocus: 'focus:border-amber-400',
      ring: 'focus:ring-amber-400/25',
      glow: 'shadow-amber-400/20',
      dotBg: 'bg-amber-400',
      dotRing: 'ring-amber-400/20',
      scoreBg: 'bg-amber-400/10',
      scoreText: 'text-amber-300',
      activeBg: 'bg-amber-400/15',
    },
  },
  {
    id: 5,
    colorKey: 'orange',
    defaultName: 'Đội 5',
    name: 'Đội 5',
    score: 0,
    theme: {
      border: 'border-orange-500/40',
      borderActive: 'border-orange-500',
      borderFocus: 'focus:border-orange-500',
      ring: 'focus:ring-orange-500/25',
      glow: 'shadow-orange-500/20',
      dotBg: 'bg-orange-500',
      dotRing: 'ring-orange-500/20',
      scoreBg: 'bg-orange-500/10',
      scoreText: 'text-orange-400',
      activeBg: 'bg-orange-500/15',
    },
  },
  {
    id: 6,
    colorKey: 'pink',
    defaultName: 'Đội 6',
    name: 'Đội 6',
    score: 0,
    theme: {
      border: 'border-pink-500/40',
      borderActive: 'border-pink-500',
      borderFocus: 'focus:border-pink-500',
      ring: 'focus:ring-pink-500/25',
      glow: 'shadow-pink-500/20',
      dotBg: 'bg-pink-500',
      dotRing: 'ring-pink-500/20',
      scoreBg: 'bg-pink-500/10',
      scoreText: 'text-pink-400',
      activeBg: 'bg-pink-500/15',
    },
  },
];

type Screen = 'team-setup' | 'question-1' | 'question-2' | 'question-3' | 'question-4' | 'question-5' | 'results';

export default function App() {
  const [screen, setScreen] = useState<Screen>('team-setup');
  const [teams, setTeams] = useState<TeamConfig[]>(INITIAL_TEAMS);

  // Question 1 states
  const [userAnswerQ1, setUserAnswerQ1] = useState('');
  const [selectedTeamIdQ1, setSelectedTeamIdQ1] = useState<number | null>(null);
  const [feedbackQ1, setFeedbackQ1] = useState<{
    type: 'success' | 'error' | 'warning' | null;
    message: string;
  }>({ type: null, message: '' });

  // Question 2 states
  const [userAnswerQ2, setUserAnswerQ2] = useState('');
  const [selectedTeamIdQ2, setSelectedTeamIdQ2] = useState<number | null>(null);
  const [feedbackQ2, setFeedbackQ2] = useState<{
    type: 'success' | 'error' | 'warning' | null;
    message: string;
  }>({ type: null, message: '' });

  // Question 3 states
  const [userAnswerQ3, setUserAnswerQ3] = useState('');
  const [selectedTeamIdQ3, setSelectedTeamIdQ3] = useState<number | null>(null);
  const [feedbackQ3, setFeedbackQ3] = useState<{
    type: 'success' | 'error' | 'warning' | null;
    message: string;
  }>({ type: null, message: '' });

  // Question 4 states
  const [userAnswerQ4, setUserAnswerQ4] = useState('');
  const [selectedTeamIdQ4, setSelectedTeamIdQ4] = useState<number | null>(null);
  const [feedbackQ4, setFeedbackQ4] = useState<{
    type: 'success' | 'error' | 'warning' | null;
    message: string;
  }>({ type: null, message: '' });

  // Question 5 states
  const [userAnswerQ5, setUserAnswerQ5] = useState('');
  const [selectedTeamIdQ5, setSelectedTeamIdQ5] = useState<number | null>(null);
  const [feedbackQ5, setFeedbackQ5] = useState<{
    type: 'success' | 'error' | 'warning' | null;
    message: string;
  }>({ type: null, message: '' });

  // Update team name in setup
  const handleNameChange = (id: number, newName: string) => {
    setTeams((prev) =>
      prev.map((team) => (team.id === id ? { ...team, name: newName } : team))
    );
  };

  const handleResetAllTeams = () => {
    setTeams(INITIAL_TEAMS);
  };

  // Submit team setup -> go to Question 1
  const handleSetupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setScreen('question-1');
    setFeedbackQ1({ type: null, message: '' });
  };

  // Check answer for Question 1: Đáp án là KIẾN TRÚC
  const checkAnswerQ1IsCorrect = (input: string): boolean => {
    const raw = input.trim().toLowerCase();
    const withoutAccent = raw
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    return (
      raw === 'kiến trúc' ||
      withoutAccent === 'kien truc' ||
      withoutAccent.includes('kien truc')
    );
  };

  // Handle "TRẢ LỜI" click for Question 1
  const handleAnswerSubmitQ1 = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedTeamIdQ1 === null) {
      setFeedbackQ1({
        type: 'warning',
        message: 'Vui lòng chọn đội trả lời trước khi bấm kiểm tra đáp án!',
      });
      return;
    }

    const currentTeam = teams.find((t) => t.id === selectedTeamIdQ1);
    const teamName = currentTeam?.name || `Đội ${selectedTeamIdQ1}`;

    if (!userAnswerQ1.trim()) {
      setFeedbackQ1({
        type: 'warning',
        message: `${teamName} chưa nhập câu trả lời!`,
      });
      return;
    }

    const isCorrect = checkAnswerQ1IsCorrect(userAnswerQ1);

    if (isCorrect) {
      // ĐÚNG: +10 điểm và chuyển sang câu 2
      setTeams((prev) =>
        prev.map((team) =>
          team.id === selectedTeamIdQ1
            ? { ...team, score: team.score + 10 }
            : team
        )
      );

      setFeedbackQ1({
        type: 'success',
        message: `Chính xác! ${teamName} được cộng 10 điểm! Đang chuyển sang Câu 2...`,
      });

      setTimeout(() => {
        setScreen('question-2');
        setFeedbackQ1({ type: null, message: '' });
      }, 1200);
    } else {
      // SAI: Không trừ điểm, chuyển lượt cho đội khác
      setFeedbackQ1({
        type: 'error',
        message: `Chưa chính xác! ${teamName} không bị trừ điểm. Lượt trả lời được chuyển cho các đội khác!`,
      });

      setUserAnswerQ1('');
      setSelectedTeamIdQ1(null);
    }
  };

  // Check answer for Question 2: Đáp án là HỘI HỌA
  const checkAnswerQ2IsCorrect = (input: string): boolean => {
    const raw = input.trim().toLowerCase();
    const withoutAccent = raw
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    return (
      raw === 'hội họa' ||
      raw === 'hội hoạ' ||
      withoutAccent === 'hoi hoa' ||
      withoutAccent.includes('hoi hoa')
    );
  };

  // Handle "TRẢ LỜI" click for Question 2
  const handleAnswerSubmitQ2 = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedTeamIdQ2 === null) {
      setFeedbackQ2({
        type: 'warning',
        message: 'Vui lòng chọn đội trả lời trước khi bấm kiểm tra đáp án!',
      });
      return;
    }

    const currentTeam = teams.find((t) => t.id === selectedTeamIdQ2);
    const teamName = currentTeam?.name || `Đội ${selectedTeamIdQ2}`;

    if (!userAnswerQ2.trim()) {
      setFeedbackQ2({
        type: 'warning',
        message: `${teamName} chưa nhập câu trả lời!`,
      });
      return;
    }

    const isCorrect = checkAnswerQ2IsCorrect(userAnswerQ2);

    if (isCorrect) {
      // ĐÚNG: +10 điểm và chuyển sang câu 3
      setTeams((prev) =>
        prev.map((team) =>
          team.id === selectedTeamIdQ2
            ? { ...team, score: team.score + 10 }
            : team
        )
      );

      setFeedbackQ2({
        type: 'success',
        message: `Chính xác! ${teamName} được cộng 10 điểm! Đang chuyển sang Câu 3...`,
      });

      setTimeout(() => {
        setScreen('question-3');
        setFeedbackQ2({ type: null, message: '' });
      }, 1200);
    } else {
      // SAI: Không trừ điểm, chuyển lượt cho đội khác
      setFeedbackQ2({
        type: 'error',
        message: `Chưa chính xác! ${teamName} không bị trừ điểm. Lượt trả lời được chuyển cho các đội khác!`,
      });

      setUserAnswerQ2('');
      setSelectedTeamIdQ2(null);
    }
  };

  // Check answer for Question 3: Đáp án là SÂN KHẤU
  const checkAnswerQ3IsCorrect = (input: string): boolean => {
    const raw = input.trim().toLowerCase();
    const withoutAccent = raw
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    return (
      raw === 'sân khấu' ||
      raw === 'sân khâu' ||
      withoutAccent === 'san khau' ||
      withoutAccent.includes('san khau')
    );
  };

  // Handle "TRẢ LỜI" click for Question 3
  const handleAnswerSubmitQ3 = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedTeamIdQ3 === null) {
      setFeedbackQ3({
        type: 'warning',
        message: 'Vui lòng chọn đội trả lời trước khi bấm kiểm tra đáp án!',
      });
      return;
    }

    const currentTeam = teams.find((t) => t.id === selectedTeamIdQ3);
    const teamName = currentTeam?.name || `Đội ${selectedTeamIdQ3}`;

    if (!userAnswerQ3.trim()) {
      setFeedbackQ3({
        type: 'warning',
        message: `${teamName} chưa nhập câu trả lời!`,
      });
      return;
    }

    const isCorrect = checkAnswerQ3IsCorrect(userAnswerQ3);

    if (isCorrect) {
      // ĐÚNG: +10 điểm và chuyển sang câu 4
      setTeams((prev) =>
        prev.map((team) =>
          team.id === selectedTeamIdQ3
            ? { ...team, score: team.score + 10 }
            : team
        )
      );

      setFeedbackQ3({
        type: 'success',
        message: `Chính xác! ${teamName} được cộng 10 điểm! Đang chuyển sang Câu 4...`,
      });

      setTimeout(() => {
        setScreen('question-4');
        setFeedbackQ3({ type: null, message: '' });
      }, 1200);
    } else {
      // SAI: Không trừ điểm, chuyển lượt cho đội khác
      setFeedbackQ3({
        type: 'error',
        message: `Chưa chính xác! ${teamName} không bị trừ điểm. Lượt trả lời được chuyển cho các đội khác!`,
      });

      setUserAnswerQ3('');
      setSelectedTeamIdQ3(null);
    }
  };

  // Check answer for Question 4: Đáp án là ĐIÊU KHẮC
  const checkAnswerQ4IsCorrect = (input: string): boolean => {
    const raw = input.trim().toLowerCase();
    const withoutAccent = raw
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    return (
      raw === 'điêu khắc' ||
      raw === 'điêu khăc' ||
      withoutAccent === 'dieu khac' ||
      withoutAccent.includes('dieu khac')
    );
  };

  // Handle "TRẢ LỜI" click for Question 4
  const handleAnswerSubmitQ4 = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedTeamIdQ4 === null) {
      setFeedbackQ4({
        type: 'warning',
        message: 'Vui lòng chọn đội trả lời trước khi bấm kiểm tra đáp án!',
      });
      return;
    }

    const currentTeam = teams.find((t) => t.id === selectedTeamIdQ4);
    const teamName = currentTeam?.name || `Đội ${selectedTeamIdQ4}`;

    if (!userAnswerQ4.trim()) {
      setFeedbackQ4({
        type: 'warning',
        message: `${teamName} chưa nhập câu trả lời!`,
      });
      return;
    }

    const isCorrect = checkAnswerQ4IsCorrect(userAnswerQ4);

    if (isCorrect) {
      // ĐÚNG: +10 điểm và chuyển sang câu 5
      setTeams((prev) =>
        prev.map((team) =>
          team.id === selectedTeamIdQ4
            ? { ...team, score: team.score + 10 }
            : team
        )
      );

      setFeedbackQ4({
        type: 'success',
        message: `Chính xác! ${teamName} được cộng 10 điểm! Đang chuyển sang Câu 5...`,
      });

      setTimeout(() => {
        setScreen('question-5');
        setFeedbackQ4({ type: null, message: '' });
      }, 1200);
    } else {
      // SAI: Không trừ điểm, chuyển lượt cho đội khác
      setFeedbackQ4({
        type: 'error',
        message: `Chưa chính xác! ${teamName} không bị trừ điểm. Lượt trả lời được chuyển cho các đội khác!`,
      });

      setUserAnswerQ4('');
      setSelectedTeamIdQ4(null);
    }
  };

  // Check answer for Question 5: Đáp án là VĂN HỌC
  const checkAnswerQ5IsCorrect = (input: string): boolean => {
    const raw = input.trim().toLowerCase();
    const withoutAccent = raw
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    return (
      raw === 'văn học' ||
      raw === 'van hoc' ||
      withoutAccent === 'van hoc' ||
      withoutAccent.includes('van hoc')
    );
  };

  // Handle "TRẢ LỜI" click for Question 5
  const handleAnswerSubmitQ5 = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedTeamIdQ5 === null) {
      setFeedbackQ5({
        type: 'warning',
        message: 'Vui lòng chọn đội trả lời trước khi bấm kiểm tra đáp án!',
      });
      return;
    }

    const currentTeam = teams.find((t) => t.id === selectedTeamIdQ5);
    const teamName = currentTeam?.name || `Đội ${selectedTeamIdQ5}`;

    if (!userAnswerQ5.trim()) {
      setFeedbackQ5({
        type: 'warning',
        message: `${teamName} chưa nhập câu trả lời!`,
      });
      return;
    }

    const isCorrect = checkAnswerQ5IsCorrect(userAnswerQ5);

    if (isCorrect) {
      // ĐÚNG: +10 điểm và chuyển sang màn hình tổng kết
      setTeams((prev) =>
        prev.map((team) =>
          team.id === selectedTeamIdQ5
            ? { ...team, score: team.score + 10 }
            : team
        )
      );

      setFeedbackQ5({
        type: 'success',
        message: `Chính xác! ${teamName} được cộng 10 điểm! Đang chuyển sang trang kết quả...`,
      });

      setTimeout(() => {
        setScreen('results');
        setFeedbackQ5({ type: null, message: '' });
      }, 1200);
    } else {
      // SAI: Không trừ điểm, chuyển lượt cho đội khác
      setFeedbackQ5({
        type: 'error',
        message: `Chưa chính xác! ${teamName} không bị trừ điểm. Lượt trả lời được chuyển cho các đội khác!`,
      });

      setUserAnswerQ5('');
      setSelectedTeamIdQ5(null);
    }
  };

  // Sort teams by score descending for results screen
  const sortedTeams = [...teams].sort((a, b) => b.score - a.score);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-rose-500 selection:text-white">
      {/* Top Header */}
      <header className="border-b border-slate-800/80 bg-slate-900/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-500 p-[1.5px] flex items-center justify-center shadow-lg shadow-rose-500/10">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-amber-400" />
              </div>
            </div>
            <span className="font-bold text-base sm:text-lg tracking-tight text-white">
              Khám phá các loại hình nghệ thuật
            </span>
          </div>

          {screen !== 'team-setup' && (
            <button
              onClick={() => setScreen('team-setup')}
              className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/70 border border-slate-700/60 hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Cài đặt đội</span>
            </button>
          )}
        </div>

        {/* BẢNG ĐIỂM CÁC ĐỘI (HIỆN TRÊN ĐẦU MÀN HÌNH KHI Ở MÀN HÌNH CÂU HỎI) */}
        {screen !== 'team-setup' && (
          <div className="border-t border-slate-800/60 bg-slate-950/70 px-4 sm:px-6 py-2.5">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
                {teams.map((team) => {
                  const isTurn =
                    screen === 'question-1'
                      ? selectedTeamIdQ1 === team.id
                      : screen === 'question-2'
                      ? selectedTeamIdQ2 === team.id
                      : screen === 'question-3'
                      ? selectedTeamIdQ3 === team.id
                      : screen === 'question-4'
                      ? selectedTeamIdQ4 === team.id
                      : screen === 'question-5'
                      ? selectedTeamIdQ5 === team.id
                      : false;
                  return (
                    <div
                      key={team.id}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl border transition-all ${
                        isTurn
                          ? `${team.theme.borderActive} ${team.theme.activeBg} ring-1 ring-inset ${team.theme.borderActive}`
                          : `border-slate-800 bg-slate-900/60`
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0 pr-1">
                        <div
                          className={`w-3 h-3 rounded-full shrink-0 ${team.theme.dotBg}`}
                        />
                        <span className="text-xs font-medium text-slate-200 truncate">
                          {team.name}
                        </span>
                      </div>
                      <span
                        className={`text-xs sm:text-sm font-bold tabular-nums shrink-0 px-2 py-0.5 rounded-md ${
                          team.score < 0
                            ? 'text-rose-400 bg-rose-500/10'
                            : team.score > 0
                            ? `${team.theme.scoreText} ${team.theme.scoreBg}`
                            : 'text-slate-400 bg-slate-800/60'
                        }`}
                      >
                        {team.score}đ
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* SCREEN 1: ĐẶT TÊN CHO 6 ĐỘI */}
      {screen === 'team-setup' && (
        <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col justify-center">
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Đặt Tên Cho 6 Đội
            </h1>
          </div>

          <form onSubmit={handleSetupSubmit} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {teams.map((team) => (
                <div
                  key={team.id}
                  className={`rounded-2xl bg-slate-900/80 border ${team.theme.border} p-5 transition-all duration-200 hover:shadow-lg ${team.theme.glow}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-4 h-4 rounded-full ${team.theme.dotBg} ring-4 ${team.theme.dotRing}`}
                    />
                    <label
                      htmlFor={`team-${team.id}`}
                      className="text-sm font-semibold text-slate-200"
                    >
                      Đội {team.id}
                    </label>
                  </div>

                  <div>
                    <input
                      id={`team-${team.id}`}
                      type="text"
                      value={team.name}
                      onChange={(e) => handleNameChange(team.id, e.target.value)}
                      placeholder={team.defaultName}
                      className={`w-full rounded-xl bg-slate-950/90 border border-slate-700/80 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors ${team.theme.borderFocus} focus:ring-2 ${team.theme.ring}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={handleResetAllTeams}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/70 text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Đặt lại</span>
              </button>

              <button
                type="submit"
                className="w-full sm:w-auto min-w-[200px] px-8 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-600 hover:from-rose-600 hover:via-pink-600 hover:to-indigo-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-indigo-500/25 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>SUBMIT</span>
              </button>
            </div>
          </form>
        </main>
      )}

      {/* SCREEN 2: CÂU HỎI 1 (KIẾN TRÚC) */}
      {screen === 'question-1' && (
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col justify-start">
          {/* Header Câu 1 với nút Bỏ qua ở góc */}
          <div className="mb-6 flex items-center justify-between">
            <div className="w-24 sm:w-32"></div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight text-center">
              Câu 1
            </h1>
            <div className="w-24 sm:w-32 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setScreen('question-2');
                  setUserAnswerQ1('');
                  setSelectedTeamIdQ1(null);
                  setFeedbackQ1({ type: null, message: '' });
                }}
                className="px-3.5 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                title="Bỏ qua câu 1 và sang câu 2"
              >
                <span>Bỏ qua</span>
                <SkipForward className="w-3.5 h-3.5 text-indigo-400" />
              </button>
            </div>
          </div>

          {/* 3 BỨC ẢNH VÀ CHÚ THÍCH CÂU 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {/* Ảnh 1: Nhà hát Opera */}
            <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl flex flex-col">
              <div className="aspect-[4/3] bg-slate-950 overflow-hidden relative">
                <img
                  src={IMG_SYDNEY}
                  alt="Nhà hát Opera (Sydney – Úc)"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-3.5 text-center bg-slate-900/90 border-t border-slate-800">
                <p className="text-sm font-semibold text-slate-200 uppercase">
                  NHÀ HÁT OPERA (SYDNEY – ÚC)
                </p>
              </div>
            </div>

            {/* Ảnh 2: Tháp Eiffel */}
            <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl flex flex-col">
              <div className="aspect-[4/3] bg-slate-950 overflow-hidden relative">
                <img
                  src={IMG_EIFFEL}
                  alt="Tháp Eiffel (Paris – Pháp)"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-3.5 text-center bg-slate-900/90 border-t border-slate-800">
                <p className="text-sm font-semibold text-slate-200 uppercase">
                  THÁP EIFFEL (PARIS – PHÁP)
                </p>
              </div>
            </div>

            {/* Ảnh 3: Chùa Một Cột */}
            <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl flex flex-col">
              <div className="aspect-[4/3] bg-slate-950 overflow-hidden relative">
                <img
                  src={IMG_CHUA_MOT_COT}
                  alt="Chùa Một Cột (Hà Nội - Việt Nam)"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-3.5 text-center bg-slate-900/90 border-t border-slate-800">
                <p className="text-sm font-semibold text-slate-200 uppercase">
                  CHÙA MỘT CỘT (HÀ NỘI - VIỆT NAM)
                </p>
              </div>
            </div>
          </div>

          {/* FORM NHẬP CÂU TRẢ LỜI & CHỌN ĐỘI CÂU 1 */}
          <form
            onSubmit={handleAnswerSubmitQ1}
            className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6"
          >
            {/* 1. Ô NHẬP CÂU TRẢ LỜI */}
            <div className="space-y-2">
              <label
                htmlFor="answer-input-q1"
                className="block text-sm font-bold text-slate-200"
              >
                Nhập câu trả lời:
              </label>
              <input
                id="answer-input-q1"
                type="text"
                value={userAnswerQ1}
                onChange={(e) => setUserAnswerQ1(e.target.value)}
                className="w-full rounded-2xl bg-slate-950 border border-slate-700/80 px-4 py-3.5 text-base sm:text-lg text-white outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-colors"
                autoComplete="off"
              />
            </div>

            {/* 2. CÁC Ô CHỌN ĐỘI TRẢ LỜI */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-200">
                  Chọn đội trả lời:
                </span>
                {selectedTeamIdQ1 && (
                  <span className="text-xs text-indigo-400 font-medium">
                    Đang chọn lượt:{' '}
                    {teams.find((t) => t.id === selectedTeamIdQ1)?.name}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {teams.map((team) => {
                  const isChecked = selectedTeamIdQ1 === team.id;
                  return (
                    <label
                      key={team.id}
                      onClick={() => setSelectedTeamIdQ1(team.id)}
                      className={`relative flex items-center gap-3 p-3 rounded-xl border cursor-pointer select-none transition-all ${
                        isChecked
                          ? `${team.theme.borderActive} ${team.theme.activeBg} ring-2 ring-offset-2 ring-offset-slate-950 ${team.theme.borderActive} shadow-md`
                          : `border-slate-800 bg-slate-950/70 hover:border-slate-700 hover:bg-slate-900`
                      }`}
                    >
                      <input
                        type="radio"
                        name="answering-team-q1"
                        checked={isChecked}
                        onChange={() => setSelectedTeamIdQ1(team.id)}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                          isChecked
                            ? `${team.theme.dotBg} border-transparent`
                            : 'border-slate-600 bg-slate-900'
                        }`}
                      >
                        {isChecked && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs sm:text-sm font-semibold text-slate-200 truncate block">
                          {team.name}
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* FEEDBACK THÔNG BÁO KẾT QUẢ CÂU 1 */}
            {feedbackQ1.message && (
              <div
                className={`p-4 rounded-2xl flex items-start gap-3 text-sm ${
                  feedbackQ1.type === 'success'
                    ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                    : feedbackQ1.type === 'error'
                    ? 'bg-rose-500/15 border border-rose-500/30 text-rose-300'
                    : 'bg-amber-500/15 border border-amber-500/30 text-amber-300'
                }`}
              >
                {feedbackQ1.type === 'success' ? (
                  <Check className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
                )}
                <div className="flex-1 font-medium">{feedbackQ1.message}</div>
              </div>
            )}

            {/* 3. Ô "TRẢ LỜI" CÂU 1 */}
            <div className="pt-2 flex items-center justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto min-w-[200px] px-8 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-600 hover:from-rose-600 hover:via-pink-600 hover:to-indigo-700 text-white font-bold text-base shadow-lg shadow-indigo-500/25 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Check className="w-5 h-5" />
                <span>TRẢ LỜI</span>
              </button>
            </div>
          </form>
        </main>
      )}

      {/* SCREEN 3: CÂU HỎI 2 (HỘI HỌA) */}
      {screen === 'question-2' && (
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col justify-start">
          {/* Header Câu 2 với nút Bỏ qua ở góc */}
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={() => setScreen('question-1')}
              className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/70 border border-slate-700/60 hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Câu 1</span>
            </button>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight text-center">
              Câu 2
            </h1>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setScreen('question-3');
                  setUserAnswerQ2('');
                  setSelectedTeamIdQ2(null);
                  setFeedbackQ2({ type: null, message: '' });
                }}
                className="px-3.5 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                title="Bỏ qua câu 2 và sang câu 3"
              >
                <span>Bỏ qua</span>
                <SkipForward className="w-3.5 h-3.5 text-indigo-400" />
              </button>
            </div>
          </div>

          {/* 3 BỨC ẢNH VÀ CHÚ THÍCH CÂU 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {/* Ảnh 1: Em Thúy */}
            <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl flex flex-col">
              <div className="aspect-[3/4] bg-slate-950 overflow-hidden relative">
                <img
                  src={IMG_EM_THUY}
                  alt="Em Thúy (Trần Văn Cẩn)"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-3.5 text-center bg-slate-900/90 border-t border-slate-800">
                <p className="text-sm font-semibold text-slate-200 uppercase">
                  EM THÚY (TRẦN VĂN CẨN)
                </p>
              </div>
            </div>

            {/* Ảnh 2: Thiếu nữ bên hoa huệ */}
            <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl flex flex-col">
              <div className="aspect-[3/4] bg-slate-950 overflow-hidden relative">
                <img
                  src={IMG_THIEU_NU}
                  alt="Thiếu nữ bên hoa huệ (Tô Ngọc Vân)"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-3.5 text-center bg-slate-900/90 border-t border-slate-800">
                <p className="text-sm font-semibold text-slate-200 uppercase">
                  THIẾU NỮ BÊN HOA HUỆ (TÔ NGỌC VÂN)
                </p>
              </div>
            </div>

            {/* Ảnh 3: Mona Lisa */}
            <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl flex flex-col">
              <div className="aspect-[3/4] bg-slate-950 overflow-hidden relative">
                <img
                  src={IMG_MONA_LISA}
                  alt="Mona Lisa (Leonardo da Vinci)"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-3.5 text-center bg-slate-900/90 border-t border-slate-800">
                <p className="text-sm font-semibold text-slate-200 uppercase">
                  NÀNG MONA LISA (LEONARDO DA VINCI)
                </p>
              </div>
            </div>
          </div>

          {/* FORM NHẬP CÂU TRẢ LỜI & CHỌN ĐỘI CÂU 2 */}
          <form
            onSubmit={handleAnswerSubmitQ2}
            className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6"
          >
            {/* 1. Ô NHẬP CÂU TRẢ LỜI */}
            <div className="space-y-2">
              <label
                htmlFor="answer-input-q2"
                className="block text-sm font-bold text-slate-200"
              >
                Nhập câu trả lời:
              </label>
              <input
                id="answer-input-q2"
                type="text"
                value={userAnswerQ2}
                onChange={(e) => setUserAnswerQ2(e.target.value)}
                className="w-full rounded-2xl bg-slate-950 border border-slate-700/80 px-4 py-3.5 text-base sm:text-lg text-white outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-colors"
                autoComplete="off"
              />
            </div>

            {/* 2. CÁC Ô CHỌN ĐỘI TRẢ LỜI */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-200">
                  Chọn đội trả lời:
                </span>
                {selectedTeamIdQ2 && (
                  <span className="text-xs text-indigo-400 font-medium">
                    Đang chọn lượt:{' '}
                    {teams.find((t) => t.id === selectedTeamIdQ2)?.name}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {teams.map((team) => {
                  const isChecked = selectedTeamIdQ2 === team.id;
                  return (
                    <label
                      key={team.id}
                      onClick={() => setSelectedTeamIdQ2(team.id)}
                      className={`relative flex items-center gap-3 p-3 rounded-xl border cursor-pointer select-none transition-all ${
                        isChecked
                          ? `${team.theme.borderActive} ${team.theme.activeBg} ring-2 ring-offset-2 ring-offset-slate-950 ${team.theme.borderActive} shadow-md`
                          : `border-slate-800 bg-slate-950/70 hover:border-slate-700 hover:bg-slate-900`
                      }`}
                    >
                      <input
                        type="radio"
                        name="answering-team-q2"
                        checked={isChecked}
                        onChange={() => setSelectedTeamIdQ2(team.id)}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                          isChecked
                            ? `${team.theme.dotBg} border-transparent`
                            : 'border-slate-600 bg-slate-900'
                        }`}
                      >
                        {isChecked && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs sm:text-sm font-semibold text-slate-200 truncate block">
                          {team.name}
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* FEEDBACK THÔNG BÁO KẾT QUẢ CÂU 2 */}
            {feedbackQ2.message && (
              <div
                className={`p-4 rounded-2xl flex items-start gap-3 text-sm ${
                  feedbackQ2.type === 'success'
                    ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                    : feedbackQ2.type === 'error'
                    ? 'bg-rose-500/15 border border-rose-500/30 text-rose-300'
                    : 'bg-amber-500/15 border border-amber-500/30 text-amber-300'
                }`}
              >
                {feedbackQ2.type === 'success' ? (
                  <Check className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
                )}
                <div className="flex-1 font-medium">{feedbackQ2.message}</div>
              </div>
            )}

            {/* 3. Ô "TRẢ LỜI" CÂU 2 */}
            <div className="pt-2 flex items-center justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto min-w-[200px] px-8 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-600 hover:from-rose-600 hover:via-pink-600 hover:to-indigo-700 text-white font-bold text-base shadow-lg shadow-indigo-500/25 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Check className="w-5 h-5" />
                <span>TRẢ LỜI</span>
              </button>
            </div>
          </form>
        </main>
      )}

      {/* SCREEN 4: CÂU HỎI 3 (SÂN KHẤU) */}
      {screen === 'question-3' && (
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col justify-start">
          {/* Header Câu 3 với nút Bỏ qua ở góc */}
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={() => setScreen('question-2')}
              className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/70 border border-slate-700/60 hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Câu 2</span>
            </button>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight text-center">
              Câu 3
            </h1>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setScreen('question-4');
                  setUserAnswerQ3('');
                  setSelectedTeamIdQ3(null);
                  setFeedbackQ3({ type: null, message: '' });
                }}
                className="px-3.5 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                title="Bỏ qua câu 3 và sang câu 4"
              >
                <span>Bỏ qua</span>
                <SkipForward className="w-3.5 h-3.5 text-indigo-400" />
              </button>
            </div>
          </div>

          {/* 2 BỨC ẢNH VÀ CHÚ THÍCH CÂU 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-4 sm:gap-6 mb-8 w-full">
            {/* Ảnh 1: Vở chèo Thị Mầu lên chùa */}
            <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl flex flex-col">
              <div className="aspect-[16/9] bg-slate-950 overflow-hidden relative">
                <img
                  src={IMG_THI_MAU}
                  alt="Vở chèo: Thị Mầu lên chùa"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-3.5 text-center bg-slate-900/90 border-t border-slate-800">
                <p className="text-sm font-semibold text-slate-200 uppercase tracking-wide">
                  VỞ CHÈO: THỊ MẦU LÊN CHÙA
                </p>
              </div>
            </div>

            {/* Ảnh 2: Vở chèo Thúy Vân giả dại */}
            <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl flex flex-col">
              <div className="aspect-[16/9] bg-slate-950 overflow-hidden relative">
                <img
                  src={IMG_THUY_VAN}
                  alt="Vở chèo: Thúy Vân giả dại"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-3.5 text-center bg-slate-900/90 border-t border-slate-800">
                <p className="text-sm font-semibold text-slate-200 uppercase tracking-wide">
                  VỞ CHÈO: THÚY VÂN GIẢ DẠI
                </p>
              </div>
            </div>
          </div>

          {/* FORM NHẬP CÂU TRẢ LỜI & CHỌN ĐỘI CÂU 3 */}
          <form
            onSubmit={handleAnswerSubmitQ3}
            className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6"
          >
            {/* 1. Ô NHẬP CÂU TRẢ LỜI */}
            <div className="space-y-2">
              <label
                htmlFor="answer-input-q3"
                className="block text-sm font-bold text-slate-200"
              >
                Nhập câu trả lời:
              </label>
              <input
                id="answer-input-q3"
                type="text"
                value={userAnswerQ3}
                onChange={(e) => setUserAnswerQ3(e.target.value)}
                className="w-full rounded-2xl bg-slate-950 border border-slate-700/80 px-4 py-3.5 text-base sm:text-lg text-white outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-colors"
                autoComplete="off"
              />
            </div>

            {/* 2. CÁC Ô CHỌN ĐỘI TRẢ LỜI */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-200">
                  Chọn đội trả lời:
                </span>
                {selectedTeamIdQ3 && (
                  <span className="text-xs text-indigo-400 font-medium">
                    Đang chọn lượt:{' '}
                    {teams.find((t) => t.id === selectedTeamIdQ3)?.name}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {teams.map((team) => {
                  const isChecked = selectedTeamIdQ3 === team.id;
                  return (
                    <label
                      key={team.id}
                      onClick={() => setSelectedTeamIdQ3(team.id)}
                      className={`relative flex items-center gap-3 p-3 rounded-xl border cursor-pointer select-none transition-all ${
                        isChecked
                          ? `${team.theme.borderActive} ${team.theme.activeBg} ring-2 ring-offset-2 ring-offset-slate-950 ${team.theme.borderActive} shadow-md`
                          : `border-slate-800 bg-slate-950/70 hover:border-slate-700 hover:bg-slate-900`
                      }`}
                    >
                      <input
                        type="radio"
                        name="answering-team-q3"
                        checked={isChecked}
                        onChange={() => setSelectedTeamIdQ3(team.id)}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                          isChecked
                            ? `${team.theme.dotBg} border-transparent`
                            : 'border-slate-600 bg-slate-900'
                        }`}
                      >
                        {isChecked && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs sm:text-sm font-semibold text-slate-200 truncate block">
                          {team.name}
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* FEEDBACK THÔNG BÁO KẾT QUẢ CÂU 3 */}
            {feedbackQ3.message && (
              <div
                className={`p-4 rounded-2xl flex items-start gap-3 text-sm ${
                  feedbackQ3.type === 'success'
                    ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                    : feedbackQ3.type === 'error'
                    ? 'bg-rose-500/15 border border-rose-500/30 text-rose-300'
                    : 'bg-amber-500/15 border border-amber-500/30 text-amber-300'
                }`}
              >
                {feedbackQ3.type === 'success' ? (
                  <Check className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
                )}
                <div className="flex-1 font-medium">{feedbackQ3.message}</div>
              </div>
            )}

            {/* 3. Ô "TRẢ LỜI" CÂU 3 */}
            <div className="pt-2 flex items-center justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto min-w-[200px] px-8 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-600 hover:from-rose-600 hover:via-pink-600 hover:to-indigo-700 text-white font-bold text-base shadow-lg shadow-indigo-500/25 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Check className="w-5 h-5" />
                <span>TRẢ LỜI</span>
              </button>
            </div>
          </form>
        </main>
      )}

      {/* SCREEN 5: CÂU HỎI 4 (ĐIÊU KHẮC) */}
      {screen === 'question-4' && (
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col justify-start">
          {/* Header Câu 4 với nút Bỏ qua ở góc */}
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={() => setScreen('question-3')}
              className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/70 border border-slate-700/60 hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Câu 3</span>
            </button>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight text-center">
              Câu 4
            </h1>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setScreen('question-5');
                  setUserAnswerQ4('');
                  setSelectedTeamIdQ4(null);
                  setFeedbackQ4({ type: null, message: '' });
                }}
                className="px-3.5 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                title="Bỏ qua câu 4 và sang câu 5"
              >
                <span>Bỏ qua</span>
                <SkipForward className="w-3.5 h-3.5 text-indigo-400" />
              </button>
            </div>
          </div>

          {/* 3 BỨC ẢNH VÀ CHÚ THÍCH CÂU 4 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {/* Ảnh 1: Bác Hồ với công nhân mỏ */}
            <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl flex flex-col">
              <div className="aspect-[3/4] bg-slate-950 overflow-hidden relative">
                <img
                  src={IMG_BAC_HO_MO}
                  alt="Bác Hồ với công nhân mỏ (Phạm Duy Thanh)"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-3.5 text-center bg-slate-900/90 border-t border-slate-800">
                <p className="text-sm font-semibold text-slate-200 uppercase">
                  BÁC HỒ VỚI CÔNG NHÂN MỎ (PHẠM DUY THANH)
                </p>
              </div>
            </div>

            {/* Ảnh 2: Người ném đĩa */}
            <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl flex flex-col">
              <div className="aspect-[3/4] bg-slate-950 overflow-hidden relative">
                <img
                  src={IMG_NEM_DIA}
                  alt="Người ném đĩa (Myron)"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-3.5 text-center bg-slate-900/90 border-t border-slate-800">
                <p className="text-sm font-semibold text-slate-200 uppercase">
                  NGƯỜI NÉM ĐĨA (MYRON)
                </p>
              </div>
            </div>

            {/* Ảnh 3: Người suy tưởng */}
            <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl flex flex-col">
              <div className="aspect-[3/4] bg-slate-950 overflow-hidden relative">
                <img
                  src={IMG_SUY_TUONG}
                  alt="Người suy tưởng (Auguste Rodin)"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-3.5 text-center bg-slate-900/90 border-t border-slate-800">
                <p className="text-sm font-semibold text-slate-200 uppercase">
                  NGƯỜI SUY TƯỞNG (AUGUSTE RODIN)
                </p>
              </div>
            </div>
          </div>

          {/* FORM NHẬP CÂU TRẢ LỜI & CHỌN ĐỘI CÂU 4 */}
          <form
            onSubmit={handleAnswerSubmitQ4}
            className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6"
          >
            {/* 1. Ô NHẬP CÂU TRẢ LỜI */}
            <div className="space-y-2">
              <label
                htmlFor="answer-input-q4"
                className="block text-sm font-bold text-slate-200"
              >
                Nhập câu trả lời:
              </label>
              <input
                id="answer-input-q4"
                type="text"
                value={userAnswerQ4}
                onChange={(e) => setUserAnswerQ4(e.target.value)}
                className="w-full rounded-2xl bg-slate-950 border border-slate-700/80 px-4 py-3.5 text-base sm:text-lg text-white outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-colors"
                autoComplete="off"
              />
            </div>

            {/* 2. CÁC Ô CHỌN ĐỘI TRẢ LỜI */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-200">
                  Chọn đội trả lời:
                </span>
                {selectedTeamIdQ4 && (
                  <span className="text-xs text-indigo-400 font-medium">
                    Đang chọn lượt:{' '}
                    {teams.find((t) => t.id === selectedTeamIdQ4)?.name}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {teams.map((team) => {
                  const isChecked = selectedTeamIdQ4 === team.id;
                  return (
                    <label
                      key={team.id}
                      onClick={() => setSelectedTeamIdQ4(team.id)}
                      className={`relative flex items-center gap-3 p-3 rounded-xl border cursor-pointer select-none transition-all ${
                        isChecked
                          ? `${team.theme.borderActive} ${team.theme.activeBg} ring-2 ring-offset-2 ring-offset-slate-950 ${team.theme.borderActive} shadow-md`
                          : `border-slate-800 bg-slate-950/70 hover:border-slate-700 hover:bg-slate-900`
                      }`}
                    >
                      <input
                        type="radio"
                        name="answering-team-q4"
                        checked={isChecked}
                        onChange={() => setSelectedTeamIdQ4(team.id)}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                          isChecked
                            ? `${team.theme.dotBg} border-transparent`
                            : 'border-slate-600 bg-slate-900'
                        }`}
                      >
                        {isChecked && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs sm:text-sm font-semibold text-slate-200 truncate block">
                          {team.name}
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* FEEDBACK THÔNG BÁO KẾT QUẢ CÂU 4 */}
            {feedbackQ4.message && (
              <div
                className={`p-4 rounded-2xl flex items-start gap-3 text-sm ${
                  feedbackQ4.type === 'success'
                    ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                    : feedbackQ4.type === 'error'
                    ? 'bg-rose-500/15 border border-rose-500/30 text-rose-300'
                    : 'bg-amber-500/15 border border-amber-500/30 text-amber-300'
                }`}
              >
                {feedbackQ4.type === 'success' ? (
                  <Check className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
                )}
                <div className="flex-1 font-medium">{feedbackQ4.message}</div>
              </div>
            )}

            {/* 3. Ô "TRẢ LỜI" CÂU 4 */}
            <div className="pt-2 flex items-center justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto min-w-[200px] px-8 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-600 hover:from-rose-600 hover:via-pink-600 hover:to-indigo-700 text-white font-bold text-base shadow-lg shadow-indigo-500/25 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Check className="w-5 h-5" />
                <span>TRẢ LỜI</span>
              </button>
            </div>
          </form>
        </main>
      )}

      {/* SCREEN 6: CÂU HỎI 5 (VĂN HỌC - KHÔNG CHÚ THÍCH) */}
      {screen === 'question-5' && (
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col justify-start">
          {/* Header Câu 5 với nút Bỏ qua ở góc */}
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={() => setScreen('question-4')}
              className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/70 border border-slate-700/60 hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Câu 4</span>
            </button>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight text-center">
              Câu 5
            </h1>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setScreen('results');
                  setUserAnswerQ5('');
                  setSelectedTeamIdQ5(null);
                  setFeedbackQ5({ type: null, message: '' });
                }}
                className="px-3.5 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                title="Bỏ qua câu 5 và xem tổng kết điểm"
              >
                <span>Bỏ qua</span>
                <SkipForward className="w-3.5 h-3.5 text-indigo-400" />
              </button>
            </div>
          </div>

          {/* 3 BỨC ẢNH CÂU 5 (THEO YÊU CẦU: KHÔNG CHÚ THÍCH) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {/* Ảnh 1: Những người khốn khổ */}
            <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl flex flex-col">
              <div className="aspect-[4/3] bg-slate-950 overflow-hidden relative">
                <img
                  src={IMG_VAN_HOC_1}
                  alt="Tác phẩm văn học 1"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain p-2 transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Ảnh 2: Bộ 5 cuốn sách 3D nghệ thuật */}
            <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl flex flex-col">
              <div className="aspect-[4/3] bg-slate-950 overflow-hidden relative">
                <img
                  src={IMG_VAN_HOC_2}
                  alt="Tác phẩm văn học 2"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Ảnh 3: Bộ 5 cuốn sách 2D minh họa */}
            <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl flex flex-col">
              <div className="aspect-[4/3] bg-slate-950 overflow-hidden relative">
                <img
                  src={IMG_VAN_HOC_3}
                  alt="Tác phẩm văn học 3"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* FORM NHẬP CÂU TRẢ LỜI & CHỌN ĐỘI CÂU 5 */}
          <form
            onSubmit={handleAnswerSubmitQ5}
            className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6"
          >
            {/* 1. Ô NHẬP CÂU TRẢ LỜI */}
            <div className="space-y-2">
              <label
                htmlFor="answer-input-q5"
                className="block text-sm font-bold text-slate-200"
              >
                Nhập câu trả lời:
              </label>
              <input
                id="answer-input-q5"
                type="text"
                value={userAnswerQ5}
                onChange={(e) => setUserAnswerQ5(e.target.value)}
                className="w-full rounded-2xl bg-slate-950 border border-slate-700/80 px-4 py-3.5 text-base sm:text-lg text-white outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-colors"
                autoComplete="off"
              />
            </div>

            {/* 2. CÁC Ô CHỌN ĐỘI TRẢ LỜI */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-200">
                  Chọn đội trả lời:
                </span>
                {selectedTeamIdQ5 && (
                  <span className="text-xs text-indigo-400 font-medium">
                    Đang chọn lượt:{' '}
                    {teams.find((t) => t.id === selectedTeamIdQ5)?.name}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {teams.map((team) => {
                  const isChecked = selectedTeamIdQ5 === team.id;
                  return (
                    <label
                      key={team.id}
                      onClick={() => setSelectedTeamIdQ5(team.id)}
                      className={`relative flex items-center gap-3 p-3 rounded-xl border cursor-pointer select-none transition-all ${
                        isChecked
                          ? `${team.theme.borderActive} ${team.theme.activeBg} ring-2 ring-offset-2 ring-offset-slate-950 ${team.theme.borderActive} shadow-md`
                          : `border-slate-800 bg-slate-950/70 hover:border-slate-700 hover:bg-slate-900`
                      }`}
                    >
                      <input
                        type="radio"
                        name="answering-team-q5"
                        checked={isChecked}
                        onChange={() => setSelectedTeamIdQ5(team.id)}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                          isChecked
                            ? `${team.theme.dotBg} border-transparent`
                            : 'border-slate-600 bg-slate-900'
                        }`}
                      >
                        {isChecked && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs sm:text-sm font-semibold text-slate-200 truncate block">
                          {team.name}
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* FEEDBACK THÔNG BÁO KẾT QUẢ CÂU 5 */}
            {feedbackQ5.message && (
              <div
                className={`p-4 rounded-2xl flex items-start gap-3 text-sm ${
                  feedbackQ5.type === 'success'
                    ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                    : feedbackQ5.type === 'error'
                    ? 'bg-rose-500/15 border border-rose-500/30 text-rose-300'
                    : 'bg-amber-500/15 border border-amber-500/30 text-amber-300'
                }`}
              >
                {feedbackQ5.type === 'success' ? (
                  <Check className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
                )}
                <div className="flex-1 font-medium">{feedbackQ5.message}</div>
              </div>
            )}

            {/* 3. Ô "TRẢ LỜI" CÂU 5 */}
            <div className="pt-2 flex items-center justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto min-w-[200px] px-8 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-600 hover:from-rose-600 hover:via-pink-600 hover:to-indigo-700 text-white font-bold text-base shadow-lg shadow-indigo-500/25 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Check className="w-5 h-5" />
                <span>TRẢ LỜI</span>
              </button>
            </div>
          </form>
        </main>
      )}

      {/* SCREEN 7: TỔNG KẾT & XẾP HẠNG CÁC ĐỘI */}
      {screen === 'results' && (
        <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-10 flex flex-col items-center justify-center">
          <div className="w-20 h-20 rounded-3xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mb-6 text-amber-400 shadow-xl shadow-amber-500/10">
            <Trophy className="w-10 h-10" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-center mb-2">
            Tổng Kết Điểm Các Đội
          </h1>
          <p className="text-slate-400 text-sm sm:text-base mb-8 text-center">
            Chúc mừng tất cả các đội đã hoàn thành phần khám phá các loại hình nghệ thuật!
          </p>

          {/* Bảng xếp hạng các đội */}
          <div className="w-full max-w-2xl bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4 mb-8">
            {sortedTeams.map((team, index) => {
              const rank = index + 1;
              const isFirst = rank === 1;
              const isSecond = rank === 2;
              const isThird = rank === 3;

              return (
                <div
                  key={team.id}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                    isFirst
                      ? 'border-amber-400/50 bg-amber-500/10 ring-1 ring-amber-400/30'
                      : isSecond
                      ? 'border-slate-400/40 bg-slate-800/40'
                      : isThird
                      ? 'border-amber-700/40 bg-amber-900/10'
                      : 'border-slate-800 bg-slate-950/60'
                  }`}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                        isFirst
                          ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                          : isSecond
                          ? 'bg-slate-300 text-slate-950'
                          : isThird
                          ? 'bg-amber-700 text-white'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {rank}
                    </div>
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`w-3.5 h-3.5 rounded-full shrink-0 ${team.theme.dotBg}`}
                      />
                      <span className="text-base font-bold text-white truncate">
                        {team.name}
                      </span>
                      {isFirst && (
                        <Award className="w-4 h-4 text-amber-400 shrink-0 ml-1" />
                      )}
                    </div>
                  </div>

                  <span className="text-xl sm:text-2xl font-extrabold tabular-nums text-white shrink-0 ml-4">
                    {team.score} <span className="text-sm text-slate-400 font-semibold">điểm</span>
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                setScreen('question-5');
              }}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Quay lại Câu 5</span>
            </button>

            <button
              onClick={() => {
                setScreen('team-setup');
                setUserAnswerQ1('');
                setUserAnswerQ2('');
                setUserAnswerQ3('');
                setUserAnswerQ4('');
                setUserAnswerQ5('');
                setSelectedTeamIdQ1(null);
                setSelectedTeamIdQ2(null);
                setSelectedTeamIdQ3(null);
                setSelectedTeamIdQ4(null);
                setSelectedTeamIdQ5(null);
                setFeedbackQ1({ type: null, message: '' });
                setFeedbackQ2({ type: null, message: '' });
                setFeedbackQ3({ type: null, message: '' });
                setFeedbackQ4({ type: null, message: '' });
                setFeedbackQ5({ type: null, message: '' });
              }}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-600 hover:from-rose-600 hover:via-pink-600 hover:to-indigo-700 text-white text-sm font-bold shadow-lg shadow-indigo-500/25 transition-all flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Chơi lại từ đầu</span>
            </button>
          </div>
        </main>
      )}

      {/* Bottom spacer */}
      <footer className="py-4"></footer>
    </div>
  );
}
