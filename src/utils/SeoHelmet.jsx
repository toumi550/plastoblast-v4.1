import { Helmet } from 'react-helmet-async';

const SeoHelmet = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);

export default SeoHelmet;
