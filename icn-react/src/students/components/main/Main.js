import 'students/components/scss/main/main.scss';

const Main = () => {
  return (
    <div className='studentMain'>
      <div className='studentMainWrap webWrap '>
        <aside>
          <ul>
            <li className='blue'>
              <div>
                <i className='bx bx-time-five' />
                <p>Lessons in 24 hours</p>
              </div>
              <span>12</span>
            </li>
            <li className='red'>
              <div>
                <i className='bx bx-calendar-exclamation'></i>
                <p>Upcoming Lessons</p>
              </div>
              <span>21</span>
            </li>
            <li className='green'>
              <div>
                <i className='bx bx-notepad'></i>
                <p>Lessons to review</p>
              </div>
              <span>0</span>
            </li>
            <li>
              <div>
                <i class='bx bx-calendar-plus'></i>
                <p>Book class</p>
              </div>
            </li>
            <li>
              <div>
                <i class='bx bx-user-plus'></i>
                <p>Invite friends</p>
              </div>
            </li>
            <li>
              <div>
                <i class='bx bx-cart-add' ></i>
                <p>Buy credit</p>
              </div>
            </li>
          </ul>
        </aside>

        <main>

        </main>
      </div>
    </div>
  )
}

export default Main