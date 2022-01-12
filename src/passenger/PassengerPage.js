import React, {useEffect, useState} from 'react';
import PageLayout from "../layout/PageLayout";
import ContentTemplate from "../layout/ContentTemplate";
import axios from "axios";
import Passenger from "./Passenger";
import $ from 'jquery';

const PassengerPage = () => {
    const [response, setResponse] = useState();
    const [bottom, setBottom] = useState(false);
    const [list, setList] = useState([]);

    useEffect(async () => {
        let res = await axios.get('https://api.instantwebtools.net/v1/passenger?page=0&size=10');
        setResponse(res.data.data);
    }, []);

    useEffect(() => {
        response !== undefined && getList();
    }, [response]);

    useEffect(async () => {
        response !== undefined && bottom && getList();
        await setBottom(false);
    }, [bottom]);

    const getList = () => {
        if (response.length <= 4) {
            setList(list.concat(response));
        } else {
            setList(list.concat(response.splice(0, 4)));
        }
    }

    $(window).scroll(function () {
        $(window).scrollTop() + $(window).innerHeight() >= $('body').prop('scrollHeight') && setBottom(true);
    })

    return (
        <PageLayout>
            <ContentTemplate>

                <h2>Passenger List</h2>

                <div>
                    {
                        list !== undefined && (
                            list.map(data => (
                                <Passenger info={data} key={data._id}/>
                            ))
                        )
                    }
                </div>

            </ContentTemplate>
        </PageLayout>
    );
};

export default PassengerPage;
