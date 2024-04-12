import React, {useState, useEffect} from 'react'

function Clock() {
    const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const getRotationDegrees = (hand, total) => {
    const current = hand === 'hour' ? time.getHours() : hand === 'minute' ? time.getMinutes() : time.getSeconds();
    return (current / total) * 360;
  };
  return (
    <div className="clock">
        <div className="circle1"></div>
        <div className="circle">
            <div className="dull"></div>
            <div className="sides">
                <div className="patern">
                    <div className="twel">12</div>
                    <div className="six">6</div>
                </div>
            </div>
            <div className="sides1">
                <div className="patern1">
                    <div className="ele">11</div>
                    <div className="one">1</div>
                </div>
                <div className="patern1">
                    <div className="seven">7</div>
                    <div className="five">5</div>
                </div>
            </div>
            <div className="sides3">
                <div className="patern2">
                    <div className="ten">10</div>
                    <div className="two">2</div>
                </div>
                <div className="patern2">
                    <div className="seven">8</div>
                    <div className="five">4</div>
                </div>
            </div>
            <div className="sides2">
                    <div className="nine">9</div>
                    <div className="three">3</div>
            </div>
            <div className="center">
                <div className="dot"></div>
            </div>
            <div className="hr_hand" style={{ transform: `rotate(${getRotationDegrees('hour', 12)}deg)` }}>
                <div className="marker">
                    <div className="triangel"></div>
                    <div className="triangel2"></div>
                </div>
            </div>
            <div className="min_hand" style={{ transform: `rotate(${getRotationDegrees('minute', 60)}deg)` }}>
                <div className='marker1'></div>
            </div>
            <div className="sec_hand" style={{ transform: `rotate(${getRotationDegrees('second', 60)}deg)` }}>
                <div className="marker2"></div>
            </div>
        </div>
        <div className="circle2">
            <div className="dull"></div>
            <div className="sides">
                <div className="patern">
                    <div className="twel">12</div>
                    <div className="six">6</div>
                </div>
            </div>
            <div className="sides1">
                <div className="patern1">
                    <div className="ele">11</div>
                    <div className="one">1</div>
                </div>
                <div className="patern1">
                    <div className="seven">7</div>
                    <div className="five">5</div>
                </div>
            </div>
            <div className="sides3">
                <div className="patern2">
                    <div className="ten">10</div>
                    <div className="two">2</div>
                </div>
                <div className="patern2">
                    <div className="seven">8</div>
                    <div className="five">4</div>
                </div>
            </div>
            <div className="sides2">
                    <div className="nine">9</div>
                    <div className="three">3</div>
            </div>
            <div className="center">
                <div className="dot"></div>
            </div>
            <div className="hr_hand" style={{ transform: `rotate(${getRotationDegrees('hour', 12)}deg)` }}>
                <div className="marker">
                    <div className="triangel"></div>
                    <div className="triangel2"></div>
                </div>
            </div>
            <div className="min_hand" style={{ transform: `rotate(${getRotationDegrees('minute', 60)}deg)` }}>
                <div className='marker1'></div>
            </div>
            <div className="sec_hand" style={{ transform: `rotate(${getRotationDegrees('second', 60)}deg)` }}>
                <div className="marker2"></div>
            </div>
        </div>
        <div className="circle3">
            <div className="dull"></div>
            <div className="sides">
                <div className="patern">
                    <div className="twel">12</div>
                    <div className="six">6</div>
                </div>
            </div>
            <div className="sides1">
                <div className="patern1">
                    <div className="ele">11</div>
                    <div className="one">1</div>
                </div>
                <div className="patern1">
                    <div className="seven">7</div>
                    <div className="five">5</div>
                </div>
            </div>
            <div className="sides3">
                <div className="patern2">
                    <div className="ten">10</div>
                    <div className="two">2</div>
                </div>
                <div className="patern2">
                    <div className="seven">8</div>
                    <div className="five">4</div>
                </div>
            </div>
            <div className="sides2">
                    <div className="nine">9</div>
                    <div className="three">3</div>
            </div>
            <div className="center">
                <div className="dot"></div>
            </div>
            <div className="hr_hand" style={{ transform: `rotate(${getRotationDegrees('hour', 12)}deg)` }}>
                <div className="marker">
                    <div className="triangel"></div>
                    <div className="triangel2"></div>
                </div>
            </div>
            <div className="min_hand" style={{ transform: `rotate(${getRotationDegrees('minute', 60)}deg)` }}>
                <div className='marker1'></div>
            </div>
            <div className="sec_hand" style={{ transform: `rotate(${getRotationDegrees('second', 60)}deg)` }}>
                <div className="marker2"></div>
            </div>
        </div>
        <div className="circle4">
            <div className="dull"></div>
            <div className="sides">
                <div className="patern">
                    <div className="twel">12</div>
                    <div className="six">6</div>
                </div>
            </div>
            <div className="sides1">
                <div className="patern1">
                    <div className="ele">11</div>
                    <div className="one">1</div>
                </div>
                <div className="patern1">
                    <div className="seven">7</div>
                    <div className="five">5</div>
                </div>
            </div>
            <div className="sides3">
                <div className="patern2">
                    <div className="ten">10</div>
                    <div className="two">2</div>
                </div>
                <div className="patern2">
                    <div className="seven">8</div>
                    <div className="five">4</div>
                </div>
            </div>
            <div className="sides2">
                    <div className="nine">9</div>
                    <div className="three">3</div>
            </div>
            <div className="center">
                <div className="dot"></div>
            </div>
            <div className="hr_hand" style={{ transform: `rotate(${getRotationDegrees('hour', 12)}deg)` }}>
                <div className="marker">
                    <div className="triangel"></div>
                    <div className="triangel2"></div>
                </div>
            </div>
            <div className="min_hand" style={{ transform: `rotate(${getRotationDegrees('minute', 60)}deg)` }}>
                <div className='marker1'></div>
            </div>
            <div className="sec_hand" style={{ transform: `rotate(${getRotationDegrees('second', 60)}deg)` }}>
                <div className="marker2"></div>
            </div>
        </div>
        <div className="circle5">
            <div className="dull"></div>
            <div className="sides">
                <div className="patern">
                    <div className="twel">12</div>
                    <div className="six">6</div>
                </div>
            </div>
            <div className="sides1">
                <div className="patern1">
                    <div className="ele">11</div>
                    <div className="one">1</div>
                </div>
                <div className="patern1">
                    <div className="seven">7</div>
                    <div className="five">5</div>
                </div>
            </div>
            <div className="sides3">
                <div className="patern2">
                    <div className="ten">10</div>
                    <div className="two">2</div>
                </div>
                <div className="patern2">
                    <div className="seven">8</div>
                    <div className="five">4</div>
                </div>
            </div>
            <div className="sides2">
                    <div className="nine">9</div>
                    <div className="three">3</div>
            </div>
            <div className="center">
                <div className="dot"></div>
            </div>
            <div className="hr_hand" style={{ transform: `rotate(${getRotationDegrees('hour', 12)}deg)` }}>
                <div className="marker">
                    <div className="triangel"></div>
                    <div className="triangel2"></div>
                </div>
            </div>
            <div className="min_hand" style={{ transform: `rotate(${getRotationDegrees('minute', 60)}deg)` }}>
                <div className='marker1'></div>
            </div>
            <div className="sec_hand" style={{ transform: `rotate(${getRotationDegrees('second', 60)}deg)` }}>
                <div className="marker2"></div>
            </div>
        </div>
    </div>
  )
}

export default Clock