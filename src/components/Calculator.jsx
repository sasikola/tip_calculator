import React, { useState, useEffect } from "react";

function Calculator() {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numOfPeople, setNumOfPeople] = useState(1);
  const [totalTip, setTotalTip] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [customTip, setCustomTip] = useState()

  const handleBillAmountChange = (e) => {
    setBillAmount(e.target.value);
  };

  const handleTipPercentageChange = (percentage) => {
    setTipPercentage(percentage);
  };

  const handleNumOfPeopleChange = (e) => {
    setNumOfPeople(e.target.value);
  };
  const handleCustomTip = (e) => {
    setCustomTip(e.target.value);
  };
  const resetCalculator = () => {
    setBillAmount("");
    setTipPercentage(0);
    setNumOfPeople(1);
    setTotalTip(0);
    setTotalPerPerson(0);
    setCustomTip("")
   
  };

  useEffect(() => {
    if (billAmount && numOfPeople > 0) {
    //   const tipAmount = !tipPercentage ? (billAmount * tipPercentage) / 100 : (billAmount * customTip) / 100
    if(!tipPercentage){
        const tipAmount =  (billAmount * customTip) / 100 
        const totalBill = parseInt(billAmount) + tipAmount;
        const perPersonAmount = totalBill / numOfPeople;
        setTotalTip(tipAmount.toFixed(2));
        setTotalPerPerson(perPersonAmount.toFixed(2));
    }else{
        const tipAmount =  (billAmount * tipPercentage) / 100 
        const totalBill = parseInt(billAmount) + tipAmount;
        const perPersonAmount = totalBill / numOfPeople;
        setTotalTip(tipAmount.toFixed(2));
        setTotalPerPerson(perPersonAmount.toFixed(2));
        setCustomTip("") 
    }
    
    } else {
      setTotalTip(0);
      setTotalPerPerson(0);
      setCustomTip("");
    }
  }, [billAmount, tipPercentage, numOfPeople, customTip]);
  

  return (
    <div className="tip-calculator">
      <div className="left">
        <div>
          <label for="billAmount">Bill</label>
          <input
            className="form-control"
            type="number"
            id="billAmount"
            value={billAmount}
            onChange={handleBillAmountChange}
            placeholder="Enter bill amount"
          />
        </div>
        <div>
          <label>Select Tip</label>
          <div>
            <button className="btn btn-success m-2" onClick={() => handleTipPercentageChange(5)}>5%</button>
            <button className="btn btn-success m-2" onClick={() => handleTipPercentageChange(10)}>10%</button>
            <button className="btn btn-success" onClick={() => handleTipPercentageChange(15)}>15%</button>
            <button className="btn btn-success m-2" onClick={() => handleTipPercentageChange(25)}>25%</button>
            <button className="btn btn-success" onClick={() => handleTipPercentageChange(50)}>50%</button>
            <input
                type="number"
                className="form-control"
                placeholder="Custom Tip"
                value={customTip}
                onChange={handleCustomTip}
                />
          </div>
        </div>
        <div>
          <label for="numOfPeople">Number of People</label>
          <input
          className="form-control"
            type="number"
            id="numOfPeople"
            value={numOfPeople}
            onChange={handleNumOfPeopleChange}
            placeholder="Enter number of people"
          />
        </div>
      </div>
      <div className="right">
        <div>Tip Amount Per Person<h2>${totalTip}</h2></div>
        <div>Total Per Person<h2>${totalPerPerson}</h2></div>
        <div>
            <button className="btn btn-success" onClick={resetCalculator}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
