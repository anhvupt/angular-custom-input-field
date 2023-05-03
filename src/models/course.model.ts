export interface Course {
  id: number;
  name: string;
  description: string;
  type: 'seminars' | 'tutorials' | 'exercises';
  category: 'fundamental' | 'angular' | '.net';
  isTopRated: boolean;
}
