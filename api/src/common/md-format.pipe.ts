import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class MdFormatPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    return value.replace(/\n{2,}/g, (match) => {
      const extraBreaks = match.length - 1;
      return '\n' + Array(extraBreaks).fill('&nbsp;\n').join('');
    });
  }
}
