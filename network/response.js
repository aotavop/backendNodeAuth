exports.success = function (req, res, message = '', status) {
    res.status(status).send({
        error: false,
        status,
        body: message,
    });
};

exports.error = function (req, res, message = 'Internal Server Error', status = httpStatus.INTERNAL_SERVER_ERROR) {
    res.status(status).send({
        error: true,
        status,
        body: message,
    });
};
