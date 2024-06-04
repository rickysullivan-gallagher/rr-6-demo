import { useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
  const country = params.countryId;
  return { country };
}

function Country() {
  const data = useLoaderData();

  console.log(data);

  return <p>COUNTRY</p>;
}

export const getCountry = () => {};

export default Country;
