const getCroppedImageUrl = (url: string) => {
  if (!url) return url;
  const target = 'media/';
  const medIndex = url.indexOf(target) + target.length;
  return url.slice(0, medIndex) + 'crop/600/400/' + url.slice(medIndex);
}

export default getCroppedImageUrl;