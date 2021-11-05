describe("Payment test (with setup and tear-down)", function() {
  beforeEach(function () {
    billAmtInput.value = 55;
    tipAmtInput.value = 11;
  });
  it('(should add payment to allPayments)', function () {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('55');
    expect(allPayments['payment1'].tipAmt).toEqual('11');
    expect(allPayments['payment1'].tipPercent).toEqual(20);
  });
  it('should not created payment if empty', function () {
    billAmtInput.value = '';
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(0);
  });
  it('should payment update on appendPaymentTable', function () {
    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;
    appendPaymentTable(curPayment);
 
    let curTdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(curTdList.length).toEqual(0);
  });
  it('should create new payment on createCurPayment()', function () {
    let expectedPayment = {
      billAmt: '55',
      tipAmt: '11',
      tipPercent: 20,
    }
    expect(createCurPayment()).toEqual(expectedPayment);
  });
  it('should not create payment with empty input on createCurPayment()', function () {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    let curPayment = createCurPayment();
    expect(curPayment).toEqual(undefined);
  });

  afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';    
    allPayments = {};
    paymentId = 0;
    serverTbody.innerHTML = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
  });
});
