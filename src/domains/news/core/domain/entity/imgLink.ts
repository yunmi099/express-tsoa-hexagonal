import { IllegalArgumentException } from '@express-hexagonal-practice/domains/error/core/domain/entity/illegalArgumentException';
import { ImageExtension } from '../../../../common/core/domain/entity/imageExtension';
import { Link } from '../../../../common/core/domain/entity/link';

export class ImageLink {
  public readonly link: Link;
  public readonly extension: ImageExtension;

  constructor(url: string);
  constructor(link: Link);
  constructor(link: Link, extension: ImageExtension);
  constructor(link: string | Link, extension?: ImageExtension) {
    const linkValue = typeof link === 'string' ? link : link.getUrl();

    // 빈 문자열인 경우 유효성 검사 건너뛰고 기본값 할당
    if (linkValue === '') {
      this.link = new Link(''); // 빈 문자열을 가진 Link 객체 생성
      this.extension = ImageExtension.JPG; // 기본 확장자로 JPG 설정 또는 다른 기본 처리
      return;
    }

    if (extension == null) {
      const { filteredLink, ext } = this.extractExtension(linkValue);

      this.link = filteredLink;
      this.extension = ext;
      return;
    }

    if (this.isNotImageLink(linkValue)) {
      throw new IllegalArgumentException('유효한 이미지 확장자가 없습니다.');
    }

    this.link = new Link(linkValue);
    this.extension = extension;
  }

  private extractExtension(url: string): {
    filteredLink: Link;
    ext: ImageExtension;
  } {
    const regexExtPair = Object.values(ImageExtension)
      .map(ext => ({ ext, regex: new RegExp(`\\.${ext}$`, 'i') }))
      .find(({ regex }) => regex.test(url));

    if (!regexExtPair) {
      throw new IllegalArgumentException('유효한 이미지 확장자가 없습니다.');
    }

    const { ext, regex } = regexExtPair;

    return { filteredLink: new Link(url.replace(regex, '')), ext };
  }

  private isNotImageLink(url: string): boolean {
    return !Object.values(ImageExtension).some(ext =>
      new RegExp(`\\.${ext}$`, 'i').test(url)
    );
  }

  getUrl(): string {
    return this.link.getUrl(); // Link 객체의 getUrl() 메서드를 호출하여 URL을 반환
  }
}
