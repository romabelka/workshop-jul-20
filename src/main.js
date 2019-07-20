import React from 'react'
import {render} from 'react-dom'
import Header from './components/header'
import Article from "./components/article";

render(<div>
    <Header/>
    <Article/>
</div>, document.getElementById('app'))
