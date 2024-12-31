import { NewsDto } from 'src/domains/news/core/domain/dto/newsDto';
import { NewsSerivce } from 'src/domains/news/core/domain/service/newsService';
import { NewsInAdapter } from 'src/domains/news/core/in/adapter/newsInAdapter';
import {
  Get,
  Path,
  Route,
  Tags,
  Controller,
  Response,
  SuccessResponse
} from 'tsoa';

import { CommonResponse } from '../../common/response/response';
import { NewsInfoResponses } from '../response';

import { ErrorResponse, CustomError } from '../../../common/response';

@Route('/news')
@Tags('JNews')
export class NewsController extends Controller {
  private readonly newsInAdapter: NewsInAdapter;

  constructor() {
    super();
    this.newsInAdapter = new NewsSerivce();
  }

  /**
   *
   * @returns 모든 일본 뉴스 반환
   */
  @Get('/')
  @SuccessResponse(200, 'Success')
  @Response<ErrorResponse>(400, 'Bad Request', {
    code: 400,
    description: 'nothing in News'
  })
  public async getAllNews(): Promise<CommonResponse<NewsInfoResponses>> {
    // Changed method name to getAllNews
    const newsDtos: NewsDto[] = await this.newsInAdapter.getNews();
    return {
      code: 200,
      data: new NewsInfoResponses(newsDtos)
    };
  }

  @Get('/{id}')
  public async getNewsById(
    @Path() id: string
  ): Promise<CommonResponse<NewsInfoResponses>> {
    // Renamed to getNewsById
    const newsDtos: NewsDto[] = await this.newsInAdapter.getNewsById(id); // Fixed method name to getNewsById;
    return {
      code: 200,
      data: new NewsInfoResponses(newsDtos)
    };
  }
}
