import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #161624;
  height: 100vh;
  width: 100vw;
  padding: 18px;
`

export const CountriesHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 550;
  margin: 5px;
`

export const NoCountriesVisitedText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 350;
  text-align: center;
`

export const CountriesListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  width: 91%;
  margin: 8px;
  margin-left: 28px;
  max-height: 39vh;
  overflow-y: scroll;
`

export const VisitedCountriesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  border: none;
  margin-left: 28px;
  padding: 8px;
  width: 91%;
  margin: 5px;
  max-height: 49vh;
  overflow-y: scroll;
`
