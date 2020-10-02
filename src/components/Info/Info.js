import React from 'react';
let isAvailable;

class Info extends React.Component {

    renderImageColumn() {
            return (
                <div className="col-md-12 col-lg-5 col-xl-6" id="critter-container">
                    <div className="row">
                        <div className="col-12 " id="critter-img-container">
                            <img src="/img/blank2.png" alt="" id="critterImg" />
                            <h2 id="critterName"> </h2>
                        </div>
                    </div>
                </div>
            );
    }

    renderMonths() {

        return (
            <table>
                <tbody>
                    <tr>
                        <td id="jan">January</td>
                        <td id="feb">February</td>
                        <td id="mar">March</td>
                        <td id="apr">April</td>
                    </tr>

                    <tr>
                        <td id="may">May</td>
                        <td id="jun">June</td>
                        <td id="jul">July</td>
                        <td id="aug">August</td>
                    </tr>

                    <tr>
                        <td id="sept">September</td>
                        <td id="oct">October</td>
                        <td id="nov">November</td>
                        <td id="dec">December</td>
                    </tr>
                </tbody>
            </table>
        );
    }

    renderTimes() {
        return (
            <div id="time-box">
                <rect title="12am" id="12am">|</rect>
                <rect title="1am" id="1am">|</rect>
                <rect title="2am" id="2am">|</rect>
                <rect title="3am" id="3am">|</rect>
                <rect title="4am" id="4am">|</rect>
                <rect title="5am" id="5am">|</rect>
                <rect title="6am" id="6am">|</rect>
                <rect title="7am" id="7am">|</rect>
                <rect title="8am" id="8am">|</rect>
                <rect title="9am" id="9am">|</rect>
                <rect title="10am" id="10am">|</rect>
                <rect title="11am" id="11am">|</rect>
                <rect title="12pm" id="12pm">|</rect>
                <rect title="1pm" id="1pm">|</rect>
                <rect title="2pm" id="2pm">|</rect>
                <rect title="3pm" id="3pm">|</rect>
                <rect title="4pm" id="4pm">|</rect>
                <rect title="5pm" id="5pm">|</rect>
                <rect title="6pm" id="6pm">|</rect>
                <rect title="7pm" id="7pm">|</rect>
                <rect title="8pm" id="8pm">|</rect>
                <rect title="9pm" id="9pm">|</rect>
                <rect title="10pm" id="10pm">|</rect>
                <rect title="11pm" id="11pm">|</rect>
                <rect title="12am" id="12xm">|</rect>
            </div>
        )
    }

    render() {
        return (
            <section className="row  align-items-center" id="info">
                {this.renderImageColumn()}

                <div className="col-md-12 col-lg-7 col-xl-5" id="available">
                    <div className="row">
                        <div className="col-12" id="months-available">
                            <h3>Months Available:</h3>
                            {this.renderMonths()}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12" id="times-available">
                            <h3>Times Available:</h3>
                            {this.renderTimes()}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Info;