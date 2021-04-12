import React from 'react'
class PureComponent extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        name: 'alien',
        age: 28
      }
    }
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('nextProps', nextProps)
  //   console.log('nextState', nextState)
  // }
  handerClick = () => {
    const { data } = this.state
    data.age++
    this.setState({ data })// 不会重新渲染，PureComponent浅比较，复杂的对象可能监听不到变化
    this.setState({ data: { ...data } })// 浅拷贝 data已改变
  }
  render() {
    const { data } = this.state
    return <div className="box" >
      <div className="show" >
        <div> 你的姓名是: {data.name} </div>
        <div> 年龄： {data.age}</div>
        <button onClick={this.handerClick} >age++</button>
      </div>
    </div>
  }
}

export default PureComponent
