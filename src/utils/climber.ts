export type FaceExpression = 'nervous' | 'focused' | 'happy' | 'victory' | 'sad' | 'surprised';

export const getClimberPosition = (correctAnswersCount: number) => {
  switch (correctAnswersCount) {
    case 0: return { y: 90, x: 50 }; // Base
    case 1: return { y: 74, x: 32 }; // Ledge 1
    case 2: return { y: 58, x: 68 }; // Ledge 2
    case 3: return { y: 42, x: 32 }; // Ledge 3
    case 4: return { y: 26, x: 68 }; // Ledge 4
    case 5: return { y: 10, x: 50 }; // Summit
    default: return { y: 90, x: 50 };
  }
};

export const getExpressionForCount = (correctAnswersCount: number): FaceExpression => {
  if (correctAnswersCount === 0) return 'nervous';
  if (correctAnswersCount === 1 || correctAnswersCount === 2) return 'focused';
  if (correctAnswersCount === 3 || correctAnswersCount === 4) return 'happy';
  return 'victory';
};
