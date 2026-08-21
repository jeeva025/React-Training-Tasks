import React from 'react'
import ChildComponent from './ChildComponent'
function ParentComponent() {
    const name1 = "Jeeva"
    const age1 = 22
    const city1 = "chennai"
    const mobile1 = "1234567890"
    const email1 = "jeeva@gamil.com"
    const occupation1 = "Java Full Stack Developer"
    const address1 = "No.01, Vadapalani"

    const name2 = "Aadhi"
    const age2= 23
    const city2 = "Salem"
    const mobile2 = "9233922190"
    const email2 = "aadhi@gamil.com"
    const occupation2 = "Frontend Developer"
    const address2 = "Salem"

    const name3 = "Kishore"
    const age3 = 21
    const city3 = "Coimbatore"
    const mobile3 = "828374913"
    const email3 = "kishore@gamil.com"
    const occupation3 = "Professional Trader"
    const address3 = "No.01, Coimbatore"

    const name4 = "Joshua"
    const age4 = 24
    const city4 = "Kanchipuram"
    const mobile4 = "28383741"
    const email4 = "josh@gamil.com"
    const occupation4 = "Research & Development"
    const address4 = "No.01, Kahcipuram"

    const name5 = "Wahith Anwar"
    const age5 = 22
    const city5 = "Trichy"
    const mobile5 = "473138432"
    const email5 = "wahith@gamil.com"
    const occupation5 = "Software Tester"
    const address5 = "No.01, Trichy"

  return (
    <>
        <h1>Parent Component</h1>
        <ChildComponent name ={name1} age = {age1} city={city1} mobile = {mobile1} email={email1} occupation= {occupation1} address={address1} />
        <ChildComponent name ={name2} age = {age2} city={city2} mobile = {mobile2} email={email2} occupation= {occupation2} address={address2} />
        <ChildComponent name ={name3} age = {age3} city={city3} mobile = {mobile3} email={email3} occupation= {occupation3} address={address3} />
        <ChildComponent name ={name4} age = {age4} city={city4} mobile = {mobile4} email={email4} occupation= {occupation4} address={address4} />
        <ChildComponent name ={name5} age = {age5} city={city5} mobile = {mobile5} email={email5} occupation= {occupation5} address={address5} />
    </>
    
  )
}

export default ParentComponent