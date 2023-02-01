import React, {FC, useState} from 'react';
import './Hello.pcss';
import {DatePicker} from "antd";

type Props = {};

export const Hello: FC<Props> = ({}) => {
    const [date, setDate] = useState<Date>();
    return <div className={'Hello'}>
        <h1>Play with playwright</h1>
        <div>
            <DatePicker onChange={(date) => setDate(date?.toDate())}></DatePicker>
            <div data-testid={"selectedDate"}>Selected Date: {date?.toDateString()}</div>
        </div>
    </div>;
}
