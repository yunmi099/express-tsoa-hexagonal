import { NewsOutService } from 'src/domains/news/out/service/newsOutService';
import { NewsInAdapter } from '../../in/adapter/newsInAdapter';
import { NewsOutAdapter } from '../../out/adapter/newsOutAdapter';
import { NewsDto } from '../dto/newsDto';

export class NewsSerivce implements NewsInAdapter {
  private readonly newsOutAdapter: NewsOutAdapter;

  // constructor(private readonly newsOutAdapter: NewsOutAdapter) {
  // }

  constructor() {
    this.newsOutAdapter = new NewsOutService();
  }
  getNewsById(newsId: string): Promise<NewsDto[]> {
    throw new Error('Method not implemented.');
  }

  // async getNewsById(newsId: string): Promise<NewsDto[]> {
  //   const data = await this.newsOutAdapter.findById(newsId);

  //   data.map(item => item.title);

  //   return data.filter(item => item.createdAt === new Date()); // 다음과 같은 데이터 비즈니스 로직이 들어감
  // }

  async getNews(): Promise<NewsDto[]> {
    const data = await this.newsOutAdapter.findAll();
    return data.map(datum => datum.convertToDto());
  }
}
