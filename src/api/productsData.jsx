import axios from "axios";

const ProductsData = async () => {
    return await axios.get('https://api-jordan-shoes.vercel.app/shoes')
}

export default ProductsData

