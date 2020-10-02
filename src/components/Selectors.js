import React from 'react';


import Lists from './Lists/Lists';

class Selectors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            month: '',
            hemisphere: 'north',
        };
        this.monthOptions = {
            'January': 'jan',
            'February': 'feb',
            'March': 'mar',
            'April': 'apr',
            'May': 'may',
            'June': 'jun',
            'July': 'jul',
            'August': 'aug',
            'September': 'sept',
            'October': 'oct',
            'November': 'nov',
            'December': 'dec'
        };
        this.hemisphereOptions = {
            'Nothern': 'north',
            'Southern': 'south'
        }
        this.handleMonthChange = this.handleMonthChange.bind(this);
        this.handleHemisphereChange = this.handleHemisphereChange.bind(this);

    }

    handleMonthChange(event) {
        this.setState({ month: event.target.value });
    }

    handleHemisphereChange(event) {
        this.setState({ hemisphere: event.target.value });
    }

    renderMonthOptions() {
        return Object.keys(this.monthOptions).map(monthOption => {
            let monthOptionValue = this.monthOptions[monthOption];
            return (
                <option value={monthOptionValue}>
                    {monthOption}
                </option>
            )
        })
    }

    renderHemisphereOptions() {
        return Object.keys(this.hemisphereOptions).map(hemisphereOption => {
            let hemisphereOptionValue = this.hemisphereOptions[hemisphereOption];
            return (
                <option value={hemisphereOptionValue}>
                    {hemisphereOption} Hemisphere
                </option>
            )
        })
    }

    render() {
        return (
            <main>
                <section className="row" id="selectors">
                    <div className="col-12 col-md-6">
                        <select name="month" id="month" onChange={this.handleMonthChange}>
                            <option value="" disabled selected hidden>Select Month...</option>
                            {this.renderMonthOptions()}
                        </select>
                    </div>

                    <div className="col-12 col-md-6">
                        <select name="hemisphere" id="hemisphere" onChange={this.handleHemisphereChange}>
                            {this.renderHemisphereOptions()}
                        </select>
                    </div>
                </section>
                
                <Lists  bugs={this.props.bugs} 
                        fish={this.props.fish} 
                        sea={this.props.sea} 
                        month={this.state.month}
                        hemisphere={this.state.hemisphere} />
            </main>
        )
    }
}

export default Selectors;