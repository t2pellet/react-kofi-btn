import React from 'react'
import KofiButton from './lib/KofiButton'

function App() {
    return (
        <div
            className='App'
            style={{
                backgroundColor: 'black',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <KofiButton label='Support me' user='t2pellet' />
        </div>
    )
}

export default App
