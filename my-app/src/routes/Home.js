import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styled from "styled-components";
import axios from "axios";
import { Layout, Menu } from "antd";
import 'antd/dist/antd.css';

const { Header, Content, Footer, Sider} = Layout;

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [genres, setGenre] = useState('');
    const rateGenr = `&genre=${genres}`
    const rateYear = `&sort_by=year`
    const arrGenre = ["Action", "Comedy", "Sci-Fi", "Adventure", "Animation", "Biography", "Crime", "Drama", "Family", "Music", "Romance"];
    const getMovies = async (genre) => {
        //클릭 시 장르 세팅
        setGenre(genre);
        setLoading(true);
        // 처음
        // const json = await (
        // await fetch(
        //     `https://yts.mx/api/v2/list_movies.json?${rateYear}${genres ? rateGenr : ''}`
        //     // `https://yts.mx/api/v2/list_movies.json?&sort_by=year`
        // )
        // ).json();

        await axios.get(
          `https://yts.mx/api/v2/list_movies.json?${rateYear}${genres ? rateGenr : ''}`
        ).then((Response) => {
          console.log(Response.data.data.movies);
          setMovies(Response.data.data.movies);
        }).catch((Error) => {
          console.log(Error);
        })

        console.log(genre);
        setLoading(false);
        // console.log(json.data.movies);
        // const movie = json.data.movies;
        // console.log(movie.map((item) => (item.genres)));
        // console.log(movie);
        // setGenre(movie.map((item) => (item.genres)));
      };
  //     const HandleGenre = async (e) => {
  //       const json = await (
  //         await fetch(
  //           `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&genre=${e}`
  //           )
  //           ).json();
  //           // console.log(arrGenre);
  //           console.log(e);
  //           console.log(json);
  //           setGenre(e);
  //           setMovies(json.data.movies);
  //           console.log(e);
  //           setLoading(false);
  // }
  useEffect(() => {
    getMovies(genres);
  }, [genres]);
  // console.log(movies);
  // console.log(genres);
  return (
    <Layout>
      <Container>
        <Sider breakpoint="lg" collapsedWidth={0} onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}> 
          <HeadLogo className="site-layout-sub-header-background" style={{ padding: 0 }} onClick={() => setGenre('')}>RANK MOVIE</HeadLogo>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {arrGenre.map((item, index) => (
                <Menu.Item key={index} onClick={() => setGenre(item)}>{item}</Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {loading ? (
                  <Loadings>Loading...</Loadings>
                  ) : (
                      <MovieWrap>
                  {movies.map((movie) => (
                      <Movie
                      key={movie.id}
                      id={movie.id}
                      year={movie.year}
                      coverImg={movie.medium_cover_image}
                      title={movie.title}
                      summary={movie.summary}
                      genres={movie.genres}
                      />
                    ))}
              </MovieWrap>
              )}
            </div>
          </Content>
        </Layout>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const HeadLogo = styled(Header) `
  color: #fff;
  text-align: center;
  cursor: pointer;
`

// const NavWrap = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 
//               0 8px 16px -8px rgba(0, 0, 0, 0.3), 
//               0 -6px 16px -6px rgba(0, 0, 0, 0.025);
//   background-color: #fff;
//   display: flex;
//   flex-flow: row nowrap;
//   justify-content: space-around;
//   padding: 20px 20px;
//   z-index: 1;
// `;

// const Item = styled.button`
//   border: none;
//   background-color: #eee;
//   width: 80px;
//   line-height: 80px;
//   vertical-align: middle;
//   transition: all 0.3s;
//   border-radius: 3px;
//   cursor: pointer;
//   white-space: nowrap;

//   &:hover {
//     background-color: #cab4b4;
//     width: 75px;
//     line-height: 50px;
//     border-radius: 5px;
//     color: #fff
//   }
// `

const MovieWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(400px, 1fr));
    grid-gap: 100px;
    padding: 70px 50px 50px 50px;
    width: 80%;
    margin-top: 140px;

    @media screen and (max-width: 1090px) {
      grid-template-columns: 1fr;
      width: 100%;
  }
`;

const Loadings = styled.p`
    margin-top: 200px;
    font-weight: bold;
    font-size: 30px;
`;

export default Home;
