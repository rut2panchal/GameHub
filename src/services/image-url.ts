import noImage from '../assets/no-image-placeholder.webp'
const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const target = 'media/';
  const medIndex = url.indexOf(target) + target.length;
  return url.slice(0, medIndex) + 'crop/600/400/' + url.slice(medIndex);
}

export default getCroppedImageUrl;