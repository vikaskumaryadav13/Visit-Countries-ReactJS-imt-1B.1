import styled from 'styled-components'

export const VisitedCountriesListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style-type: none;
  margin: 5px;
  max-width: 351px;
  max-height: 310px;
`

export const CountriesImage = styled.img`
  height: 71%;
  width: 100%;
`

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 205px;
  height: 21%;
  width: 100%;
`

export const Name = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  margin: 5px;
`

export const RemoveButton = styled.button`
  background-color: transparent;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  height: 34px;
  width: 100px;
  border-radius: 8px;
  border: 1px solid #94a3b8;
  margin: 5px;
  outline: none:
  cursor: pointer;
`
