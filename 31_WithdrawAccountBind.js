const account1 = {
    name: 'Jen',
    totalAmount: 5000,
    deductAmount: function(amount) {
      this.totalAmount -= amount;
      return 'Amount in account: ' + this.totalAmount;
    },
  };
   
  const account2 = {
    name: 'James',
    totalAmount: 8000,
  };
   
  const withdrawFromAccount = function(amount) {
    return account1.deductAmount.bind(account2, amount);
  };
   
  //remove 500 from account2
  console.log(withdrawFromAccount(500)()); // = 7500

  //remove 300 from account2
  console.log(withdrawFromAccount(200)()); // = 7300