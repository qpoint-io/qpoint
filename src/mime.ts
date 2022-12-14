
export function mimeCategory(contentType: string = ''): string {
  // ensure we're not undefined or null somehow
  if (!contentType || contentType == null || contentType == undefined)
    contentType = ''

  // truncate the content/type to just the type, not encoding etc
  if (contentType.includes(';'))
    contentType = contentType.split(';')[0];

  if (isApp(contentType))
    return 'app';

  if (isCss(contentType))
    return 'css';

  if (isJs(contentType))
    return 'js';

  if (isFont(contentType))
    return 'font';

  if (isImage(contentType))
    return 'image';

  if (isMedia(contentType))
    return 'media';

  return 'other';
}

function isApp(contentType: string) {
  return ['text/html', 'application/json', 'application/grpc', 'text/xml', 'application/xml', 'text/plain'].includes(contentType);
}

function isCss(contentType: string) {
  return contentType == 'text/css';
}

function isJs(contentType: string) {
  return contentType == 'text/javascript';
}

function isFont(contentType: string) {
  return contentType.startsWith('font');
}

function isImage(contentType: string) {
  return contentType.startsWith('image');
}

function isMedia(contentType: string) {
  return contentType.startsWith('audio') || contentType.startsWith('video');
}