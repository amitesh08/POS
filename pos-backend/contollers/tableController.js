const createHttpError = require("http-errors");
const Table = require("../models/tableModel");
const mongoose = require("mongoose");

const addTable = async (req, res, next) => {
  try {
    const { tableNo, seats } = req.body;

    if (!tableNo || !seats) {
      const error = createHttpError(404, "Please, provide all details!");
      return next(error);
    }

    const istablePresent = await Table.findOne({ tableNo });

    if (istablePresent) {
      const error = createHttpError(404, "Table already exist!");
      return next(error);
    }

    const newtable = new Table({ tableNo, seats });
    await newtable.save();

    res.status(201).json({
      success: true,
      message: "Table added",
      data: newtable,
    });
  } catch (error) {
    next(error);
  }
};
const getTables = async (req, res, next) => {
  try {
    const tables = await Table.find();

    res.status(200).json({
      success: true,
      data: tables,
    });
  } catch (error) {
    next(error);
  }
};
const updateTable = async (req, res, next) => {
  try {
    const { status, orderId } = req.body;
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = createHttpError(404, "Invalid Id");
      return next(error);
    }

    const table = await Table.findByIdAndUpdate(
      id,
      { status, currentOrder: orderId },
      { new: true }
    );
    if (!table) {
      const error = createHttpError(404, "Table not found");
      return next(error);
    }
    res.status(200).json({
      success: true,
      message: "Table updated",
      data: Table,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = { addTable, getTables, updateTable };
