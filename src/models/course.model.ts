export interface Course {
  id: number;
  name: string;
  description: string;
  date: Date;
  length: string;
  type: 'fundamental' | 'angular' | '.net';
  authors: string[];
  isTopRated: boolean;
}
