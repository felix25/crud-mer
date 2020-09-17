import React from 'react';
import {Wrapper,ContentInner} from './layaout-container.styles'
const LayaoutContainer =(props) =>(
    <Wrapper>
        <ContentInner>
            {props.children}
        </ContentInner>
    </Wrapper>
)
export default LayaoutContainer;