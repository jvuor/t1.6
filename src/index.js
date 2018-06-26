import React from 'react';
import ReactDOM from 'react-dom';

const DisplayHeader = ({text}) => 
  <h1>
    {text}
  </h1>

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const DisplayTRow = ({cell1, cell2}) =>
  <tr>
    <td> {cell1} </td>
    <td> {cell2} </td>
  </tr>

const DisplayStatistics = ({palaute1, palaute2, palaute3}) => {
  if (palaute1 + palaute2 + palaute3 === 0) {
    return(<div>Ei yhtään palautetta annettu</div>)
  }
  else{
    return(
      <table>
        <DisplayTRow cell1={'Hyvä'} cell2={palaute1} />
        <DisplayTRow cell1={'Ok'} cell2={palaute2} />
        <DisplayTRow cell1={'Huono'} cell2={palaute3} />
        <DisplayTRow cell1={'Keskiarvo'} cell2={((palaute1 - palaute3) / (palaute1 + palaute2 + palaute3)).toFixed(2)} />
        <DisplayTRow cell1={'Positiivisia'} cell2={((palaute1 / (palaute1 + palaute2 + palaute3)) * 100).toFixed(0) + '%'} />
      </table>
    )
  }
}

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        palaute1: 0,
        palaute2: 0,
        palaute3: 0,
      }
    }

     
    klikPalaute = (palaute) => {
      switch (palaute) {
        case 1:
          return() => this.setState({palaute1: this.state.palaute1 + 1})
        case 2:
          return() => this.setState({palaute2: this.state.palaute2 + 1})
        case 3:
          return() => this.setState({palaute3: this.state.palaute3 + 1})
        default:
          break;
      }
    }

    render() {
        return (
          <div>
            <DisplayHeader text={'Anna palautetta'} />
            <Button text={'Hyvä'} handleClick={this.klikPalaute(1)} />
            <Button text={'Ok'} handleClick={this.klikPalaute(2)} />
            <Button text={'Huono'} handleClick={this.klikPalaute(3)} />
            <DisplayHeader text={'Statistiikka'} />            
            <DisplayStatistics palaute1={this.state.palaute1} palaute2={this.state.palaute2} palaute3={this.state.palaute3} />
          </div>)
      }
}


ReactDOM.render(<App />, document.getElementById('root'));
