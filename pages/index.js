import Layout from '../components/Layout/Layout';
import PageHeader from '../components/PageHeader';

export default function Home() {
  return (
    <Layout>
      <PageHeader
        title='Tłumaczymy.'
        subtitle='Profesjonalnie, specjalistycznie i w trymiga!'
        img={{
          src: '/images/earth-header.svg',
          alt: 'Kontynenty',
        }}
        annotation='I to w wielu językach!'
      />
    </Layout>
  );
}
