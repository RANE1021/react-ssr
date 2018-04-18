import { connect as connectFela } from "react-fela"
import { connect as connectRedux } from "react-redux"

import * as styles from "./styles"
import component from "./component"
import { addYes, addNo, addTotal } from "../../redux/index"

export const mapStateToProps = (state) => {
  return {
    yes: state.yes,
    no: state.no,
    total: state.total
  }
}

export const mapDispatchToProps = (state) => {
  return {
    addYes,
    addNo
  }
}

export default connectRedux(mapStateToProps, mapDispatchToProps)(connectFela(styles)(component))
// export default connectFela(styles)(component)
