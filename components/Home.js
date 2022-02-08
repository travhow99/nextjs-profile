import { Card, Grid } from '@mui/material'
import Item from './Item'
import TechnologyList from './Technologies'

export default function Home() {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <TechnologyList start={0} />
        </Grid>
        <Grid item xs={4}>
          <TechnologyList start={1} />
        </Grid>
        <Grid item xs={4}>
          <TechnologyList start={2} />
        </Grid>
      </Grid>
      {/* <Grid container spacing={4}>
        <Grid item xs={4}>
          <Item />
        </Grid>
        <Grid item xs={4}>
          <Item />
        </Grid>
        <Grid item xs={4}>
          <Item />
        </Grid>
      </Grid> */}
    </>
  )
}
