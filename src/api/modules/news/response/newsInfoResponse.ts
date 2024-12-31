import { NewsDto } from 'src/domains/news/core/domain/dto/newsDto';

/**
 * Interface representing the response structure for news information.
 *
 * @interface NewsInfoResponse
 *
 * @author Yunmi Jung
 * @date 2024-08-19
 *
 * @example
 * const newsInfo: NewsInfoResponse = {
 *   code: 200,
 *   data: {
 *     count: 321,
 *     list: [{
 *     }]
 *   }
 * };
 *
 * @apiParam {string} [keyword] - The search keyword.
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "code": 200,
 *   "data": {
 *     "count": 321,
 *     "list": []
 *   }
 * }
 */

/**
 * Class representing a list of news information responses.
 */
export class NewsInfoResponses {
  count: number;
  list: NewsInfoResponse[];

  constructor(dtos: NewsDto[]) {
    this.count = dtos.length;
    this.list = dtos.map(dto => new NewsInfoResponse(dto));
  }
}

/**
 * Class representing a single news information response.
 */
export class NewsInfoResponse {
  searchAfter: string[];
  newsId: string;
  date: string;
  time: string;
  category: string;
  subcategory: string; // subcategory 추가
  title: string;
  titleHl: string;
  content: string;
  contentHl: string;
  press: string;
  pressHl: string;
  link: string;
  imgLink: string;
  hasEn: number;

  constructor(dto: NewsDto) {
    this.searchAfter = dto.searchAfter;
    this.newsId = dto.newsId;
    this.date = dto.date;
    this.time = dto.time;
    this.category = dto.category;
    this.subcategory = dto.subcategory; // subcategory 추가
    this.title = dto.title;
    this.titleHl = dto.titleHl;
    this.content = dto.content;
    this.contentHl = dto.contentHl;
    this.press = dto.press;
    this.pressHl = dto.pressHl;
    this.link = dto.link.getUrl(); // Link 객체의 URL 추출
    this.imgLink = dto.imageLink ? dto.imageLink.getUrl() : ''; // ImageLink 객체의 URL 추출
    this.hasEn = dto.hasEn;
  }
}
