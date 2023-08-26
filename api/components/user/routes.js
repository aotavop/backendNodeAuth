const express = require('express');
const response = require('../../../network/response');
const router = express.Router();
const httpStatus = require('http-status-codes');
const controller = require('./index');

router.get('/', function (req, res) {
  controller
    .list()
    .then((items) => {
      response.success(req, res, items, httpStatus.StatusCodes.OK);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
});

router.get('/:id', function (req, res) {
  controller
    .get(req.params.id)
    .then((user) => {
      response.success(req, res, user, httpStatus.StatusCodes.OK);
    })
    .catch((err) => {
      response.error(
        req,
        res,
        err.message,
        httpStatus.StatusCodes.INTERNAL_SERVER_ERROR
      );
    });
  response.success(req, res, items, httpStatus.StatusCodes.OK);
});

router.get('/:id', function (req, res) {
  controller
    .get(req.params.id)
    .then((user) => {
      response.success(req, res, user, httpStatus.StatusCodes.OK);
    })
    .catch((err) => {
      response.error(
        req,
        res,
        err.message,
        httpStatus.StatusCodes.INTERNAL_SERVER_ERROR
      );
    });
  response.success(req, res, items, httpStatus.StatusCodes.OK);
});

module.exports = router;
