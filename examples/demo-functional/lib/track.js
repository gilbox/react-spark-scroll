import React, {Component} from 'react';

export const defaultRect = { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
const identity = x => x;

export class Track extends Component {
  static propTypes = { ref: React.PropTypes.func,
                       children: React.PropTypes.func.isRequired, 
                       formulas: React.PropTypes.array }
                       
  static defaultProps = { formulas: [identity], component: 'div' }
  
  constructor(props) {
    super(props);
    
    const self = this;
    
    this.DecoratedComponent = class extends Component {
      static propTypes = { ref: React.PropTypes.func }
      
      render() {
        const {ref = props.ref || identity} = this.props;
        
        return <props.component 
                  {...props} 
                  {...this.props} 
                  ref={r => ref(self.nodeRef = r)} />
      }
    }
    this.state = {};
  }
  
  componentWillReceiveProps() {
    const node = React.findDOMNode(this.nodeRef);
    const rect = node.getBoundingClientRect();
    this.setState({rect});
  }

  render() {
    const {rect=defaultRect} = this.state;
    return this.props.children(this.DecoratedComponent, 
      ...this.props.formulas.map(formula => formula(rect)));
  }
}

export class TrackDocument extends Component {
  static propTypes = { children: React.PropTypes.func.isRequired, 
                       formulas: React.PropTypes.array }
                       
  static defaultProps = { formulas: [identity] }

  constructor(props) {
    super(props);
    this.state = { rect: null };
  }
  
  componentDidMount() {
    window.addEventListener('scroll', event => {
      this.setState({ rect: document.documentElement.getBoundingClientRect() });
    });
  }

  render() {
    let {rect} = this.state;
    let element = typeof document !== 'undefined' && document.documentElement;
    if (!rect) {
      if (element) {
        rect = document.documentElement.getBoundingClientRect();
      } else {
        rect = defaultRect;
        element = {}; // bah
      }
    }
    return this.props.children(...this.props.formulas.map(formula => formula(rect, element)))
  }
}

export class TrackedDiv extends Component {
  static propTypes = { children: React.PropTypes.func.isRequired,
                       formulas: React.PropTypes.array,
                       component: React.PropTypes.oneOfType([React.PropTypes.element, 
                                                             React.PropTypes.string]) }
                       
  static defaultProps = { formulas: [identity], component: 'div' }
  
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentWillReceiveProps() {
    const node = React.findDOMNode(this.div);
    const rect = node.getBoundingClientRect();
    this.setState({rect});
  }

  render() {
    const {rect=defaultRect} = this.state;
    const {component:Comp} = this.props;
    return <Comp ref={r => this.div = r} {...this.props}>
      {this.props.children(...this.props.formulas.map(formula => formula(rect)))}
    </Comp>;
  }
}