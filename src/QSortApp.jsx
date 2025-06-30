
// Q정렬 앱 - 상대 경로 수정 완료 (Vercel용)

import React, { useState } from 'react';
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../components/ui/select";

const initialStatements = Array.from({ length: 38 }, (_, i) => ({ id: i + 1, text: `진술문 ${i + 1}` }));

export default function QSortApp() {
  const [step, setStep] = useState(1);
  const [participant, setParticipant] = useState({ name: '', age: '', gender: '', career: '', design: '' });
  const [statements] = useState(initialStatements);
  const [groups] = useState({ positive: [], neutral: [], negative: [] });
  const [sorted] = useState({
    "-4": [], "-3": [], "-2": [], "-1": [], "0": [], "+1": [], "+2": [], "+3": [], "+4": []
  });

  const handleNext = () => setStep(step + 1);

  return (
    <div className="grid gap-6 p-8 max-w-5xl mx-auto">
      {step === 1 && (
        <Card>
          <CardContent className="p-6 grid gap-4">
            <h2 className="text-xl font-bold">참여자 정보 입력</h2>
            <Input placeholder="이름" onChange={e => setParticipant(p => ({ ...p, name: e.target.value }))} />

            <Select onValueChange={v => setParticipant(p => ({ ...p, age: v }))}>
              <SelectTrigger><SelectValue placeholder="나이" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="20대">20대</SelectItem>
                <SelectItem value="30대">30대</SelectItem>
                <SelectItem value="40대">40대</SelectItem>
                <SelectItem value="50대 이상">50대 이상</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={v => setParticipant(p => ({ ...p, gender: v }))}>
              <SelectTrigger><SelectValue placeholder="성별" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="남">남</SelectItem>
                <SelectItem value="여">여</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={v => setParticipant(p => ({ ...p, career: v }))}>
              <SelectTrigger><SelectValue placeholder="교직 경력" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="0~4년">0년 이상 ~ 4년 이하</SelectItem>
                <SelectItem value="5~9년">5년 이상 ~ 9년 이하</SelectItem>
                <SelectItem value="10~14년">10년 이상 ~ 14년 이하</SelectItem>
                <SelectItem value="15년 이상">15년 이상</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={v => setParticipant(p => ({ ...p, design: v }))}>
              <SelectTrigger><SelectValue placeholder="탐구학습 설계 경험" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="없음">설계 경험 없음</SelectItem>
                <SelectItem value="있으나 활용 안 함">경험은 있으나 주로 활용하지 않음</SelectItem>
                <SelectItem value="주로 활용">주로 활용하고 있음</SelectItem>
              </SelectContent>
            </Select>

            <Button className="w-full" onClick={handleNext}>다음으로</Button>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">1단계: 진술문 3분류</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 border rounded-xl min-h-[300px]">부정 영역</div>
              <div className="p-4 border rounded-xl min-h-[300px]">중립 영역</div>
              <div className="p-4 border rounded-xl min-h-[300px]">긍정 영역</div>
            </div>
            <Button className="mt-4" onClick={handleNext}>점수대로 정렬하기</Button>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">2단계: 점수대로 정렬하기</h2>
            <div className="grid grid-cols-9 gap-2 text-center text-sm">
              {Object.keys(sorted).map(level => (
                <div key={level} className="border p-2 rounded-xl min-h-[80px]">{level}</div>
              ))}
            </div>
            <Button className="mt-4" onClick={handleNext}>제출하기</Button>
          </CardContent>
        </Card>
      )}

      {step === 4 && (
        <Card>
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-bold">제출 완료</h2>
            <p className="text-gray-600">참여해 주셔서 감사합니다.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
