import React, {Component} from 'react';
import cx from 'classnames';

const isNumber = x => typeof x === 'number';
const isWrapped = x => !!x.formatter;

const defaultRect = { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
const identity = x => x;

const topTop = containerRect => rect => 
  ~~(rect.top - containerRect.top);
  
const topBottom = (containerRect, container) => rect => 
  ~~(rect.top - containerRect.top - container.clientHeight);
  
const centerCenter = (containerRect, container) => rect => 
  ~~(rect.top + rect.height / 2 - containerRect.top - container.clientHeight / 2);
 
const translate3dFormatter = value => `translate3d(${value.join('px,')}px)`;
const translate3d = (...args) => ({
    value: args,
    formatter: translate3dFormatter,
    factory: translate3d
  });
 
const pxFormatter = value => `${value}px`;
const px = (...args) => ({
    value: args,
    formatter: pxFormatter,
    factory: px
  });
 
const rotateFormatter = value => `rotate(${value}deg)`;
const rotate = (...args) => ({
    value: args,
    formatter: rotateFormatter,
    factory: rotate
  });
 
const rgbaFormatter = value => `rgba(${value.map(Math.round).join(',')})`;
const rgba = (...args) => ({
    value: args,
    formatter: rgbaFormatter,
    factory: rgba
  });
  
function mapObject(fn) {
  const result = {};
  Object.keys(this).forEach(key => result[key] = fn(this[key], key));
  return result;
}

function tweenValues(progress, a, b) {
  // todo : more error handlers?
  if (isWrapped(a)) {
    if (!isWrapped(b)) throw(Error('tweenValues mismatch: tried to tween wrapped and unwrapped values'));
    return a.factory(...tweenValues(progress, a.value, b.value));
  } else if (a instanceof Array) {
    if (!b instanceof Array) throw(Error('tweenValues expected two arrays but only found one'));
    return a.map((value,index) => value + progress*(b[index] - value));
  } else if (isNumber(a)) {
    return a + progress * (b-a);  
  } else { // object
    return a::mapObject((v,k) => tweenValues(progress, v, b[k]))
  }
}

const resolveValue = x => 
  isWrapped(x) ? x.formatter(x.value) : 
  isNumber(x) ? x :
    x::mapObject(resolveValue); // is object

// todo: currently only supports 2 keyframes
const tween = (position, keyframes) => {
  const positions = Object.keys(keyframes);
  const position0 = positions[0];
  const position1 = positions[1];
  
  if (position <= position0) return resolveValue(keyframes[position0]);
  if (position >= position1) return resolveValue(keyframes[position1]);
  
  const range = position1 - position0;
  const delta = position - position0;
  const progress = delta / range;
  return resolveValue(tweenValues(progress, keyframes[position0], keyframes[position1]))
}

class DocumentRect extends Component {
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

class DivRect extends Component {
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

class Rect extends Component {
  static defaultProps = { formulas: [identity], component: 'div' }
  
  constructor(props) {
    super(props);
    
    const {component:Comp} = props;
    const self = this;
    
    this.DecoratedComponent = class extends Component {
      render() {
        const {ref} = this.props;
        return <Comp {...props} {...this.props} 
                  ref={r => {
                    if (ref) ref(r);
                    self.nodeRef = r}} />
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

const getDocumentRect = documentRect => documentRect;
const getDocumentElement = (_,documentElement) => documentElement;
const calculateScrollY = ({top}) => -top;

class App extends Component {
  componentDidMount() {
    // initialize svg
    var node = React.findDOMNode(this.sparkPath);
    var length = ~~ node.getTotalLength();
    this.offsetTarget = length;
    node.style.strokeDasharray = length + ' ' + length; // i'm cheating
  }
  
  render() {
    return (
      <DocumentRect formulas={[getDocumentElement, getDocumentRect, calculateScrollY, topTop, topBottom, centerCenter]}>
      {(documentElement, documentRect, scrollY, topTop, topBottom, centerCenter) => 
        <div style={{minHeight:'5000px'}}>
        
          <a href="https://github.com/gilbox/spark-scroll">
            <img
              style={{position: 'absolute', top: 0, right: 0, border: 0}}
              src="https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67"
              alt="Fork me on GitHub"
              dataCanonicalSrc="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png" /></a>
              
          <DivRect className="hero" formulas={[topTop]}>
          { (posTopTop) =>
            <div>
              <a href="https://github.com/gilbox/react-spark-scroll">
                <h1
                  style={tween(scrollY, {
                    [posTopTop]: { opacity: 1, transform: translate3d(0,150,0) },
                    [posTopTop+200]: { opacity: 0, transform: translate3d(0,100,0) } })}>

                  <span>

                    <svg width="296px" height="228px" viewBox="0 0 296 228" version="1.1">
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <path
                          ref={r => this.sparkPath = r}
                          style={{strokeDashoffset: tween(scrollY, {
                            [posTopTop]: 0,
                            [posTopTop+150]: this.offsetTarget })}}
                          d="M43.7774442,71.4898495 C68.1223861,13.9815032 2.19454397,48.0407223 21.6782286,62.6489207 C35.6643945,73.1352682 58.9096882,70.7747789 65.8766598,90.2775999 C81.3266094,133.527037 58.7305466,191.386016 8.96667524,191.386016 C-21.7867278,124.419226 58.5165505,95.0604409 105.657733,71.4898495 C111.587019,68.5252065 106.843786,84.8551006 105.657733,91.3772797 C99.6123965,124.620967 91.5214411,157.47733 85.7703029,190.833069 C84.8685764,196.062948 81.6274642,214.829299 80.7937857,222.32616 C80.6715598,223.425278 80.7937857,226.749731 80.7937857,225.643838 C80.7937857,178.19023 80.0535912,132.979764 92.3994463,86.6741293 C93.8113405,81.3785334 108.30594,39.7685738 124.99843,54.0751457 C156.752595,81.2905735 92.5724441,93.4702936 121.127805,96.0680044 C128.282422,96.7188674 135.65546,97.5726529 142.680287,96.0680044 C148.736462,94.7708318 187.108665,71.4402165 175.273058,59.6046093 C159.768414,44.0999652 147.084798,89.2989658 152.06795,90.5447538 C167.304679,94.3539362 163.498851,72.3099498 171.408646,72.3099498 C175.432165,72.3099498 170.909757,82.6418308 174.726325,83.9156104 C188.108938,88.3820577 200.672172,72.3568753 206.772362,66.2337527 C207.900248,65.1016258 206.423589,91.2727357 216.160024,86.1211829 C225.148096,81.3655893 232.107661,66.8252089 236.053667,57.9457702 C238.752882,51.8719041 253.48624,1.58873203 246.553435,1.58873203 C241.137697,1.58873203 228.944808,94.9098646 223.342114,100.491575 C218.092273,105.721754 247.690967,38.5929831 260.364668,41.3698053 C278.111625,45.2581835 231.741761,65.8490563 230.530416,69.4830892 C229.69667,71.984328 235.745427,70.3606023 238.265453,71.1357154 C260.054171,77.8375207 284.345377,96.4449716 294.622491,116.999199" id="Path-13" stroke="#382513" strokeWidth="3"></path>
                      </g>
                    </svg>

                  </span>
                </h1>
              </a>

              <div
                className="down-arrow"
                style={tween(scrollY, {
                  [posTopTop]: {opacity: 1, transform: translate3d(0,0,0)},
                  [posTopTop+200]: {opacity: 0, transform: translate3d(0,-150,0)}
                })}>v</div>
            </div>
          }</DivRect>
          
          {/* fade */}
          <Rect component="h2" formulas={[topBottom, centerCenter]}>
          {(H2,posTopBottom,posCenterCenter) => 
            <H2
              style={tween(scrollY, {
                [posTopBottom]: {opacity: 0},
                [posCenterCenter]: {opacity: 1} })}>fade</H2>
          }</Rect>
          
          {/* move */}
          <Rect component="h2" formulas={[topBottom, centerCenter]}>
          {(H2,posTopBottom,posCenterCenter) => 
            <H2
              style={tween(scrollY, {
                [posTopBottom]: { marginLeft: px(-500), opacity: 0 },
                [posCenterCenter]: { marginLeft: px(0), opacity: 1 } })}>move</H2>
          }</Rect>

          {/* spin */}
          <DivRect formulas={[topBottom, centerCenter]}>
          {(posTopBottom,posCenterCenter) => 
            <h2
              style={tween(scrollY, {
                [posTopBottom]: { transform: rotate(0) },
                [posCenterCenter]: { transform: rotate(360) } })}>spin</h2>
          }</DivRect>
          
        </div>
      }</DocumentRect>
    )
  }
}

React.render(<App/>, document.getElementById('example'));
