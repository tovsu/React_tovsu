import './App.css'

export function App () {
  return (
    <article className='tw-followCard'>

      <header className='tw-followCard-header'>

        <img className='tw-followCard-avatar' alt="Usuario generico" src="   https://cdn-icons-png.flaticon.com/512/3135/3135768.png " width="256" height="256"/>

        <div className='tw-followCard-avatar'>
          <strong>NN </strong>
          <span>@NN</span>
        </div>

      </header>

      <aside>
        <button className='tw-followCard-button'>
          Seguir
        </button>
      </aside>

    </article>
  )
}