export default defineEventHandler((event) => {


    let { gender, size, color } = getQuery(event)

    if (gender != 'female') {
        gender = 'male'
    }

    // http://localhost:3000/filhotes/golden-retriever?size=0&gender=male&color=gold3
    // Golden Retriever Creme.
    let price = 0

    if (gender == 'male') {

        price = 4000
    }
    else {
        price = 5000
    }

    return {
        price
    }

})
