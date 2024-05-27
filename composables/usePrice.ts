/// Intended to update state when image list changes.

export const usePrice = () => {
    const price = useState('price', () => 0)
    const setPrice = (newPrice: number) => {
      console.log('setPrice', newPrice, price.value || 'None!')
      if (!price.value) {
        price.value = newPrice
      }
    }
    return {
      price,
      setPrice
    }
  }