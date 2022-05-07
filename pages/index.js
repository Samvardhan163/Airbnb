import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home({ searchResults }) {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <main className="max-w-7xl mx-auto">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore </h2>
          {/* {exploreData.map((item) => {
            <h1>{item.location}</h1>;
          })} */}

          {searchResults.map((item) => {
            return <h1>{item.location}</h1>;
          })}
          {/* {searchResults.map((item) => (
            <h1>{item.location}</h1>
          ))} */}
        </section>
      </main>
    </div>
  );
}

// export async function getStaticProps() {
//   const exploreData = await fetch("https://jsonkeeper.com/b/4G1G").then((res) =>
//     res.json()
//   );
//   return {
//     props: {
//       exploreData,
//     },
//   };
// }
export const getServerSideProps = async () => {
  const searchResults = await fetch("http://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
};
