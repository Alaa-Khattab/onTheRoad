import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
          <div id="content">
            <div className="filter-wrp">
              <div className="row">
                <div className="left">
                  <h2>Scheduled Trips</h2>
                </div>
                <div className="right">
                  <form className="filter">
                    <input type="date" name="date" />
                    <select name="from">
                    <option disabled="disabled" selected="selected">From</option>
                    <option value="1">Jerusalem</option>
                  </select>
                    <select name="to">
                      <option disabled="disabled" selected="selected">To</option>
                      <option value="2">Erez</option>
                    </select>
                    <button type="button" name="button">search</button>
                  </form>
                </div>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Trip date</th>
                  <th>Time</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Pick up point</th>
                  <th>Pick up time</th>
                  <th>Seats avialable</th>
                  <th>Organization</th>
                  <th>Join trip</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span>16/06/2015</span></td>
                  <td><span>8:00</span></td>
                  <td><span>Jerusalem</span></td>
                  <td><span>Erez</span></td>
                  <td><span>Remal</span></td>
                  <td><span>14:30</span></td>
                  <td><span>3</span></td>
                  <td><span>Mercy Corps</span></td>
                  <td><span><button type="button">Join trip</button></span></td>
                </tr>
                <tr>
                  <td><span>16/06/2015</span></td>
                  <td><span>8:00</span></td>
                  <td><span>Jerusalem</span></td>
                  <td><span>Erez</span></td>
                  <td><span>Remal</span></td>
                  <td><span>14:30</span></td>
                  <td><span>3</span></td>
                  <td><span>Mercy Corps</span></td>
                  <td><span><button type="button">Join trip</button></span></td>
                </tr>
                <tr>
                  <td><span>16/06/2015</span></td>
                  <td><span>8:00</span></td>
                  <td><span>Jerusalem</span></td>
                  <td><span>Erez</span></td>
                  <td><span>Remal</span></td>
                  <td><span>14:30</span></td>
                  <td><span>3</span></td>
                  <td><span>Mercy Corps</span></td>
                  <td><span><button type="button">Join trip</button></span></td>
                </tr>
                <tr>
                  <td><span>16/06/2015</span></td>
                  <td><span>8:00</span></td>
                  <td><span>Jerusalem</span></td>
                  <td><span>Erez</span></td>
                  <td><span>Remal</span></td>
                  <td><span>14:30</span></td>
                  <td><span>3</span></td>
                  <td><span>Mercy Corps</span></td>
                  <td><span><button type="button">Join trip</button></span></td>
                </tr>
                <tr>
                  <td><span>16/06/2015</span></td>
                  <td><span>8:00</span></td>
                  <td><span>Jerusalem</span></td>
                  <td><span>Erez</span></td>
                  <td><span>Remal</span></td>
                  <td><span>14:30</span></td>
                  <td><span>3</span></td>
                  <td><span>Mercy Corps</span></td>
                  <td><span><button type="button">Join trip</button></span></td>
                </tr>
                <tr>
                  <td><span>16/06/2015</span></td>
                  <td><span>8:00</span></td>
                  <td><span>Jerusalem</span></td>
                  <td><span>Erez</span></td>
                  <td><span>Remal</span></td>
                  <td><span>14:30</span></td>
                  <td><span>3</span></td>
                  <td><span>Mercy Corps</span></td>
                  <td><span><button type="button">Join trip</button></span></td>
                </tr>
                <tr>
                  <td><span>16/06/2015</span></td>
                  <td><span>8:00</span></td>
                  <td><span>Jerusalem</span></td>
                  <td><span>Erez</span></td>
                  <td><span>Remal</span></td>
                  <td><span>14:30</span></td>
                  <td><span>3</span></td>
                  <td><span>Mercy Corps</span></td>
                  <td><span><button type="button">Join trip</button></span></td>
                </tr>
                <tr>
                  <td><span>16/06/2015</span></td>
                  <td><span>8:00</span></td>
                  <td><span>Jerusalem</span></td>
                  <td><span>Erez</span></td>
                  <td><span>Remal</span></td>
                  <td><span>14:30</span></td>
                  <td><span>3</span></td>
                  <td><span>Mercy Corps</span></td>
                  <td><span><button type="button">Join trip</button></span></td>
                </tr>
                <tr>
                  <td><span>16/06/2015</span></td>
                  <td><span>8:00</span></td>
                  <td><span>Jerusalem</span></td>
                  <td><span>Erez</span></td>
                  <td><span>Remal</span></td>
                  <td><span>14:30</span></td>
                  <td><span>3</span></td>
                  <td><span>Mercy Corps</span></td>
                  <td><span><button type="button">Join trip</button></span></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
    }
}

export default HomePage;
