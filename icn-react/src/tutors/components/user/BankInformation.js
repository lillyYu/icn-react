import React from 'react'

const BankInformation = () => {
  return (
    <div className='signWrap'>
      <div className="signProcess">
        <ul>
          <li className='done'>
            <i class='bx bx-user'></i>
          </li>
          <li className='done'>
            <i class='bx bxs-school'></i>
          </li>
          <li className='active'>
            <i class='bx bx-credit-card'></i>
          </li>
        </ul>
      </div>
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

        <button>Sign up</button>
      </form>
    </div>
  )
}

export default BankInformation