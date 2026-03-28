const Payment = require("../model/paymentModel");

const makePayment = async (req, res) => {
  try {
    const { riderName, amount } = req.body;

    const payment = new Payment({
      riderName,
      amount
    });

    await payment.save();

    res.json({ message: "Payment successful", payment });
  } catch (error) {
    res.status(500).json({ error: "Payment failed" });
  }
};

const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch payments" });
  }
};

module.exports = {
  makePayment,
  getPayments
};