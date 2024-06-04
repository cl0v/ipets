import usePetImages from "./imagesState"
import usePetPrice from "./priceState"

/// Responsável por receber a query quando tem alguma alteração no filtro.
export const useFetchPriceNImages = async () => {
  const { setPetImages } = usePetImages()
  const { setPetPrice } = usePetPrice()

  const route = useRoute();
  const { size, gender, color } = route.query;
  const { breed } = route.params

  const { price, images } = await $fetch('/api/details/price-image', {
    query: {
      size: size,
      breed: breed,
      color: color,
      gender: gender,
    }
  })

  setPetImages(images)
  setPetPrice(price)
}
