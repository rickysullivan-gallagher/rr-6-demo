import { Link, Outlet, useLoaderData } from 'react-router-dom';

export async function loader() {
  const countries = [
    { id: 'nz', name: 'New Zealand' },
    { id: 'au', name: 'Australia' },
  ];
  return { countries };
}

function Root() {
  const { countries } = useLoaderData();

  const Links = () => {
    const links = [];
    for (const { id, name } of countries) {
      links.push(
        <li key={id}>
          <Link to={`/countries/${id}`}>{name}</Link>
        </li>
      );
    }
    return links;
  };

  return (
    <>
      <div id="sidebar">
        <h1>Admin Portal</h1>
        <nav>
          <ul>
            <Links />
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
