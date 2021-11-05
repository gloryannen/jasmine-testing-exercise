describe("Helper test (with setup and tear-down)", function() {
  beforeEach(function () {
    billAmtInput.value = 55;
    tipAmtInput.value = 11;
    submitPaymentInfo();
  });
  it('should sum the total payment()', function () {
    expect(sumPaymentTotal('billAmt')).toEqual(55)
  });
  it('should calculate tip percent()', function () {
    expect(calculateTipPercent(55, 11)).toEqual(20)
  });
  it('should append td to tr on func appendTd()', function () {
    let newTr = document.createElement('tr');
    appendTd(newTr, 'newEle');
    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('newEle');
  });
  it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
    let newTr = document.createElement('tr');
    appendTd(newTr, 'test');
    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('test');
  });
   it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
    let newTr = document.createElement('tr');
    appendDeleteBtn(newTr);
    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('X');
  });

  afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';    
    allPayments = {};
    paymentId = 0;
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    paymentTbody.innerHTML = '';
    serverTbody.innerHTML = '';
  });
}); 
