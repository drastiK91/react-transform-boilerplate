/**
 * Created by Stefano on 20/05/2016.
 */
import  React  from 'react';
export class Light extends React.Component {
    render() {
        const styles = {
            color:  (this.props.enabled) ? 'green' : 'red',
        };
        return (<div>
            <i className="fa fa-lightbulb-o fa-2x" style={styles}> {this.props.label}</i>
        </div>);
    }
}