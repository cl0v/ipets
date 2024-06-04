import usePetImages from "./imagesState"
import usePetPrice from "./priceState"

/// Responsável por receber a query quando tem alguma alteração no filtro.
export const useFetchPriceNImages = async () => {
  const { setPetImages } = usePetImages()
  const { setPetPrice } = usePetPrice()

  const route = useRoute();
  const { size, gender, color } = route.query;
  const { breed } = route.params

  const { data: priceAndImage} = await useFetch('/api/details/price-image', {
    query: {
      breed: breed,
      size: size,
      gender: gender,
      color: color
    }
  })

  const {images, price } = priceAndImage.value!

  setPetImages(images)
  setPetPrice(price)
}
