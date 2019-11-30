class ExampleService {
    axios
    baseUrl

    constructor(axios) {
        this.axios = axios
        this.baseUrl = 'https://api.myjson.com/bins/83cdi/'
    }

    getAll(params) {
        let self = this;
        return self.axios.get(`${self.baseUrl}`);
    }

    get(id) {
        let self = this;
        return self.axios.get(`${self.baseUrl}/${id}`);
    }
}

export default ExampleService