let helpers = {
    asset: (path) => {
        return `${process.env.APP_URL}/${path}`
    },
    url: (url) => {
        return `${process.env.APP_URL}/${url}`
    },
    homeUrl: () => {
        return `${process.env.APP_URL}`
    },
    ifEqual: (conditional, options) => {
        if (options.hash.equal == conditional) {
            return options.fn(this)
        } else {
            return options.inverse(this);
        }
    }
};

export { helpers }
