import React from 'react'

const BankInformation = ({handlePrevious}) => {
  return (
    <>
      <h1 className="userHeader">Bank information</h1>
  
      <form>
        <section>
          <h2>Bank account information</h2>

          <div className='inputLabel'>
            <label htmlFor="recipientName">Recipient’s name</label>
            <input 
              type="text"
              id="recipientName"
              placeholder="Recipient’s name"
            />
          </div>

          <div className='inputLabel'>
            <label htmlFor="bankAddress">Bank address</label>
            <input 
              type="text"
              id="bankAddress"
              placeholder="Bank address"
            />
          </div>

          <div className='inputLabel'>
            <label htmlFor="bankAccount">Bank account number</label>
            <input 
              type="text"
              id="bankAccount"
              placeholder="Bank account number"
            />
          </div>

          <div className='inputLabel'>
            <label htmlFor="abaNumber">ABA number</label>
            <input 
              type="text"
              id="abaNumber"
              placeholder="ABA number"
            />
          </div>
        </section>

        <div className='buttons'>
          <button type='button' onClick={handlePrevious}>Previous</button>
          <button type='button'>Done</button>
        </div>
      </form>
    </>
  )
}

export default BankInformation