import { Breadcrumbs, Typography } from '@mui/material';
import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from '../components/';

const Home: NextPage = () => {
  return (
    <Layout>
      <nav>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
      {sdad}
    </Breadcrumbs>
    <Breadcrumbs separator="-" aria-label="breadcrumb">
      breadcrumbs
    </Breadcrumbs>
    <Breadcrumbs
      // separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      breadcrumbs
    </Breadcrumbs>

      </nav>
    </Layout>
  )
}

export default Home
