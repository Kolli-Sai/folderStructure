const express = require("express");

const Task = require("../models/Task");

const createTask = async (req, res) => {
  try {
    const task = await Task.create({
      name: req.body.name,
    });

    res.json(task);
  } catch (error) {
    res.json(error);
  }
};

const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find({});
    res.json(task);
  } catch (error) {
    res.json(error);
  }
};

const getTask = async (req, res) => {
  try {
    const task = await Task.findById({ _id: req.params.id });

    if (!task) {
      return res.status(404).send(`${req.params.id} was not found`);
    }
    res.json(task);
  } catch (error) {
    res.json(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.updateOne(
      { _id: req.params.id },
      {
        $set: {
          completed: req.body.completed,
        },
      }
    );

    res.json(task);
  } catch (error) {
    res.json(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.deleteOne({ _id: req.params.id });
    res.json(task);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { createTask, getAllTasks, getTask, updateTask, deleteTask };
