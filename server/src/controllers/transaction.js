import Transaction from '../models/transaction.js';

// GET
const getAllTransactions = async (req, res) => {
  const transactions = await Transaction.find({ userId: req.userId });
  res.status(200).json(transactions);
};

// POST
const addTransaction = async (req, res) => {
  const data = { ...req.body, userId: req.userId };
  const createdTransaction = await Transaction.create(data);
  res.status(201).json(createdTransaction);
};

// PUT
const updateTransaction = async (req, res) => {
  const updated = await Transaction.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updated);
};

// DELETE
const deleteTransaction = async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: 'Transaction deleted' });
};

export {
  getAllTransactions,
  addTransaction,
  updateTransaction,
  deleteTransaction
};
