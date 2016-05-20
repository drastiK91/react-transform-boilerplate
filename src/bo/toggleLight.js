import  React  from 'react';
/**
 * Created by Stefano on 20/05/2016.
 */
export class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.props.onToggle({
            index: this.props.index,
        });
    }

    render() {
        const { enabled } = this.props;
        const cls = (enabled) ? 'btn btn-success' : 'btn btn-danger';

        return (
            <button className={cls} onClick={this.toggle} >
                {this.props.label}
            </button>
        );
    }
}