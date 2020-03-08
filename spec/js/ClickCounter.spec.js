describe('ClickCounterTest', () => {
    let underTest
    beforeEach(()=>{
       underTest = new ClickCounter()
    })
    it('should record a click', () => {
        underTest.recordClick()
        expect(underTest.clickCount).toBe(1)
    });
    it('should record 2clicks', () => {
        // we have two underTest.recordClick because we want to record two clicks
       underTest.recordClick()
        underTest.recordClick()
        expect(underTest.clickCount).toBe(2)
    });
  it ('should have no companion when new',()=>{
      expect(underTest.companionCount).toBe(0);

  })
  it('should be able to buy companion with 100 clicks',()=>{
    for(let i=0;i<100;i++){
        underTest.recordClick();
    }
    underTest.buyCompanion()
    expect(underTest.companionCount).toBe(1);
  })
});
