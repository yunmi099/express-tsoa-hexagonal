import { News } from 'src/domains/news/core/domain/entity/news';
import client from '@express-hexagonal-practice/api/configuration/elastic/connection';

export class NewsElasticSearchRepository {
  // async getJpNewsById(newsId: string): Promise<News[]> {
  //   throw new Error('Method not implemented.');
  // }
  async getJp30news(): Promise<News[]> {
    try {
      const result = await client.search({
        index: 'jp-news',
        body: {
          sort: [
            {
              date: {
                order: 'desc' // 'asc' for ascending order
              }
            }
          ]
        }
      });

      const resultHits = result?.body?.hits;
      console.log(resultHits);
      return [];
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  // const response = await client.search(query);
  // const hits = response.hits.hits;

  // // Map Elasticsearch hits to NewsInfoResponse objects
  // const newsArray: News[] = hits.map((hit: any) => hit._source);
}
