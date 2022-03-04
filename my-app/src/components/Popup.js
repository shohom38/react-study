import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import 'antd/dist/antd.css';


function ImgPopUp(props) {

    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    // const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getDetail = async () => {
      await axios.get(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
          ).then((Response) => {
              // console.log(Response.data.data.movie);
              setMovie(Response.data.data.movie);
          }).catch((Error) => {
              console.log(Error);
          })
          setLoading(false);
        };
        useEffect(() => {
        getDetail();
    });

    const { onClose } = props;

    return (
        <ImgPop onClick={() => {
            onClose(false);
        }}>
            {loading ? (
                <Loading>
                    <Spin />
                </Loading>
            ) : (
                <img alt={movie.title} src={movie.large_cover_image} />
            )}
        </ImgPop>

    )
}

const FadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const SlideX = keyframes`
    from {
        opacity: 0;
        transform: translateX(25%);
    }
    to {
        opacity: 1;
        transform: translateX(0%);
    }
`

const ImgPop = styled.div`
    width: 100%;
    margin: 0 auto;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5% 0;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    background: rgba(0,0,0,0.6);
    animation: ${FadeIn} 0.5s ease-in-out;
    cursor: pointer;

    & > img {
        height: 100%;
        animation: ${SlideX} 1s ease-in-out;
        cursor: default;
    }
`




const Loading = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px auto;
    margin-bottom: 20px;
    padding: 30px 50px;
    text-align: center;
    /* background: rgba(0, 0, 0, 0.05); */
    border-radius: 4px;

    & > div {
        padding: 50%;
    }
`
  export default ImgPopUp;