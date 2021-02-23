

class HttpStatusCode {
    static get OK() {
        return 200;
    }

    static get ERROR() {
        return 400;
    }

    static get NOT_FOUND() {
        return 404;
    }

    static get NOT_AUTHORIZED() {
        return 401;
    }
}

module.exports = HttpStatusCode;