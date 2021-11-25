const logErrors = (err, req, res, next) => {
    next(err)
};

const boomErrorHandler = (err, req, res, next) => {
    
    if (err.isBoom) {
        const { output } = err
        return res.status(output.statusCode).json(output.payload)
    }
    next(err)

}

const errorHandler = (err, req, res, next) => {

    res.status(500).json(
        {
            message: err.message,
            stack: err.stack
        }
    )

}

module.exports = { logErrors, errorHandler, boomErrorHandler }