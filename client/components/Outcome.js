import React from 'react'


import io from 'socket.io-client'


class Outcome extends React.Component {

  render = () => {
    return (
      <div>
        <h1>投票结果</h1>
      </div>
    )
  }
}

export default Outcome