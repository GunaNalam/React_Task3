import React, { Component } from 'react'
import "./bootstrap.css"
import "./task3.css"
class Task3 extends Component {
    constructor(props) {
      super(props)
      this.state = {
         color: 'white'
      }
    }
    ChangeColor = (e) => {
        document.getElementById('Colors-Bar').hidden=true
        this.setState({color: e.target.style.backgroundColor})
    }
    BackgroundChange = (e) => {
        document.getElementById('Colors-Bar').hidden=false
    }
    render() {
        return (
            <div>
            <h1 className='text-center mt-3'>Color Picker</h1>
            <div style={{backgroundColor: this.state.color}} className='Inner-Body'>
                <div className="row" id='Colors-Bar' hidden>
                <div className="col-1" style={{backgroundColor: '#fe0000'}} onClick={this.ChangeColor}></div>
                    <div className="col-1" style={{backgroundColor: '#00ff00'}} onClick={this.ChangeColor}></div>
                    <div className="col-1" style={{backgroundColor: '#0600fd'}} onClick={this.ChangeColor}></div>
                    <div className="col-1" style={{backgroundColor: '#ffff00'}} onClick={this.ChangeColor}></div>
                    <div className="col-1" style={{backgroundColor: '#ff00fe'}} onClick={this.ChangeColor}></div>
                    <div className="col-1" style={{backgroundColor: '#00ffff'}} onClick={this.ChangeColor}></div>
                    <div className="col-1" style={{backgroundColor: '#fea500'}} onClick={this.ChangeColor}></div>
                    <div className="col-1" style={{backgroundColor: '#81007f'}} onClick={this.ChangeColor}></div>
                    <div className="col-1" style={{backgroundColor: '#ffc0cb'}} onClick={this.ChangeColor}></div>
                    <div className="col-1" style={{backgroundColor: '#008001'}} onClick={this.ChangeColor}></div>
                    <div className="col-1" style={{backgroundColor: '#fc6349'}} onClick={this.ChangeColor}></div>
                    <div className="col-1" style={{backgroundColor: '#01ced1'}} onClick={this.ChangeColor}></div>
                    <div className="col-1" style={{backgroundColor: '#8b4512'}} onClick={this.ChangeColor}></div>
                    <div className="col-1" style={{backgroundColor: '#ff8b00'}} onClick={this.ChangeColor}></div>
                    <div className="col-1" style={{backgroundColor: '#4682b4'}} onClick={this.ChangeColor}></div>
                    <div className="col-1" style={{backgroundColor: '#fed700'}} onClick={this.ChangeColor}></div>
                </div>
                <div className="col-12 text-center mt-2">
                    <button className='btn btn-success' onClick={this.BackgroundChange}>Pick a Color</button>
                </div>
            </div>
        </div>
        )
    }
}

export default Task3