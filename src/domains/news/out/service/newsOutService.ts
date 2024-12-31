import { NewsDto } from '../../core/domain/dto/newsDto';
import { News } from '../../core/domain/entity/news';
import { NewsOutAdapter } from '../../core/out/adapter/newsOutAdapter';
import { NewsElasticSearchRepository } from './ElasticSearch/repository/newsElasticSearch';

export class NewsOutService implements NewsOutAdapter {
  private readonly newsMysql: NewsElasticSearchRepository;

  constructor(newsMysql = new NewsElasticSearchRepository()) {
    this.newsMysql = newsMysql;
  }

  async findById(newsId: string): Promise<News[]> {
    // const entities: News[] = await this.newsMysql.getJpNewsById(newsId);
    // return entities;
    return [];
  }

  async findAll(): Promise<News[]> {
    const entities: News[] = await this.newsMysql.get30news();
    return entities;
  }
}
