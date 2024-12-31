// src/domains/assemblySched/core/domain/entity/schedule.ts
export interface MySqlNews {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  timestamp: Date;
  time: string;
  category: string;
  subcategory: string;
  title: string;
  content: string;
  press: string;
  link: string;
  imageLink: string;
  hasEn: number;
  titleHl: string;
  contentHl: string;
  pressHl: string;
  searchAfter: string[];
  newsId: string;
  date: string;
}
