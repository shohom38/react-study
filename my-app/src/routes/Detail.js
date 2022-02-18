import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Layout, Spin } from "antd";
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getDetail = async () => {
      await axios.get(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
          ).then((Response) => {
              console.log(Response.data.data.movie);
              setMovie(Response.data.data.movie);
          }).catch((Error) => {
              console.log(Error);
          })
          setLoading(false);
        };
        useEffect(() => {
        getDetail();
    });
    // console.log(id);
    // console.log(movie.year);
    // console.log(movie);
    return (
        <Layout>

            <Container>
                {loading ? (
                    <Loading>
                        <Spin />
                    </Loading>
                    ) : (
                        <div>
                            <Header>
                                <Link to={`/`}><LinkSpan>RANK HOME</LinkSpan></Link>
                            </Header>
                            <Content>
                                <DetailCov>
                                    <MovieTitle>{movie.title}</MovieTitle>
                                    <Year>{movie.year}</Year>
                                    <CovImg alt={movie.title} src={movie.medium_cover_image} />
                                    <p>{movie.description_full}</p>
                                </DetailCov>
                            </Content>
                        </div>
            )}
            </Container>
        </Layout>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

// const NavWrap = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 
//                 0 8px 16px -8px rgba(0, 0, 0, 0.3), 
//                 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
//     background-color: #fff;
//     display: flex;
//     flex-flow: row nowrap;
//     justify-content: space-evenly;
//     padding: 20px 20px;
//     z-index: 1;
// `;

const Loading = styled.div`
    margin: 20px 0;
    margin-bottom: 20px;
    padding: 30px 50px;
    text-align: center;
    /* background: rgba(0, 0, 0, 0.05); */
    border-radius: 4px;
`

const DetailCov = styled.div`
    margin-top: 140px;
    font-weight: 300;
    padding: 20px;
    border-radius: 5px;
    color: #adaeb9;
    display: grid;
    grid-template-columns: minmax(150px, 1fr) 2fr;
    grid-gap: 20px;
    text-decoration: none;
    color: inherit;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 
                0 8px 16px -8px rgba(0, 0, 0, 0.3), 
                0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    background-color: #fff;
    min-width: 740px;
`;

const MovieTitle = styled.h2`
    margin: 0;
    text-decoration: none;

    & a {
        margin-bottom: 5px;
        font-size: 24px;
        color: #2c2c2c;
        text-decoration: none;
    }
`;

const Year = styled.h3`
    margin: 0;
    margin-right: 10px;
    font-size: 14px;
    text-decoration: none;
    vertical-align: middle;
    line-height: 14px;
`;

const CovImg = styled.img`
    max-width: 150px;
    width: 100%;
    margin-right: 30px;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 
                0 18px 36px -18px rgba(0, 0, 0, 0.3), 
                0 -12px 36px -8px rgba(0, 0, 0, 0.025);
`;

const LinkSpan = styled(Header)`
    text-decoration: none;
    text-align: center;
    color: #fff;
    &:hover {
        color: skyblue;
        transition: all .5s;
    }
`;

export default Detail;