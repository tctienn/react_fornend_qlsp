import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Demo from './screen/Demo';
import Demo2 from './screen/Demo2';
import Demo4 from './screen/Demo4';
import DemoRedux from './screen/DemoRedux';

export default function Appcompo() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Demo2 />} /> */}
                <Route path="/" element={<DemoRedux />} />
                {/* <Route path="/" element={<Demo4 />} /> */}
                {/* <Route path='/demo2/:id' element={<Demo />} /> */}
                <Route>lỗi </Route>

                {/* <Route path="/demo/:id" element={<Demo />} /> */}
                {/* <Route path='/cart' element={<Cart />} /> */}
            </Routes>
        </BrowserRouter>
    )
}
