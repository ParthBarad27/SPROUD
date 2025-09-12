import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import './Assessment.css';

type AssessmentType = 'PHQ-9' | 'GAD-7' | 'GHQ';

const Assessment: React.FC = () => {
  const [currentAssessment, setCurrentAssessment] = useState<AssessmentType | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [results, setResults] = useState<null | { score: number; severity: string; recommendations: string[]; date: string }>(null);

  const assessmentTypes = [
    { id: 'PHQ-9' as const, title: 'PHQ-9 Depression Screening', description: 'Patient Health Questionnaire', duration: '5–7 min' },
    { id: 'GAD-7' as const, title: 'GAD-7 Anxiety Assessment', description: 'Generalized Anxiety Disorder tool', duration: '3–5 min' },
    { id: 'GHQ' as const, title: 'General Health Questionnaire', description: 'Overall mental wellness', duration: '8–10 min' },
  ];

  const questions: Record<AssessmentType, string[]> = {
    'PHQ-9': [
      'Little interest or pleasure in doing things',
      'Feeling down, depressed, or hopeless',
      'Trouble falling or staying asleep, or sleeping too much',
    ],
    'GAD-7': [
      'Feeling nervous, anxious, or on edge',
      'Not being able to stop or control worrying',
      'Worrying too much about different things',
    ],
    'GHQ': [
      'Able to concentrate on what you are doing?',
      'Lost much sleep over worry?',
      'Felt you are playing a useful part in things?',
    ],
  };

  const answerOptions = [
    { value: 0, label: 'Not at all' },
    { value: 1, label: 'Several days' },
    { value: 2, label: 'More than half the days' },
    { value: 3, label: 'Nearly every day' },
  ];

  const startAssessment = (type: AssessmentType) => {
    setCurrentAssessment(type);
    setCurrentQuestion(0);
    setAnswers([]);
    setIsCompleted(false);
    setResults(null);
  };

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);

    if (currentQuestion < (currentAssessment ? questions[currentAssessment].length - 1 : 0)) {
      setCurrentQuestion((q) => q + 1);
    } else {
      completeAssessment(newAnswers);
    }
  };

  const completeAssessment = (finalAnswers: number[]) => {
    const totalScore = finalAnswers.reduce((sum, a) => sum + (Number.isFinite(a) ? a : 0), 0);
    let severity = 'Minimal';
    let recommendations: string[] = [];

    if (totalScore >= 6) { severity = 'Mild'; recommendations = ['Monitor symptoms', 'Try relaxation exercises']; }
    if (totalScore >= 10) { severity = 'Moderate'; recommendations = ['Schedule counseling', 'Practice stress management']; }
    if (totalScore >= 15) { severity = 'Severe'; recommendations = ['Seek professional help immediately']; }

    setResults({ score: totalScore, severity, recommendations, date: new Date().toLocaleDateString() });
    setIsCompleted(true);
  };

  const resetAssessment = () => {
    setCurrentAssessment(null);
    setCurrentQuestion(0);
    setAnswers([]);
    setIsCompleted(false);
    setResults(null);
  };

  if (isCompleted && results && currentAssessment) {
    return (
      <div className="assessment-container">
        <div className="assessment-complete">
          <CheckCircle className="check-icon" />
          <h2>Assessment Complete</h2>
          <div className="results-box">
            <h3>Your {currentAssessment} Score</h3>
            <div className="score">{results.score}</div>
            <div className="severity">Severity: {results.severity}</div>
            <ul>
              {results.recommendations.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
            <div className="date">Date: {results.date}</div>
          </div>
          <button onClick={resetAssessment}>Restart Assessment</button>
        </div>
      </div>
    );
  }

  if (currentAssessment) {
    const qs = questions[currentAssessment];
    return (
      <div className="assessment-container">
        <h2>{currentAssessment} Assessment</h2>
        <div className="question-box">
          <p>{qs[currentQuestion]}</p>
          <div className="answer-options">
            {answerOptions.map((option) => (
              <button key={option.value} onClick={() => handleAnswer(option.value)}>
                {option.label}
              </button>
            ))}
          </div>
          <p>Question {currentQuestion + 1} of {qs.length}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="assessment-container">
      <h2>Select Assessment</h2>
      <div className="assessment-options">
        {assessmentTypes.map((type) => (
          <button key={type.id} onClick={() => startAssessment(type.id)}>
            <strong>{type.title}</strong>
            <p>{type.description}</p>
            <small>{type.duration}</small>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Assessment;
