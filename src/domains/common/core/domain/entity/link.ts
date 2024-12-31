import { IllegalArgumentException } from '@express-hexagonal-practice/domains/error/core/domain/entity/illegalArgumentException';

export class Link {
  public static readonly linkRegex: RegExp = /^https?:\/\/.*/;

  private readonly url: string;

  constructor(url: string) {
    // 빈 문자열인 경우 유효성 검사를 건너뛰고 그대로 할당
    if (url === '') {
      this.url = url; // 빈 문자열을 허용
      return;
    }

    if (!Link.linkRegex.test(url)) {
      throw new IllegalArgumentException(
        'Link는 http 또는 https로 시작해야 합니다.'
      );
    }
    this.url = url;
  }

  getUrl(): string {
    return this.url;
  }
}
