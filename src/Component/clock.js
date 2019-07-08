import React, { Component } from 'react';

class Clock extends Component {
    state = {
        countTime: ''
    };

    timer = setInterval(
        () => {
            let now = new Date();
            const ts = new Date('2019-04-10T00:00:00');
            const resultTime = now - ts;
            let count = Math.floor((resultTime / (1000 * 60 * 60 * 24))) + ' day ';
            this.setState({ countTime: count })
        },1000
    )

    componentWillUnmount = ()=>{
        clearInterval(this.timer);
    }

    handleClock = ()=>{
        let now = new Date();
        let seconds = now.getSeconds();
        let minutes = now.getMinutes();
        let hours = now.getHours();
        let hands = [
            {
              hand: 'hours',
              angle: (hours * 30) + (minutes / 2)
            },
            {
              hand: 'minutes',
              angle: (minutes * 6)
            },
            {
              hand: 'seconds',
              angle: (seconds * 6)
            }
        ];
        for (let i = 0; i < hands.length; i++) {
            const elements = document.querySelectorAll('.' + hands[i].hand);
            // console.log(elements)
            for (let j = 0; j < elements.length; j++) {
                elements[j].style.webkitTransform = 'rotateZ('+ hands[i].angle +'deg)';
                elements[j].style.transform = 'rotateZ('+ hands[i].angle +'deg)';
            }
          }
    }

    render(){
        this.handleClock();
        let { countTime } = this.state;
        return (
            <article className='clock'>
                <div className="hours-container">
                    <div className="hours"></div>
                </div>
                <div className="minutes-container">
                    <div className="minutes"></div>
                </div>
                <div className="seconds-container">
                <   div className="seconds"></div>
                </div>
                <div className='day-container'>
                    <div className='day'>{ countTime }</div>
                </div>
                
            </article>
        )
    }
}

export default Clock;