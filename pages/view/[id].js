import {useRouter} from "next/router";
import axios from "axios";
import {useEffect, useState} from "react";
import Item from "../../src/component/Item";

const Post = () => {
    const router = useRouter();
    const { id } = router.query;

    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

    const [item, setItem] = useState({});

    function getData() {
        axios.get(API_URL)
            .then(res => {
                console.log(res.data);
                setItem(res.data);
            });
    }

    // 최초 한번 로드
    useEffect(() => {
        if( id && id > 0) {
            getData();
        }
    }, [id]);


    return <Item item={item} />;
}

export default Post;