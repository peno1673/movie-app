import { Component } from './core/heropy'
import TheHeader from './compoents/TheHeader'
import TheFooter from './compoents/TheFooter'

export default class App extends Component {
  render() {
    const theHEader = new TheHeader().el
    const theFooter = new TheFooter().el
    const routerView = document.createElement('router-view')

    this.el.append(
      theHEader,
      routerView,
      theFooter
    )
  }
}