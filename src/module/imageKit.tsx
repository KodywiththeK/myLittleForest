export function checkWebPSupport() {
  const elem = document.createElement('canvas');
  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
}

export function urlToWebP(url: string) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx?.drawImage(img, 0, 0);
    canvas.toBlob(
      function (blob: Blob | null) {
        if (blob) {
          const newUrl = URL.createObjectURL(blob);
          const img = new Image();
          img.src = newUrl;
          return img;
        } else {
          throw new Error('Failed to create WebP image');
        }
      },
      'image/webp',
      0.75
    );
  };
  img.src = url;
}
