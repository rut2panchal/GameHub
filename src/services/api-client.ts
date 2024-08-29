import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '5e87dd25ae824b55be63020ce6014171'
    }
})