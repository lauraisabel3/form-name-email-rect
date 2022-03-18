import React from "react"
import HeaderButton from "../src/HeaderButton"
import MainButton from "../src/MainButton"
import MainForm from "../src/MainForm"
import HeaderText from "../src/HeaderText"


export default function Home() {
  return (
    <React.Fragment>
      <HeaderText>
        <HeaderButton />
      </HeaderText>
      <MainForm />
    </React.Fragment>
  )
}
