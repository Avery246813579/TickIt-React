import React, {Component} from "react"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Test from "./test";

class PagesIndex extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Test/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default PagesIndex;
