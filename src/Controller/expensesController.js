const Expense = require('../model/Expense');

const createExpense = async (req, res) => {
  try {
    const expense = new Expense(req.body);
    await expense.save();
    res.status(201).json({ id: expense._id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getExpensesByUserId = async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.params.userId });
    res.json(expenses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().populate('userId', 'name');
    res.json(expenses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getBalanceSheet = async (req, res) => {
  try {
    const expenses = await Expense.find().populate('userId', 'name');
    res.csv(expenses, true);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
  createExpense,
  getExpensesByUserId,
  getAllExpenses,
  getBalanceSheet
};