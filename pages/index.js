import Head from 'next/head'
import {useEffect, useState} from "react";
import ItemList from "../src/component/ItemList";
import styles from "../styles/Home.module.css";
import axios from "axios";
import {Divider, Header} from "semantic-ui-react";
/*
* 실행
* npm run dev
* 통신을 위해 axios 설치
* npm i axios
* */

export default function Home() {
    const [list, setList] = useState([]);

    const API_URL =
        "https://makeup-api.herokuapp.com/api/v1/products.json";

    // const getApiData = async (request) => {
    //     let response
    //     try {
    //         response = await axios.get(API_URL, {
    //             params: {
    //               brand: "maybelline"
    //             },
    //         })
    //     } catch (e) {
    //         console.log(e);
    //     }
    //     return response;
    // }


    function getData() {
        axios.get(API_URL, {
                         params: {
                           brand: "maybelline"
                         },})
            .then((res) => {
                console.log(res.data);
                setList(res.data);
            });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
    // <div>
    //   create-next-app create-next-app 으로 설치하면
    //   <br />
    //   1. 컴파일과 번들링이 자동으로 된다 (webpack 과 babel)
    //   <br />
    //   2. 자동 리프레쉬 기능으로 수정하면 화면에 바로 반영됩니다.
    //   <br />
    //   3. 서버사이드 랜더링이 지원됩니다.
    //   <br />
    //   4. 스태틱 파일을 지원합니다.
    // </div>
        <div>
            <Head>
                <title>HOME | 케이블가이</title>
            </Head>
            <Header as="h3" style={{ paddingTop: 30 }}>
                베스트 상품
            </Header>
            <Divider />
            <ItemList list={list.slice(0, 9)} />
            <Header as="h3" style={{ paddingTop: 30 }}>
                신상품
            </Header>
            <Divider />
            <ItemList list={list.slice(9)} />
        </div>
  );


}
