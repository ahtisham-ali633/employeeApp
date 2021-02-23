const HttpStatusCode = require("./HttpStatusCode");

class HttpResp {
    constructor(statusCode, body) {
        this.statusCode = statusCode;
        this.body = body;
    }

    static create(respCode, body) {
        if(respCode === HttpStatusCode.ERROR || respCode === HttpStatusCode.NOT_FOUND || respCode === HttpStatusCode.NOT_AUTHORIZED) {
            if(body instanceof Error) {
                console.log(body);
                return new HttpResp(respCode, {error: body.message});
            }
            return new HttpResp(respCode, {error: body});
        }
        return new HttpResp(respCode, body);
    }

    static convertToExpress(resp, httpResp) {
        return resp.status(httpResp.statusCode).json(httpResp.body);
    }
}

module.exports = HttpResp;
