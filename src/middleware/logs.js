const logRequest = (req, res, next) => {
    console.log('Proses request ke PATH: ', req.path);
    next();
}

module.exports = logRequest;