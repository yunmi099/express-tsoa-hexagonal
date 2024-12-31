import { NewsDto } from '../../domain/dto/newsDto';
import { News } from '../../domain/entity/news';

export interface NewsOutAdapter {
  //findById(newsId: string): Promise<News[]>;
  findAll(): Promise<News[]>;
}
