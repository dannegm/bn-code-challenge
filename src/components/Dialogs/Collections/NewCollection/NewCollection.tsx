import React, { FunctionComponent } from 'react';

import { INewCollection } from './INewCollection';

import { Wrapper, Title, Button } from './NewCollection.styled';

export const NewCollection: FunctionComponent<INewCollection> = () => (
    <Wrapper>
        <Title>Dialog - New Collection</Title>
        <Button>Click Here</Button>
    </Wrapper>
);
