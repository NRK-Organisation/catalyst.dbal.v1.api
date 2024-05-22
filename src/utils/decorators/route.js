function route(method, path) {
    console.log(`route decorator called with ${method} and ${path}`);
    return function (target, key, descriptor) {
        if (!target.constructor.routes) {
            target.constructor.routes = [];
        }
        target.constructor.routes.push({ method, path, handler: key });
    };
}

module.exports = route;
