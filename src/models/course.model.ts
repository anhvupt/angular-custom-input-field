export interface Course {
  id: number;
  name: string;
  description: string;
  date: Date;
  length: number;
  authors: string[];
  isTopRated: boolean;
}