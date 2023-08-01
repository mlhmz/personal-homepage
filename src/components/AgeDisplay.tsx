import { Age } from "age2";

export interface AgeDisplayProps {
  day: number;
  month: number;
  year: number;
}

export const AgeDisplay = ({ day, month, year }: AgeDisplayProps) => {
  const age = new Age(`${year}-${month}-${day}`);

  return <>{age.value}</>;
}