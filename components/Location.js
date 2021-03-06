import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'
import { compose, withProps } from 'recompose'
import { colors } from './styles'

const API_KEY = 'AIzaSyBWvxIB7Y1deoneeayLEEOpESijWy64ElA'

const Location = ({ location: { lat, lon: lng } }) => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat, lng }}
    defaultOptions={{ styles: { backgroundColor: colors.gray } }}
  >
    <Marker position={{ lat, lng }} />
  </GoogleMap>
)

export default compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: 600 }} />,
    mapElement: <div style={{ height: '100%' }} />
  }),
  withScriptjs,
  withGoogleMap
)(Location)
