import { NewsDto } from '../../domain/dto/newsDto';

export interface NewsInAdapter {
  getNewsById(newsId: string): Promise<NewsDto[]>;
  getNews(): Promise<NewsDto[]>;
  // searchNews(criteria: NewsSearchRequest): Promise<NewsInfoResponse[]>;
}
