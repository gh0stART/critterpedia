import React from 'react';


class CritterList extends React.Component {
    constructor(props) {
        super(props);
        this.setInfo = this.setInfo.bind(this);
        this.setMonthClass = this.setMonthClass.bind(this);
        this.setTimeClass = this.setTimeClass.bind(this);
        this.getHeading = this.getHeading.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    isNew(critter) {
            const month = this.props.month;
            const hemisphere =  this.props.hemisphere;
            let prev;
            let next;

            switch (month) {
                case 'jan': 
                    prev = 'dec';
                    next = 'feb';
                    break;
                case 'feb': 
                    prev = 'jan';
                    next = 'mar';
                    break;
                case 'mar': 
                    prev = 'feb';
                    next = 'apr';
                    break;
                case 'apr': 
                    prev = 'mar';
                    next = 'may';
                    break;
                case 'may': 
                    prev = 'apr';
                    next = 'jun';
                    break;
                case 'jun': 
                    prev = 'may';
                    next = 'jul';
                    break;
                case 'jul': 
                    prev = 'jun';
                    next = 'aug';
                    break;
                case 'aug': 
                    prev = 'jul';
                    next = 'sept';
                    break;
                case 'sept': 
                    prev = 'aug';
                    next = 'oct';
                    break;
                case 'oct': 
                    prev = 'sept';
                    next = 'nov';
                    break;
                case 'nov': 
                    prev = 'oct';
                    next = 'dec';
                    break;
                case 'dec': 
                    prev = 'nov';
                    next = 'jan';
                    break;
            }

            if (critter[hemisphere].includes(month) && !critter[hemisphere].includes(prev)) {
                return 'new';
            } else if (critter[hemisphere].includes(month) && !critter[hemisphere].includes(next)) {
                return 'leaving'
            } else {
                return '';
            }
    }

    setInfo(target) {
        const targetName = target.getAttribute('alt');
        const critter = this.props.critters.find(critter => critter.name === targetName)

        const img = document.getElementById('critterImg');
        const name = document.getElementById('critterName');

        img.setAttribute('src', critter.imgLarge);
        name.innerHTML = critter.name;
    }

    setMonthClass(target) {
        const targetName = target.getAttribute('alt');
        const critter = this.props.critters.find(critter => critter.name === targetName)

        this.props.monthList.map(month => {
            if (critter[this.props.hemisphere].includes(month)) {
                document.getElementById(month).setAttribute('class', 'found');
            } else {
                document.getElementById(month).removeAttribute('class');
            } 
        })
    }

    setTimeClass(target) {
        const targetName = target.getAttribute('alt');
        const critter = this.props.critters.find(critter => critter.name === targetName)

        this.props.timeList.map(time => {
            if (critter.times.includes(time)) {
                document.getElementById(time).setAttribute('class', 'found');
            } else {
                document.getElementById(time).removeAttribute('class');
            } 
        })
    }
    
    getHeading() {
        const firstCritter = this.props.critters[0].name;
        let heading;

        if (firstCritter === 'Bitterling') {
            heading = 'Fish'
        } else if (firstCritter === 'Common Butterfly') {
            heading = 'Insects'
        } else {
            heading = 'Sea Creatures'
        }

        return heading;
    }

    handleClick(event) {
        this.setInfo(event.target);
        this.setMonthClass(event.target);
        this.setTimeClass(event.target);
    }

    

    renderList() {
        if (this.props.month === '') {
            return this.props.critters.map(critter => {
                return <img className='critter' src={critter.imgSmall} onClick={this.handleClick} alt={critter.name} />
            });
        } else {         
            const hemisphere = this.props.hemisphere;
            const month = this.props.month;
            const list = this.props.critters.filter(critter => critter[hemisphere].includes(month))

            return list.map(critter => {
                return <img className={`${this.isNew(critter)} critter`} src={critter.imgSmall} onClick={this.handleClick} alt={critter.name} />
            });
        }
    }

    render() {
        return (
            <div className="col-12 col-lg-4 col-xl-3 list">
                <h3>{this.getHeading()}</h3>
                <div className="list-box">
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

export default CritterList;