const express = require('express');
const router = express.Router();
const expenseController = require('../Controller/expensesController');

router.post('/', expenseController.createExpense);
router.get('/:userId', expenseController.getExpensesByUserId);
router.get('/', expenseController.getAllExpenses);
router.get('/balance-sheet', expenseController.getBalanceSheet);

module.exports = router;