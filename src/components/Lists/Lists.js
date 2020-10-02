import React from 'react';
import Info from '../Info/Info';
import CritterList from './CritterList';

class Lists extends React.Component {
    constructor(props) {
        super(props);
        this.monthList = [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ];
        this.timeList = [
            '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12xm'
        ]
    }

    render() {
        return (
            <div>
                <Info bugs={this.props.bugs} 
                      fish={this.props.fish} 
                      sea={this.props.sea}
                      month={this.props.month}
                      hemisphere={this.props.hemisphere} />

                <section className="row align-items-start" id="lists">
                    <div className="col-6">
                        <img className="new" src='/img/blank.png' alt="" />
                        <h4 className="inline"> - New</h4>
                    </div>
                    <div className="col-6">
                        <img className="leaving" src='/img/blank.png' alt="" />
                        <h4 className="inline"> - Leaving</h4>
                    </div>

                    <CritterList critters={this.props.bugs}
                                 month={this.props.month}
                                 hemisphere={this.props.hemisphere}
                                 monthList={this.monthList}
                                 timeList={this.timeList} />
                    <CritterList critters={this.props.fish}
                                 month={this.props.month}
                                 hemisphere={this.props.hemisphere}
                                 monthList={this.monthList}
                                 timeList={this.timeList} />
                    <CritterList critters={this.props.sea}
                                 month={this.props.month}
                                 hemisphere={this.props.hemisphere}
                                 monthList={this.monthList}
                                 timeList={this.timeList} />
                </section>
            </div>
        )
    }
}

export default Lists;