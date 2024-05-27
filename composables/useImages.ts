/// Intended to update state when image list changes.

export const useImages = () => {
    const images = useState('images', () => Array.of<ImageObj>())
    const setImages = (newImages: ImageObj[]) => {
      console.log('setImages', newImages, images.value || 'None!')
      if (!images.value) {
        images.value = newImages
      }
    }
    return {
      images,
      setImages
    }
  }