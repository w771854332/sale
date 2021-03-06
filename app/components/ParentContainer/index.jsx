import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less';

export default class ParentContainer extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return(
            <div className='parent-container' style={{paddingTop: this.props.top || 0}}>{this.props.children}</div>
        );
    }
}