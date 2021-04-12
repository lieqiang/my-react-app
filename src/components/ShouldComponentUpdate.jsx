import React from 'react'
class ShouldComponentUpdate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      tab: ['tab1', 'tab2', 'tab3']
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextProps', this.props, nextProps)
    console.log('nextState', this.state, nextState)
    if (this.state.activeIndex === nextState.activeIndex) {
      return false
    }
    return true
  }

  componentDidUpdate(prevProps) {
    console.log('componentDidUpdate')
    // 典型用法（不要忘记比较 props）：
    // if (this.props.userID !== prevProps.userID) {
    //   this.fetchData(this.props.userID);
    // }
  }

  handerClick = (idx) => {
    this.setState({ activeIndex: idx })
  }

  render() {
    const { tab } = this.state
    return (
      <div className="tab">
        {
          tab.map((item, idx) => {
            return <div className="item" key={idx} onClick={() => { this.handerClick(idx) }}>{item}</div>
          })
        }
      </div>
    );
  }
}

export default ShouldComponentUpdate